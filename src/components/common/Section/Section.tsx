import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'white' | 'accent';
}

const Section = ({ title, subtitle, children, className = '', background = 'default' }: SectionProps) => {
  const bgClass = background === 'white' ? 'bg-white' : background === 'accent' ? 'bg-accent' : '';
  
  return (
    <section className={`section ${bgClass} ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2>{title}</h2>}
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;