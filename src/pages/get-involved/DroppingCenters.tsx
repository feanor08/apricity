// src/pages/DroppingCenters.tsx
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import getInvolvedData from '../../data/getinvolved.json';

const DroppingCenters = () => {
  const { options } = getInvolvedData;
  const center = options[1];

  // split description into sentences for bullets
  const bullets = center.description
    .split('. ')
    .map(s => s.trim().replace(/\.$/, ''))
    .filter(Boolean);

  return (
    <>
      <Hero
        title={center.title}
        backgroundImage="/images/dropping-hero.webp"
      />

      <Section>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}
        >
          <Link to={center.path} style={{ textDecoration: 'none' }}>
            <Card title={"Too busy to reach a camp? Visit your nearest Dropping Centre, book a workplace pickup, or sign up for a volunteer sorting shift."}>
              <ul className="droppingcenters-description-list">
                {bullets.map((line, i) => (
                  <li key={i}>{line}.</li>
                ))}
              </ul>
            </Card>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default DroppingCenters;
