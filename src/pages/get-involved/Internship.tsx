import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';

const Internship = () => {
  return (
    <>
      <Hero
        title="Internship Program"
        subtitle="Learn, grow, and contribute"
        backgroundImage="/images/placeholder/internship-hero.jpg"
      />
      
      <Section>
        <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Section>
    </>
  );
};

export default Internship;