import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';

const Career = () => {
  return (
    <>
      <Hero
        title="Career Opportunities"
        subtitle="Join our team and make a difference"
        backgroundImage="/images/placeholder/career-hero.jpg"
      />
      
      <Section>
        <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Section>
    </>
  );
};

export default Career;