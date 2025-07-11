import { ReactNode } from 'react';
import './IconCard.css';

interface IconCardProps {
  title?: string;
  description?: string;
  icon?: string;
  children?: ReactNode;
  className?: string;
}

const IconCard = ({ title, description, icon, children, className = '' }: IconCardProps) => {
  return (
    <div className={`icon-card ${className}`}>
      <div className="icon-card-content">
        {icon && <div className="icon-card-icon">{icon}</div>}
        {title && <h3 className="icon-card-title">{title}</h3>}
        {description && <p className="icon-card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default IconCard;