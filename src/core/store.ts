import Api from './api';
import {defaultLocale} from './config';
import loadLocale, {Translations} from './translations';
import {
  CaDetails,
  Data,
  Locale,
  LoginMethod,
  Notification,
  UserDetails,
  PersistedData,
  RepoStatus,
  Roa,
  NotificationType,
  RouteParams,
  Route,
  Filtering,
  Parent,
  ParentParams,
  Suggestion,
  RoaField,
  SuggestionField,
  ErrorResponseType,
} from './types';
import {compareRoa, compareSuggestion} from './utils';

export default class Store implements Data {
  // general purpose notification message
  notification: Notification | null = null;

  // list of certificate authorities
  cas: string[] | null = null;

  // currently selected certificate authority
  ca: string | null = null;

  // currently selected locale
  locale: Locale = defaultLocale;

  // API access token
  token: string | null = null;

  // translation object
  translations: Translations | null = null;

  // details of a certain certificate authority
  caDetails: Record<string, CaDetails> = {};

  // list of ROA's / announcements for a certain certificate authority
  roas: Record<string, Roa[]> = {};

  // list of suggestions for a certain certificate authority
  suggestions: Record<string, Suggestion[]> = {};

  // repository status for a certain certificate authority
  repoStatus: Record<string, RepoStatus> = {};

  // list of parents for a certain certificate authority
  parents: Record<string, Parent[]> = {};

  // details of logged in user
  userDetails: UserDetails | null = null;

  // which login method to use
  loginMethod: LoginMethod | null = null;

  // internal references
  api: Api;

  // load initial store data
  constructor() {
    this.api = new Api();
    this.loadPersistedState();
  }


  getRoas(filtering?: Filtering<RoaField>): Roa[] {
    let roas = this.roas && this.ca && this.roas[this.ca] || [];
    roas = roas.filter((roa) => !roa.allowed_by);

    if (filtering) {
      // apply sorting
      roas = roas.slice().sort((a, b) => compareRoa(a, b, filtering.sort, filtering.order));
      // apply pagination
      const offset = (filtering.page - 1) * filtering.limit;
      roas = roas.slice(offset, offset + filtering.limit);
    }

    return roas;
  }

  getSuggestions(filtering?: Filtering<SuggestionField>): Array<Suggestion> {
    let suggestions = this.suggestions && this.ca && this.suggestions[this.ca] || [];
    if (filtering) {
      suggestions = suggestions.slice().sort((a, b) => compareSuggestion(a, b, filtering.sort, filtering.order));
    }
    return suggestions;
  }

  // try load data and
  async handleError<T>(callback: () => Promise<T>) {
    try {
      return await callback();
    } catch (e) {
      const error = e as ErrorResponseType;
      if (error.status === 401 || error.status === 403) {
        this.setToken(null);
      }

      this.setNotification({
        type: NotificationType.error,
        message: error.msg || 'Error',
      });
      return false;
    }
  }

  // load persisted state from localStorage en sessionStorage
  loadPersistedState() {
    const data: string | null = window.localStorage.getItem('krill');
    this.setToken(window.sessionStorage.getItem('krillToken'));

    if (data !== null) {
      try {
        const persistedData: PersistedData = JSON.parse(data);

        this.ca = persistedData.ca;
        this.locale = persistedData.locale;
        this.userDetails = persistedData.userDetails;
      } catch (e) {
        console.error(e);
      }
    }
  }

  // store persisted state in localStorage en sessionStorage
  storePersistedData() {
    if (this.token) {
      window.sessionStorage.setItem('krillToken', this.token);
    } else {
      window.sessionStorage.removeItem('krillToken');
    }

    window.localStorage.setItem('krill', JSON.stringify({
      ca: this.ca,
      locale: this.locale,
      userDetails: this.userDetails,
    }));
  }

  // update the locale and load translations
  setLocale(locale: Locale) {
    this.locale = locale;
    return this.loadTranslations();
  }

  // load translations given a locale
  async loadTranslations() {
    this.translations = await loadLocale(this.locale);
  }

  // load translations given a locale
  async loadLoginMethod() {
    if (!this.loginMethod) {
      this.loginMethod = await this.api.getLoginMethod();
    }

    return this.loginMethod;
  }

  // load translations given a locale
  async tryLogin(password: string, username?: string) {
    try {
      const details = await this.api.postLogin(password, username); // username is optional
      this.setNotification(null);
      this.setToken(details.token);
      this.setUserDetails({
        id: details.id,
        attributes: details.attributes,
      });
    } catch (e) {
      this.setNotification({
        type: NotificationType.error,
        message: this.translations?.login.error,
      });
    }
  }

  // load available certificate authorities and select the first one if none is selected
  async loadCas() {
    if (this.cas !== null || !this.token) {
      return;
    }

    await this.handleError(async () => {
      this.cas = await this.api.getCas();

      if (!this.ca && this.cas.length > 0) {
        this.ca = this.cas[0];
      }
    });
  }

  // load certificate authority details and ROA's
  async loadCa(force?: boolean) {
    if (!this.ca || (this.ca && this.caDetails[this.ca] && this.roas[this.ca] && force !== true)) {
      return;
    }

    await this.handleError(async () => {
      if (this.ca !== null) {
        const [caDetails, roas, suggestions] = await Promise.all([
          this.api.getCaDetails(this.ca),
          this.api.getCaRoas(this.ca),
          this.api.getCaSuggestions(this.ca),
          this.api.getCaParents(this.ca),
          this.api.getCaRepoStatus(this.ca),
        ]);

        this.caDetails[this.ca] = caDetails;
        this.roas[this.ca] = roas;
        this.suggestions[this.ca] = suggestions;
      }
    });
  }

  async loadParents(force?: boolean) {
    if (!this.ca || (this.ca && this.parents[this.ca] && force !== true)) {
      return;
    }

    await this.handleError(async () => {
      if (this.ca !== null) {
        this.parents[this.ca] = await this.api.getCaParents(this.ca);
      }
    });
  }

  async loadRepoStatus(force?: boolean) {
    if (!this.ca || (this.ca && this.repoStatus[this.ca] && force !== true)) {
      return;
    }

    await this.handleError(async () => {
      if (this.ca !== null) {
        this.repoStatus[this.ca] = await this.api.getCaRepoStatus(this.ca);
      }
    });
  }

  async changeRoutes(add: Suggestion[], remove: Suggestion[]) {
    if (this.ca === null) {
      return;
    }

    await this.api.updateRoutes(this.ca, {
      added: add,
      removed: remove,
    });
    await this.loadCa(true);
  }

  async addRoute(params: RouteParams) {
    if (this.ca === null) {
      return;
    }

    const route: Route = {
      asn: parseInt(params.asn, 10),
      prefix: params.prefix,
      max_length: parseInt(params.max_length, 10),
    };

    await this.handleError(async () => {
      await this.api.updateRoutes(this.ca as string, {
        added: [route],
        removed: [],
      });
    });

    await this.loadCa(true);
  }

  async deleteRoute(params: RouteParams) {
    if (this.ca === null) {
      return;
    }

    const route: Route = {
      asn: parseInt(params.asn, 10),
      prefix: params.prefix,
      max_length: parseInt(params.max_length, 10),
    };
    await this.api.updateRoutes(this.ca, {
      added: [],
      removed: [route],
    });
    await this.loadCa(true);
  }

  async addParent(params: ParentParams) {
    if (this.ca === null) {
      return;
    }

    return await this.handleError(async () => {
      await this.api.postParent(this.ca, params.name, params.response ? params.response : '');
      await this.loadParents(true);
      return true;
    });
  }

  // update notification
  setNotification(notification: Notification | null) {
    this.notification = notification;
  }

  // update the user details
  setUserDetails(userDetails: UserDetails | null) {
    this.userDetails = userDetails;
  }

  // update to CA
  setCa(ca: string) {
    this.ca = ca;
  }

  // update API access token
  setToken(token: string | null) {
    this.token = token;
    this.api.setToken(token);
  }
}
