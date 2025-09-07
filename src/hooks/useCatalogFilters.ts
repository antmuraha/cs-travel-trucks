import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router';

const useCatalogFilters = () => {
  const location_ = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentEquipments, setCurrentEquipments] = useState(searchParams.getAll('equipments')?.[0]?.split(',') || []);
  const [form, setForm] = useState(searchParams.get('form') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');

  useEffect(() => {
    setCurrentEquipments(searchParams.getAll('equipments')?.[0]?.split(',') || []);
    setForm(searchParams.get('form') || '');
    setLocation(searchParams.get('location') || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location_.search]);

  return {
    location_,
    currentEquipments,
    setCurrentEquipments,
    form,
    location,
    setSearchParams,
  };
};

export default useCatalogFilters;
