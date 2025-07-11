import { ReactNode } from 'react';
import './ImageCard.css';

interface ImageCardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
}

const ImageCard = ({ title, description, image, children, className = '' }: ImageCardProps) => {
  return (
    <div className={`card ${className}`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default ImageCard;