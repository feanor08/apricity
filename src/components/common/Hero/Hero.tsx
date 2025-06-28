import { ReactNode } from 'react';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  overlay?: boolean;
  /** 100 vh landing hero (default) or ~40 vh compact header */
  size?: 'full' | 'compact';
  children?: ReactNode;
  className?: string;
}

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  overlay = true,
  size = 'full',          // NEW
  children,
  className = '',
}: HeroProps) => {
  return (
    <section
      /* hero + size modifier + any extra className you pass in */
      className={`hero hero--${size} ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {overlay && <div className="hero-overlay" />}
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
          {description && <p className="hero-description">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
