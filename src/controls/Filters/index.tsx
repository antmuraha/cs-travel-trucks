import { Button } from '../Button';
import { InputLocation } from '../InputLocation';
import { SquareButton } from '../SquareButton';
import useCatalogFilters from '@hooks/useCatalogFilters';

import styles from './index.module.css';

const equipmentOptions = [
  { label: 'AC', value: 'AC', icon: 'wind' },
  { label: 'Automatic', value: 'Automatic', icon: 'diagram' },
  { label: 'Kitchen', value: 'Kitchen', icon: 'cupHot' },
  { label: 'TV', value: 'TV', icon: 'tv' },
  { label: 'Bathroom', value: 'Bathroom', icon: 'shower' },
];

const vehicleTypes = [
  { label: 'Van', value: 'van', icon: 'grid1x2' },
  { label: 'Fully Integrated', value: 'fully-integrated', icon: 'grid2x2' },
  { label: 'Alcove', value: 'alcove', icon: 'grid3x3' },
];

export const Filters = () => {
  const { currentEquipments, location, selectedForm, setCurrentEquipments, setSearchParams } = useCatalogFilters();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      currentEquipments.push(value);
    } else {
      const index = currentEquipments.indexOf(value);
      if (index > -1) {
        currentEquipments.splice(index, 1);
      }
    }
    setCurrentEquipments(currentEquipments);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = formData.get('form');

    setSearchParams({
      form: typeof form === 'string' ? form : '',
      equipments: currentEquipments.join(','),
    });
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <InputLocation value={location} />
      <h3>Filters</h3>
      <section>
        <h4>Vehicle equipment</h4>
        <div className="delimiter" />
        <div className={styles.options}>
          {equipmentOptions.map(({ label, value, icon }) => (
            <SquareButton
              key={value}
              type="checkbox"
              name="equipment"
              label={label}
              value={value}
              // @ts-expect-error TODO
              icon={icon}
              checked={currentEquipments.includes(value)}
              onClick={handleCheckboxChange}
            />
          ))}
        </div>
      </section>

      <section>
        <h4>Vehicle type</h4>
        <div className="delimiter" />
        <div className={styles.options}>
          {vehicleTypes.map(({ label, value, icon }) => (
            <SquareButton
              key={`${value}-${selectedForm}`}
              type="radio"
              name="form"
              label={label}
              value={value}
              // @ts-expect-error TODO
              icon={icon}
              checked={selectedForm === value}
            />
          ))}
        </div>
      </section>
      <Button type="submit" className={styles.searchButton} onClick={() => {}}>
        Search
      </Button>
    </form>
  );
};
