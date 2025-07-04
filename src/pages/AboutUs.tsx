import Hero from '../components/common/Hero/Hero';
import aboutData from '../data/aboutus.json';

const AboutUs = () => {
  const { hero } = aboutData.aboutUs;

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />
    </>
  );
};

export default AboutUs;

