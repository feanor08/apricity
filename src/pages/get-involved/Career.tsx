import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import getInvolvedData from '../../data/getinvolved.json';

const Career = () => {
  const { options } = getInvolvedData;
  const career = options[4];

  // split the description into sentences for bullets
  const bullets = career.description
    .split('. ')
    .map(s => s.trim().replace(/\.$/, ''))
    .filter(Boolean);

  return (
    <>
      <Hero
        title={career.title}
        backgroundImage="/images/career-hero.webp"
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
          <Link to={career.path} style={{ textDecoration: 'none' }}>
            <Card title={"Join our team and make a difference"}>
              <ul className="career-description-list">
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

export default Career;
