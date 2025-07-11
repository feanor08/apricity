import Hero from '../../../components/common/Hero/Hero';
import Button from '../../../components/common/Button/Button';
import homeData from '../../../data/home.json';
import './HeroSection.css';

const HeroSection = () => {
  const { hero } = homeData.home;

  // fallbacks if JSON is missing one of the assets
  const desktopImg = hero?.backgroundImage ?? hero?.backgroundImage;
  const mobileImg = hero?.mobileImage ?? hero?.backgroundImage;

  return (
    <Hero
      title={hero.title}
      subtitle={hero.subtitle}
      description={hero.description}
      backgroundImage={desktopImg}
      mobileImage={mobileImg}
      overlay={true}
      blur={true}
      size="full"
      className="hero-section-custom"
    >
      <div className="hero-buttons">
        <Button to={hero.ctaLinks.primary}>{hero.cta1}</Button>
        <Button to={hero.ctaLinks.secondary} variant="secondary">
          {hero.cta2}
        </Button>
      </div>
    </Hero>
  );
};

export default HeroSection;