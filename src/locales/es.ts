import { Translations } from '../core/translations';

export const translations: Translations = {
  'common': {
    'readthedocs': 'Leer los documentos',
    'report': 'Reportar un problema',
    'confirm': 'Confirmar',
    'cancel': 'Cancelar',
    'ok': 'OK',
    'error': 'Error',
    'success': 'Éxito!',
    'copy': 'Copiar al portapapeles',
    'download': 'Descargar',
    'dropOrClick': 'Colocar el archivo aquí o hacer <em>clic para cargarlo</em>',
    'started': 'Krill está corriendo desde',
    'newversion': '¡Hay una nueva versión disponible!',
    'supportcontracts': 'Contratos de soporte y mantenimiento',
    'warning': 'Advertencia',
    'idle': 'Tu sesion ha caducado debido a inactividad.',
    'nodata': 'Sin datos',
    'copySuccess': 'El XML se copió a su portapapeles',
    'edit': 'Edit',
    'page': 'page',
    'userInfo': {
      'title': 'Login Details',
      'user': 'User'
    }
  },
  'login': {
    'password': 'Contraseña',
    'placeholder': 'Su contraseña',
    'signin': 'Iniciar sesión',
    'required': 'Ingrese su contraseña',
    'error': 'La contraseña que ingresó es incorrecta',
    'copied': 'NO deberías crear tus claves como en <a href=\'https://xkcd.com/936/\' target=\'_blank\'>https://xkcd.com/936/</a>',
    'id': 'Nombre de usuario',
    'idPlaceholder': 'Su nombre de usuario',
    'idRequired': 'Por favor ingrese su nombre de usuario',
    'retry': 'Haga click en {0} para volver a la pagina de login.',
    'here': 'aqui'
  },
  'onboarding': {
    'welcome': 'Bienvenido a Krill',
    'welcomeHtml': 'Empecemos por crear su Autoridad de Certificación (CA) RPKI. Esta se usará para configurar el RPKI Delegado con una o múltiples CA padre, generalmente su Registro Regional o Nacional de Internet.<br><br>El identificador que escoja identificará a su CA en sus interacciones con las CA padres e hijos. No se publicará en el RPKI. Escoja un identificador que ayude a los demás a reconocer a su organización. Una vez guardado, el identificador no se puede cambiar. <a href=\'https://rpki.readthedocs.io/en/latest/krill/manage-cas.html#adding-your-ca\' target=\'_blank\'>Más información...</a>',
    'addCAForm': {
      'required': 'Este campo es obligatorio',
      'format': 'Este no es un nombre de CA válido',
      'confirm': 'Crear CA',
      'confirmation': {
        'title': 'Advertencia',
        'message': 'Una vez guardado, el identificador no se puede cambiar. żDesea continuar?'
      }
    }
  },
  'cas': {
    'loading': 'Cargando Autoridades de Certificación',
    'ca': 'Autoridad de Certificación',
    'cas': 'Autoridades de Certificación',
    'search': 'Buscar CAs...',
    'noCas': 'No hay ninguna autoridad de certificación definida.'
  },
  'caDetails': {
    'loading': 'Cargando {handle}',
    'current': 'Autoridad de Certificación actual',
    'download': 'Descargar PEM',
    'noRoas': 'No se encontró ningún ROA.',
    'noResources': 'Todavía no ha recibido ningún recurso',
    'noChildren': 'No se encontraron hijos.',
    'addRoa': 'Agregar ROA',
    'roas': 'ROAs',
    'resources': 'Recursos',
    'parents': 'Padres',
    'repo': 'Repositorio',
    'type': 'Tipo',
    'properties': 'Propiedades',
    'property': 'Propiedad',
    'value': 'Valor',
    'kind': 'Clase',
    'resource': 'Recurso',
    'children': 'Hijos',
    'handle': 'Identificador',
    // TODO: translate
    'comment': 'Comment',
    'maxLength': 'Largo máx',
    'maxLengthTooltip': 'Si el largo máximo no es especificado (-), se toma por defecto el largo del prefijo.',
    'confirmation': {
      'title': 'Advertencia',
      'message': 'Esto eliminará el ROA \'{prefix}-{max_length} => {asn}\'. żDesea continuar?',
      'added': 'ROA agregado',
      'retired': 'ROA eliminado',
      'retiredSuccess': 'El ROA se ha eliminado',
      'addedSuccess': 'El ROA se ha agregado'
    },
    'addROAForm': {
      'required': 'Este campo es obligatorio',
      'asn_format': 'Este no es un ASN válido',
      'prefix_format': 'Ingrese un prefijo IPv4 o IPv6 válido'
    },
    'onboardingWarning': 'Deberá conectar su CA a un repositorio RPKI público donde pueda publicar su certificado y sus ROA. Tan pronto como se complete la configuración del padre, el software de validación comenzará a recuperar su certificado y los ROA que cree a partir de este repositorio.',
    'initialize': 'Primero inicialice el repositorio RPKI y/o el padre.',
    'noResourcesYet': 'Todavía no ha recibido ningún recurso',
    'clickToRefresh': 'Haga clic aquí para actualizar',
    'parentsTab': {
      'request': 'Solicitud padre',
      'response': 'Respuesta padre',
      'addParent': 'Agregar otro padre',
      'addParentSuccess': 'Se agregó el padre',
      'name': 'Nombre del padre',
      'namerequired': 'El nombre del padre es un dato necesario',
      'nameformat': 'Este nombre de padre no es válido'
    },
    'repoTab': {
      'request': 'Solicitud repositorio',
      'response': 'Respuesta repositorio',
      // TODO translate
      'addRepo': 'Add a repository',
      'addRepoSuccess': 'Se agregó el repositorio'
    },
    'analyseThis': 'Análisis de mis ROAs',
    'analysis': 'Análisis de ROAs',
    'suggestions': {
      'following': 'Por favor verifique que estos cambios a sus ROAs sean correctos.',
      'readMore': 'Read more..',
      'nochanges': 'No encontramos cambios a sugerir en este momento',
      'adding': 'Agregando',
      'removing': 'Eliminando ROA',
      'keep': 'Mantener todo en su estado actual.',
      'willResult': 'Producirá',
      'yourChoice': 'Su selección',
      'ourSuggestion': 'Nuestra sugerencias',
      'ourSuggestionHelp': 'Nuestras sugerencias se basan en los datos de tablas de enrutamiento de RIPE RIS, ¡ por favor verifique esto sea correcto !',
      'addThis': 'Agregar esto',
      'removeThis': 'Eliminar esto',
      'willAdd': 'Agregaremos este ROA',
      'willRemove': 'Eliminaremos este ROA',
      'reasons': {
        'not_found': 'No encontrado',
        'not_held': 'El prefijo ya no se encuentra en sus certificado(s). Los ROAs correspondientes no serán publicados',
        'invalid_asn': 'ASN Invalido',
        'invalid_length': 'Largo de prefijo inválido',
        'stale': 'rancio/viejo',
        'disallowing': 'Este ROA prohibe todo anuncio y no autoriza ninguno. ¿Quizá sería mejor utilizar AS0?',
        'as0_redundant': 'Redundante en AS0',
        'redundant': 'Redundante',
        'too_permissive': 'Demasiado permisivo',
        'specific': 'Permitir anuncios muy específicos en un ROA puede ser demasiado permisivo.',
        'new': 'Nuevo'
      }
    },
    'syncParents': 'Refrescar padres',
    'syncRepo': 'Refrescar respositorios',
    'lastExchange': 'Último intercambio',
    'exchangeUri': 'URI',
    'nextExchange': 'Próximo intercambio antes de',
    'allResources': 'Todos los recursos',
    'entitlements': 'Derechos de uso',
    'showEntitlements': 'Mostrar detalle sobre los derechos de uso',
    'parentCertificate': 'Certificado padre',
    'published': 'Publicado'
  },
  'announcements': {
    'noRoasOrAnnouncements': 'ROAs no encontrados.',
    'search': 'Busquedas por ASNs, IPs o estados...',
    'authorizes': ' {number} anuncios autorizados',
    'disallows': '{number}  anuncios no autorizados',
    'asn': 'ASN',
    'prefix': 'Bloques IPs',
    'stateLabel': 'Estado',
    'state': {
      'roa_seen': 'VISTO',
      'roa_seen_help': 'Este ROA se corresponde con los anuncios vistos en BGP',
      'roa_unseen': 'NO VISTO',
      'roa_unseen_help': 'No vemos que existan anuncios BGP que se correspondan con este ROA',
      'roa_not_held': 'PREFIJO ELIMINADO',
      'roa_not_held_help': 'El prefijo ya no se encuentra en sus certificado(s). Los ROAs correspondientes no serán publicados',
      'roa_no_announcement_info': 'NO HAY INFORMACIÓN DEL ANUNCIO',
      'roa_too_permissive': 'DEMASIADO PERMISIVO',
      'roa_too_permissive_help': 'Este ROA se corresponde con anuncios vistos en BGP pero tambien permite anuncios invisibles.',
      'roa_disallowing': 'PROHIBIENDO',
      'roa_disallowing_help': 'Este ROA únicamente prohibe anuncios. Si esto es intencional, quizás le sea mejor utililizar AS0.',
      'roa_redundant': 'REDUNDANTE',
      'roa_redundant_help': 'Este ROA es redundante porque existen uno o mas ROAs que ya cubren esta combinación de prefijo, largo y ASN de origen.',
      'roa_as0': 'AS0',
      'roa_as0_help': 'Este ROA perimte inhabilitar todo anuncio para un prefijo.',
      'roa_as0_redundant': 'REDUNDANTE',
      'roa_as0_redundant_help': 'Este ROA con AS0 es redundante porque ya existen uno o mas ROAs que cubren este prefijo.',
      'announcement_not_found': 'NO ENCONTRADO',
      'announcement_not_found_help': 'Este anuncio no está cubierto por ninguno de sus ROAs',
      'announcement_invalid_length': 'LARGO INVÁLIDO',
      'announcement_invalid_length_help': 'Este anuncio no es permitido debido a ser mas especifico que el prefijo y el largo máximo autorizado para este ASN',
      'announcement_invalid_asn': 'ASN INVÁLIDO',
      'announcement_invalid_asn_help': 'Este anuncio no es permitido debido a que el anuncio esta permitido solamente desde otro ASN'
    },
    'download': 'Descargar como CSV'
  },
  'deltaErrors': {
    'duplicates': 'Duplicados',
    'covered': 'Cubierto',
    'notheld': 'Notheld',
    'unknowns': 'Desconocidos',
    'invalid_length': 'Largo inválido',
    'covering': 'Covertura',
    'as0_exists': 'Existe un AS0',
    'as0_overlaps': 'Existe un AS0 superpuesto'
  },
  'errors': {
    'repo_not_set': 'Primero debe configurar su repositorio',
    'pub_unknown': 'El publicador \'{publisher}\' es desconocido',
    'pub_duplicate': 'El publicador \'{publisher}\' ya se inicializó',
    'pub_outside_jail': 'Publicador uri \'{uri}\' fuera del repositorio uri \'{sia_base}\'',
    'pub_uri_no_slash': 'El publicador uri \'{uri}\' debe tener una barra diagonal al final',
    'pub_no_embedded_repo': 'No se configuró ningún repositorio integrado',
    'ca_duplicate': 'La CA \'{ca}\' ya se inicializó',
    'ca_unknown': 'La CA \'{ca}\' es desconocida',
    'ca_repo_same': 'Este repositorio ya está en uso',
    'ca_repo_issue': 'Se recibió un error del repositorio: {cause}',
    'ca_repo_response_invalid_xml': 'Se obtuvo un response xml inválido del repositorio',
    'ca_repo_response_wrong_xml': 'Se obtuvo una respuesta de padre, no de repositorio',
    'ca_parent_duplicate': 'Ya tiene un padre con el nombre \'{parent}\'',
    'ca_parent_xml_duplicate': 'Esta respuesta ya esta siendo utilizada por un padre llamado \'{parent}\'',
    'ca_parent_unknown': 'No tiene ningún padre con el nombre \'{parent}\'',
    'ca_parent_issue': 'Se recibió un error del padre \'{parent}\': {cause}',
    'ca_parent_response_invalid_xml': 'Se obtuvo un response xml inválido del padre',
    'ca_parent_response_wrong_xml': 'Se obtuvo una respuesta del repositorio al agregar el padre',
    'ca_child_duplicate': 'Ya tiene una CA hijo con el nombre \'{child}\'',
    'ca_child_unknown': 'No tiene ninguna CA hijo con el nombre \'{child}\'',
    'ca_child_resources_required': 'Debe especificar los recursos para la CA hijo \'{child}\'',
    'ca_roa_unknown': 'No se puede eliminar el ROA desconocido \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_duplicate': 'ROA duplicado \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_invalid_max_length': 'Largo máximo inválido en ROA \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_not_entitled': 'El prefijo \'{prefix}\' contenido en el ROA no está en ninguno de sus certificados actuales',
    'ta_not_allowed': 'Esta funcionalidad no es compatible con el ancla de confianza de prueba',
    'ta_name_reserved': 'Nombre reservado',
    'ca_roa_delta_error': 'Este ROA ha sido rechazado debido a los siguientes errores',
    'api_insufficient_rights': 'Usted no posee privilegios suficientes para realizar esta accion. Ponganse en contacto con el administrador.',
    'api_invalid_credentials': 'Las credenciales suministradas son incorrectas.',
    'api_login_error': 'Ocurrio un error durante el proceso de login: {cause}',
    'api_auth_transient_error': 'Ocurrio un error (quizas temporario) mientras se autenticaba su solicitud. Por favor intente mas tarde.',
    'api_auth_permanent_error': 'Ocurrio un error mientras se intentaba autenticar su solicitud. Pongase en contacto con el administrador.',
    'api_auth_session_expired': 'Su sesion ha caducado. Por favor ingrese nuevamente..',
    'general_error': 'Ocurrio un error inesperado. Por favor pongase en contacto con el administrador.'
  },
  'testbed': {
    'welcome': 'Bienvenido a este testbed de RPKI',
    'disclaimer': {
      'heading': 'Atencion',
      'body': 'Este testbed implementa una jerarquia de RPKI completamente independiente, la cual puede ser utilizada con propositos de expermientacion. En el se permite registrar cualquier recurso para ser utilizado por las CA hijas. No existen garantias acerca de la disponibilidad de este servicio. Si se encuentra con cualquier problema, <a href=\'https://github.com/NLnetLabs/krill/issues/new\'>por faovr haganoslo saber.</a>.'
    },
    'rpconfighelp': {
      'heading': 'TAL del testbed.',
      'body': 'Para obtener los datos publicados en este testbed por favor descarge este <a href=\'{tallink}\'>Trust Anchor Locator</a> (TAL) y configure su software de validacion para que lo utilice. Tenga en cuenta que usted NUNCA deberia utilizar este TAL en un ambiente de produccion. Solo se brinda este con objetivos de testeo.'
    },
    'regunreg': {
      'heading': 'Registrar/Deregistraro',
      'body': '<p>Utilice este formulario para registrar su autoridad certificadora RPKI como hija de este testbed, paara que de esa manera usted pueda crear ROAs para los recursos que usted dice poseer.</p><p>Si no desea alojar sus propios repositorios rsync y RRDP repositories es posible utlizar el formulario de registro de publicadores para configurar publicacion para sus ROAs en el repositorio alojado por el testbed. Utilice el formulario de deregistro para dar de baja relaciones previamente establecidas. (incluso las de otros usuarios del testbed!).</p>'
    },
    'rfcdoclink': 'Haga click aqui para visualizar la documentacion de RFC-8183 de este XML.',
    'childhandle': 'Identificador (handle) del hijo',
    'publisherhandle': 'Identificador (handle) del publicador',
    'responseXML': 'Respuesta XML del Testbed',
    'addChild': {
      'heading': 'Registrar CA',
      'requestXML': {
        'label': 'XML de la solicitud del hijo.',
        'placeholder': 'Pegue su <child_request/> XML aqui'
      },
      'asnresources': {
        'label': 'Recursos ASN',
        'placeholder': 'Los bloques de ASN: p.ej. AS1, AS3-4'
      },
      'ipv4resources': {
        'label': 'Recrusos IPv4',
        'placeholder': 'Los recursos IPv4:  p.ej. 192.168.0.0/16'
      },
      'ipv6resources': {
        'label': 'IPv6 Resources',
        'placeholder': 'Los recursos IPv6: p.ej. 2001:db8::/32'
      },
      'confirm': 'Registrar CA hija',
      'format': 'Este XML no es una solicitud de hijo valida.',
      'required': 'Por favor ingrese la solicitud en XML',
      'confirmation': {
        'title': 'Atencion',
        'message': 'Esta seguro de que desea registrar este hijo con el testbed ? '
      },
      'success': 'La CA hija \'{child_handle}\' ha sido agregada al testbed.',
      'registeranother': 'Registrar otra CA'
    },
    'removeChild': {
      'heading': 'Deregistrar CA',
      'placeholder': 'Ingrese el nobre de la CA que desea remover',
      'confirm': 'Elminiar CA hija',
      'confirmation': {
        'title': 'Atencion',
        'message': 'Esta seguro de que desea deregistrar este hijo de este testbed?'
      },
      'success': 'La CA hija \'{child_handle}\' ha sido eliminada de este testbed.'
    },
    'addPublisher': {
      'heading': 'Registrar publicador',
      'requestXML': {
        'label': 'XML de solicitud de publicador',
        'placeholder': 'Pegue su <publisher_request/> XML aqui'
      },
      'confirm': 'Registrar publicador',
      'format': 'Este no es un XML de solicitud de publicador valido.',
      'required': 'Por favor ingrese el XML de solicitud de publicador',
      'confirmation': {
        'title': 'Atencion',
        'message': 'Esta seguro de que desea registrar este publicador con este testbed?'
      },
      'success': 'El publicador \'{publisher_handle}\' ha sido registrado en este testbed.',
      'registeranother': 'Registre otro publicador.'
    },
    'removePublisher': {
      'heading': 'De registrar publicador',
      'placeholder': 'Ingrese el nombre del publicador a remover',
      'confirm': 'Remove publisher',
      'confirmation': {
        'title': 'Atencion',
        'message': 'Esta usted seguro de que quiere eliminar este publicador del testbed? '
      },
      'success': 'El publicador  \'{publisher_handle}\' ha sido eliminado del testbed.'
    },
    'errors': {
      'invalid_xml': 'Invalid XML: {err}',
      'missing_xml_el': 'Missing element {el}',
      'missing_xml_child_el': 'Missing child element {el} of element {parent}',
      'missing_xml_attr': 'Missing attribute {attr} on element {el}',
      'empty_xml_el': 'Element {el} cannot be empty',
      'empty_xml_attr': 'Attribute {attr} on element {el} cannot be empty',
      // TODO translate
      'non_ascii_xml_el': 'Element {el} cannot contain non-ASCII characters',
      'child_handle_required': 'Child Handle is required',
      'publisher_handle_required': 'Publisher Handle is required',
      'non_base64_certificate_xml_el': 'Element {el} must contain a correctly Base64 encoded self-signed X.509 BPKI certificate',
      'invalid_registration_data': 'Your registration details could not be parsed correctly'
    }
  }
};
