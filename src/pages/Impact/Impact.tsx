import Hero from '../../components/common/Hero/Hero';
import impactData from '../../data/impact.json';
import './Impact.css';

const Impact = () => {
  const { hero } = impactData;

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
        mobileImage={hero.mobileImage}
      />
    </>
  );
};

export default Impact;