import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';
import getInvolvedData from '../../data/getinvolved.json';
import Card from '@/components/common/Card/Card';

const CollectionCamps = () => {
  const { options } = getInvolvedData;
  const camp = options[0];

  // Split the long description into sentences for bullets
  const bullets = camp.description
    .split('. ')
    .map(s => s.trim().replace(/\.$/, ''))
    .filter(Boolean);

  return (
    <>
      <Hero
        title="Collection Camps"
        backgroundImage="/images/collection-hero.webp"
      />
      
      <Section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
            <Card title={"Organize collection drives in your community"}>
              <ul className="collectioncamps-description-list">
                {bullets.map((line, i) => (
                  <li key={i}>{line}.</li>
                ))}
              </ul>
            </Card>
       
        </div>
      </Section>
    </>
  );
};

export default CollectionCamps;
