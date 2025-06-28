import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';

const Volunteer = () => {
  return (
    <>
      <Hero
        title="Volunteer With Us"
        subtitle="Be the change you want to see"
        backgroundImage="/images/placeholder/volunteer-hero.jpg"
      />
      
      <Section>
        <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Section>
    </>
  );
};

export default Volunteer;