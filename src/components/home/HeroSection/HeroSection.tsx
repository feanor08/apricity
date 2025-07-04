import Button from '../../common/Button/Button';
import homeData from '../../../data/home.json';
import './HeroSection.css';

const HeroSection = () => {
  const { hero } = homeData.home;

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{hero.title}</h1>
          <h2 className="hero-subtitle">{hero.subtitle}</h2>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-buttons">
            <Button to={hero.ctaLinks.primary}>{hero.cta1}</Button>
            <Button to={hero.ctaLinks.secondary} variant="secondary">
              {hero.cta2}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;