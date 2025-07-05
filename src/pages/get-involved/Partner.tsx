import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import getInvolvedData from '../../data/getinvolved.json';

const Partner = () => {
  const { options } = getInvolvedData;
  const partner = options[3];

  // split the description into sentences for bullets
  const bullets = partner.description
    .split('. ')
    .map(s => s.trim().replace(/\.$/, ''))
    .filter(Boolean);

  return (
    <>
      <Hero
        title={partner.title}
        subtitle="Collaborate for greater impact"
        backgroundImage="/images/partner-hero.webp"
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
          <Link to={partner.path} style={{ textDecoration: 'none' }}>
            <Card title={"Collaborate for greater impact"}>
              <ul className="partner-description-list">
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

export default Partner;