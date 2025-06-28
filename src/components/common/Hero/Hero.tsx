import { ReactNode } from 'react';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  overlay?: boolean;
  children?: ReactNode;
  className?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  overlay = true, 
  children, 
  className = '' 
}: HeroProps) => {
  return (
    <section 
      className={`hero ${className}`}
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