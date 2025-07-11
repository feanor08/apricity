
import Section from '@/components/common/Section/Section';
import homeData from '../../../data/home.json';
import './AboutSection.css';
import Quote from '@/components/common/Quote/Quote';

const AboutSection = () => {
  const { about } = homeData.home;
  const { quotes } = homeData;
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <Section title={about.title} subtitle={about.subtitle} className="about-section">
        <div className="about-content">
          {about.content.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>
      <div className="quote-wrapper">
        <Quote text={randomQuote} />
      </div>
    </>
  );
};

export default AboutSection;