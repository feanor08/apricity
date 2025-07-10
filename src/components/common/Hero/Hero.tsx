import { ReactNode } from 'react';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  mobileImage: string;
  /** tint overlay on/off */
  overlay?: boolean;
  /** add a soft background blur */
  blur?: boolean;               // ← NEW
  /** 100 vh landing banner or ~40 vh header */
  size?: 'full' | 'compact';
  children?: ReactNode;
  className?: string;
}

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  mobileImage,
  overlay = true,
  blur = false,                 // default = no blur
  size = 'compact',
  children,
  className = '',
}: HeroProps) => (
  <section className={`hero hero--${size} ${className}`}>
    {/* responsive background */}
    <picture className={`hero-bg${blur ? ' hero-bg--blur' : ''}`}>
      <source srcSet={backgroundImage} media="(min-width: 641px)" />
      <source srcSet={mobileImage}  media="(max-width: 640px)" />
      <img src={backgroundImage} alt="" aria-hidden="true" className="hero-bg-img" />
    </picture>

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

export default Hero;