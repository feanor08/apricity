import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
}

const Card = ({ title, description, icon, image, children, className = '' }: CardProps) => {
  return (
    <div className={`card ${className}`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}
      <div className="card-content">
        {icon && <div className="card-icon">{icon}</div>}
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;