import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import aboutData from '../data/aboutus.json';

const AboutUs = () => {
  const { hero, missionVision, values, principles } = aboutData.aboutUs;

  return (
    <>
      <Hero
        title={hero.title}
        description={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        blur
        mobileImage={hero.mobileImage}
      />

      <Section title={missionVision.title} className="mission-vision-section">
        {missionVision.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </Section>

      <Section title={values.title} className="values-section">
        {values.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </Section>

      <Section title={principles.title} className="principles-section">
        {principles.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </Section>
    </>
  );
};

export default AboutUs;