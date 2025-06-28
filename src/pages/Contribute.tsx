import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import Button from '../components/common/Button/Button';

const Contribute = () => {
  return (
    <>
      <Hero
        title="Contribute"
        subtitle="Your support helps us create lasting change"
        backgroundImage="/images/placeholder/contribute-hero.jpg"
      />
      
      <Section>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button variant="primary">Donate Now</Button>
        </div>
      </Section>
    </>
  );
};

export default Contribute;