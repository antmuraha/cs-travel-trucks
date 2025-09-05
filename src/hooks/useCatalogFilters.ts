import { useState } from 'react';
import { useSearchParams } from 'react-router';

const useCatalogFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentEquipments, setCurrentEquipments] = useState(searchParams.getAll('equipments')?.[0]?.split(',') || []);
  const selectedForm = searchParams.get('form');
  const location = searchParams.get('location') || '';

  return {
    currentEquipments,
    setCurrentEquipments,
    selectedForm,
    location,
    setSearchParams,
  };
};

export default useCatalogFilters;
