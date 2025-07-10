
// src/pages/Internship.tsx
import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import getInvolvedData from '../../data/getinvolved.json';

const Internship = () => {
  const { options } = getInvolvedData;
  const internship = options[5];

  // split the description into sentences for bullets
  const bullets = internship.description
    .split('. ')
    .map(s => s.trim().replace(/\.$/, ''))
    .filter(Boolean);

  return (
    <>
      <Hero
        title={internship.title}
        backgroundImage="/images/internship-hero.webp"
        mobileImage="/images/internship-hero-mobile.webp"
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
          <Card title={"Learn, grow, and contribute"}>
            <ul className="internship-description-list">
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

export default Internship;

