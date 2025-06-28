import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';

const AboutUs = () => {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Our story, mission, and the people behind the movement"
        backgroundImage="/images/placeholder/about-hero.jpg"
      />
      
      <Section>
        <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Section>
    </>
  );
};

export default AboutUs;