import { ReactNode } from 'react';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  /** ≥ 641 px viewport */
  backgroundImage: string;
  /** ≤ 640 px viewport (portrait-ish, lighter) */
  mobileImage?: string;
  /** tint overlay on/off */
  overlay?: boolean;
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
  size = 'compact',
  children,
  className = '',
}: HeroProps) => (
  <section className={`hero hero--${size} ${className}`}>
    {/* responsive background image */}
    <picture className="hero-bg">
      <source srcSet={backgroundImage} media="(min-width: 641px)" />
      {/* `aria-hidden` prevents SR from announcing a decorative image  */}
      <img src={mobileImage} alt="" aria-hidden="true" className="hero-bg-img" />
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
