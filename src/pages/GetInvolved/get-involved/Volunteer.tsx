// src/pages/Volunteer.tsx
import { Link } from 'react-router-dom';
import Hero from '../../../components/common/Hero/Hero';
import Section from '../../../components/common/Section/Section';
import Card from '../../../components/common/Card/Card';
import getInvolvedData from '../../../data/getinvolved.json';

const Volunteer = () => {
  const { options } = getInvolvedData;
  const volunteer = options[2];

  // split the description into sentences for bullets
  const bullets = volunteer.description
    .split('. ')
    .map(s => s.trim().replace(/\.$/, ''))
    .filter(Boolean);

  return (
    <>
      <Hero
        title={volunteer.title}
        backgroundImage="/images/volunteer-hero.webp"
        mobileImage="/images/volunteer-hero-mobile.webp"
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
          <Link to={volunteer.path} style={{ textDecoration: 'none' }}>
            <Card title={"Be the change you want to see"}>
              <ul className="volunteer-description-list">
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

export default Volunteer;
