import {useRoute, useRouter} from 'react-router5';
import Analyse from './Analyse';
import React from 'react';
import {Filtering, SortOrder, SuggestionField} from '../../core/types';
import Modal from './Modal';

export default function AnalyseModal() {
  const router = useRouter();
  const {route, route: {params}} = useRoute();

  const onClose = () => {
    router.navigate('cas', { ca: params.ca });
  };

  if (route.name !== 'cas.analyse'){
    return null;
  }

  const filtering: Filtering<SuggestionField> = {
    search: null,
    sort: params.sort || SuggestionField.asn,
    order: params.order || SortOrder.asc,
    limit: parseInt(params.limit, 10) || 10,
    page: parseInt(params.page, 10) || 1,
  };

  return (
    <Modal onClose={onClose}>
      {route.name === 'cas.analyse' && (
        <Analyse
          onClose={onClose}
          filtering={filtering}
        />
      )}
    </Modal>
  );
}
