import { Locale } from './types';

export default async function loadLocale(locale: Locale) {
  const module = await import(`../locales/${locale}.json`);

  return module.default;
}

export function format(message: string, params: Record<string, string>): string {
  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(`{${key}}`, value);
  }, message);
}

export interface Translations {
  common: {
    readthedocs: string,
    report: string,
    confirm: string,
    cancel: string,
    ok: string,
    error: string,
    success: string,
    copy: string,
    download: string,
    dropOrClick: string,
    started: string,
    newversion: string,
    supportcontracts: string,
    warning: string,
    idle: string,
    nodata: string,
    copySuccess: string,
    edit: string,
    page: string,
    userInfo: {
      title: string,
      user: string,
    },
  },
  login: {
    id: string,
    idPlaceholder: string,
    password: string,
    placeholder: string,
    signin: string,
    required: string,
    error: string,
    copied: string,
  },
  onboarding: {
    welcome: string,
    welcomeHtml: string,
    addCAForm: {
      required: string,
      format: string,
      confirm: string,
      confirmation: {
        title: string,
        message: string,
      },
    },
  },
  cas: {
    loading: string,
    ca: string,
    cas: string,
    search: string,
    noCas: string,
  },
  caDetails: {
    loading: string,
    current: string,
    download: string,
    noRoas: string,
    noResources: string,
    noChildren: string,
    addRoa: string,
    roas: string,
    resources: string,
    parents: string,
    repo: string,
    type: string,
    properties: string,
    property: string,
    value: string,
    kind: string,
    resource: string,
    children: string,
    handle: string,
    maxLength: string,
    maxLengthTooltip: string,
    confirmation: {
      title: string,
      message: string,
      added: string,
      retired: string,
      retiredSuccess: string,
      addedSuccess: string,
    },
    addROAForm: {
      required: string,
      asn_format: string,
      prefix_format: string,
    },
    onboardingWarning: string,
    initialize: string,
    noResourcesYet: string,
    clickToRefresh: string,
    parentsTab: {
      request: string,
      response: string,
      addParent: string,
      addParentSuccess: string,
      arin: string,
      name: string,
      namerequired: string,
      nameformat: string,
    },
    repoTab: {
      request: string,
      response: string,
      addRepoSuccess: string,
    },
    analyseThis: string,
    analysis: string,
    suggestions: {
      following: string,
      readMore: string,
      nochanges: string,
      adding: string,
      removing: string,
      keep: string,
      willResult: string,
      yourChoice: string,
      ourSuggestion: string,
      ourSuggestionHelp: string,
      addThis: string,
      removeThis: string,
      willAdd: string,
      willRemove: string,
      reasons: {
        not_found: string,
        not_held: string,
        invalid_asn: string,
        invalid_length: string,
        stale: string,
        disallowing: string,
        as0_redundant: string,
        redundant: string,
        too_permissive: string,
        specific: string,
        new: string,
      },
    },
    syncParents: string,
    syncRepo: string,
    lastExchange: string,
    nextExchange: string,
    exchangeUri: string,
    allResources: string,
    entitlements: string,
    showEntitlements: string,
    parentCertificate: string,
    published: string,
  },
  announcements: {
    noRoasOrAnnouncements: string,
    search: string,
    authorizes: string,
    disallows: string,
    asn: string,
    prefix: string,
    stateLabel: string,
    state: {
      roa_seen: string,
      roa_seen_help: string,
      roa_unseen: string,
      roa_unseen_help: string,
      roa_not_held: string,
      roa_not_held_help: string,
      roa_no_announcement_info: string,
      roa_too_permissive: string,
      roa_too_permissive_help: string,
      roa_disallowing: string,
      roa_disallowing_help: string,
      roa_redundant: string,
      roa_redundant_help: string,
      roa_as0: string,
      roa_as0_help: string,
      roa_as0_redundant: string,
      roa_as0_redundant_help: string,
      announcement_not_found: string,
      announcement_not_found_help: string,
      announcement_invalid_length: string,
      announcement_invalid_length_help: string,
      announcement_invalid_asn: string,
      announcement_invalid_asn_help: string,
    },
    download: string,
  },
  deltaErrors: {
    duplicates: string,
    covered: string,
    notheld: string,
    unknowns: string,
    invalid_length: string,
    covering: string,
    as0_exists: string,
    as0_overlaps: string,
  },
  errors: {
    repo_not_set: string,
    pub_unknown: string,
    pub_duplicate: string,
    pub_outside_jail: string,
    pub_uri_no_slash: string,
    pub_no_embedded_repo: string,
    ca_duplicate: string,
    ca_unknown: string,
    ca_repo_same: string,
    ca_repo_issue: string,
    ca_repo_response_invalid_xml: string,
    ca_repo_response_wrong_xml: string,
    ca_parent_duplicate: string,
    ca_parent_xml_duplicate: string,
    ca_parent_unknown: string,
    ca_parent_issue: string,
    ca_parent_response_invalid_xml: string,
    ca_parent_response_wrong_xml: string,
    ca_child_duplicate: string,
    ca_child_unknown: string,
    ca_child_resources_required: string,
    ca_roa_unknown: string,
    ca_roa_duplicate: string,
    ca_roa_invalid_max_length: string,
    ca_roa_not_entitled: string,
    ta_not_allowed: string,
    ta_name_reserved: string,
    ca_roa_delta_error: string,
  },
  testbed: {
    welcome: string,
    disclaimer: {
      heading: string,
      body: string,
    },
    rpconfighelp: {
      heading: string,
      body: string,
    },
    regunreg: {
      heading: string,
      body: string,
    },
    rfcdoclink: string,
    childhandle: string,
    publisherhandle: string,
    responseXML: string,
    addChild: {
      heading: string,
      requestXML: {
        label: string,
        placeholder: string,
      },
      asnresources: {
        label: string,
        placeholder: string,
      },
      ipv4resources: {
        label: string,
        placeholder: string,
      },
      ipv6resources: {
        label: string,
        placeholder: string,
      },
      confirm: string,
      format: string,
      required: string,
      confirmation: {
        title: string,
        message: string,
      },
      success: string,
      registeranother: string,
    },
    removeChild: {
      heading: string,
      placeholder: string,
      confirm: string,
      confirmation: {
        title: string,
        message: string,
      },
      success: string,
    },
    addPublisher: {
      heading: string,
      requestXML: {
        label: string,
        placeholder: string,
      },
      confirm: string,
      format: string,
      required: string,
      confirmation: {
        title: string,
        message: string,
      },
      success: string,
      registeranother: string,
    },
    removePublisher: {
      heading: string,
      placeholder: string,
      confirm: string,
      confirmation: {
        title: string,
        message: string,
      },
      success: string,
    },
    errors: {
      invalid_xml: string,
      missing_xml_el: string,
      missing_xml_child_el: string,
      missing_xml_attr: string,
      empty_xml_el: string,
      empty_xml_attr: string,
      child_handle_required: string,
      publisher_handle_required: string,
    },
  },
}
