import styles from './index.module.css';

export interface ImageProps {
  alt: string;
  title: string;
  src: string;
  className?: string;
  styles?: React.CSSProperties;
  lazy?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export const Image = ({
  alt,
  title,
  src,
  className,
  styles: imageStyles,
  lazy = true,
  fetchPriority = 'auto',
}: ImageProps) => {
  return (
    <img
      className={`${styles.image} ${className}`}
      src={src}
      alt={alt}
      title={title}
      loading={lazy ? 'lazy' : 'eager'}
      fetchPriority={fetchPriority}
      style={imageStyles}
    />
  );
};
