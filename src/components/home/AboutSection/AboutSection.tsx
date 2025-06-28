import Section from '../../common/Section/Section';
import Quote from '../../common/Quote/Quote';
import content from '../../../data/content.json';
import './AboutSection.css';

const AboutSection = () => {
  const { about } = content.home;
  const { quotes } = content;
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