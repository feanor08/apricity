import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';

const Partner = () => {
  return (
    <>
      <Hero
        title="Partner With Us"
        subtitle="Collaborate for greater impact"
        backgroundImage="/images/placeholder/partner-hero.jpg"
      />
      
      <Section>
        <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Section>
    </>
  );
};

export default Partner;