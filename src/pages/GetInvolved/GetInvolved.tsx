import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import getInvolvedData from '../../data/getinvolved.json';

const GetInvolved = () => {
  const { hero, options } = getInvolvedData;

  return (
    <>
      <Hero
        title={hero.title}
        description={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        mobileImage={hero.mobileImage}
      />

      <Section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {options.map((opt, idx) => (
            <Link key={idx} to={opt.path} style={{ textDecoration: 'none' }}>
              <Card
                title={opt.title}
              />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default GetInvolved;