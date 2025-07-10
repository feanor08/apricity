import Button from '../../common/Button/Button';
import homeData from '../../../data/home.json';
import './HeroSection.css';

/**
 * Hero section with <picture> element.
 * Browser selects the first <source> whose media query matches
 * BEFORE downloading — saves data and prevents flashes.
 */
const HeroSection = () => {
  const { hero } = homeData.home;

  // fallback if one of the images is missing in the JSON
  const desktopImg = hero.backgroundImage ;
  const mobileImg  = hero.mobileImage ;

  return (
    <section className="hero-section">
      {/* responsive background layer */}
      <picture className="hero-bg">
        {/* desktop / landscape first */}
        <source srcSet={desktopImg} media="(min-width: 641px)" />
        {/* mobile / portrait second */}
        <source srcSet={mobileImg} media="(max-width: 640px)" />
        {/* final <img> is just a safety net */}
        <img
          src={desktopImg}
          alt=""
          aria-hidden="true"
          className="hero-bg-img"
        />
      </picture>

      {/* tint overlay */}
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
