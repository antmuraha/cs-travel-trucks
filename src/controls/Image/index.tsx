import styles from './index.module.css';

export interface ImageProps {
  alt: string;
  title: string;
  src: string;
  className?: string;
  styles?: React.CSSProperties;
  lazy?: boolean;
}

export const Image = ({ alt, title, src, className, styles: imageStyles, lazy = true }: ImageProps) => {
  return (
    <img
      className={`${styles.image} ${className}`}
      src={src}
      alt={alt}
      title={title}
      loading={lazy ? 'lazy' : 'eager'}
      style={imageStyles}
    />
  );
};
