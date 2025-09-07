import useCatalogFilters from './useCatalogFilters';

export const useCatalogFiltersAsString = () => {
  const { currentEquipments, form, location } = useCatalogFilters();

  return [
    location ? `location=${location}` : '',
    form ? `form=${form}` : '',
    currentEquipments.map(name => `${name}=true`).join('&'),
  ].join('&');
};

export default useCatalogFiltersAsString;
