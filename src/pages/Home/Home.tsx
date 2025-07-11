import HeroSection from './HeroSection/HeroSection';
import InitiativesSection from './InitiativesSection/InitiativesSection';
import ImpactSection from './ImpactSection/ImpactSection';
import CTASection from './CTASection/CTASection';
import AboutSection from './AboutSection/AboutSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <InitiativesSection />
      <ImpactSection />
      <CTASection />
    </>
  );
};

export default Home;