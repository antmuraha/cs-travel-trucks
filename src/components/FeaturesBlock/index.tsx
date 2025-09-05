import { Features } from '@controls/Features';
import styles from './index.module.css';

interface FeaturesBlockProps {
  className?: string;
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

export const FeaturesBlock = ({ className, options }: FeaturesBlockProps) => {
  return (
    <div className={`${styles.featuresBlock} ${className}`}>
      <Features options={options} />
      <section>
        <h2>Vehicle details</h2>
        <div className="delimiter" />
        <dl>
          <dt>Form</dt>
          <dd>Tesla</dd>

          <dt>Length</dt>
          <dd>Model S</dd>

          <dt>Width</dt>
          <dd>2020</dd>

          <dt>Height</dt>
          <dd>Model S</dd>

          <dt>Tank</dt>
          <dd>100l</dd>

          <dt>Consumption</dt>
          <dd>12.4l/100km</dd>
        </dl>
      </section>
    </div>
  );
};
