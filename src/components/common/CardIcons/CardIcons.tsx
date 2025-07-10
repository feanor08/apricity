// src/components/CardIcons.tsx
import React from 'react';
import './CardIcons.css';

interface CardIconsProps {
  /** file name without extension, e.g. "weather" */
  icon: string;
  /** square size in px (defaults to 40) */
  size?: number;
  /** accessible alt text (defaults to empty string) */
  alt?: string;
}

const CardIcons: React.FC<CardIconsProps> = ({ icon, size = 40, alt = '' }) => {
  // Public-folder path: /public/icons/<icon>.svg
  const src = `/icons/${icon}.svg`;

  return (
    <span className="card-icon" style={{ width: size, height: size }}>
      <img src={src} width={size} height={size} alt={alt} loading="lazy" />
    </span>
  );
};

export default CardIcons;
