import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';

const CollectionCamps = () => {
  return (
    <>
      <Hero
        title="Collection Camps"
        subtitle="Organize collection drives in your community"
        backgroundImage="/images/placeholder/collection-hero.jpg"
      />
      
      <Section >
        <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Section>
    </>
  );
};

export default CollectionCamps;