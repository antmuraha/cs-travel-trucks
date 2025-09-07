import { Features } from '@controls/Features';
import styles from './index.module.css';

const formMap: Record<string, string> = {
  panelTruck: 'Panel Truck',
  alcove: 'Alcove',
  fullyIntegrated: 'Fully Integrated',
};

interface FeaturesBlockProps {
  className?: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  options: {
    AC: boolean;
    bathroom: boolean;
    kitchen: boolean;
    TV: boolean;
    radio: boolean;
    refrigerator: boolean;
    microwave: boolean;
    gas: boolean;
    water: boolean;
  };
}

export const FeaturesBlock = ({
  className,
  options,
  form,
  length,
  width,
  height,
  tank,
  consumption,
}: FeaturesBlockProps) => {
  return (
    <div className={`${styles.featuresBlock} ${className}`}>
      <Features options={options} />
      <section>
        <h2>Vehicle details</h2>
        <div className="delimiter" />
        <dl>
          <dt>Form</dt>
          <dd>{formMap[form] || form}</dd>

          <dt>Length</dt>
          <dd>{length}</dd>

          <dt>Width</dt>
          <dd>{width}</dd>

          <dt>Height</dt>
          <dd>{height}</dd>

          <dt>Tank</dt>
          <dd>{tank}</dd>

          <dt>Consumption</dt>
          <dd>{consumption}</dd>
        </dl>
      </section>
    </div>
  );
};
