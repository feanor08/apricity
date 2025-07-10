import Button from '../../common/Button/Button';
import homeData from '../../../data/home.json';
import './HeroSection.css';

const HeroSection = () => {
  const { hero } = homeData.home;

  // fallbacks if JSON is missing one of the assets
  const desktopImg = hero?.backgroundImage ?? hero?.backgroundImage;
  const mobileImg  = hero?.mobileImage  ?? hero?.backgroundImage;

  return (
    <section className="hero-section">
      {/* responsive background layer (always carries blur-eligible class) */}
      <picture className="hero-bg hero-bg--blur">
        <source srcSet={desktopImg} media="(min-width: 641px)" />
        <source srcSet={mobileImg}  media="(max-width: 640px)" />
        <img src={desktopImg} alt="" aria-hidden="true" className="hero-bg-img" />
      </picture>

      {/* tint overlay — keep or drop as you like */}
      <div className="hero-overlay" />

      {/* foreground content */}
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
