import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../../components/common/Button/Button';
import homeData from '../../../data/home.json';
import './CTASection.css';

const CTASection = () => {
  const { joinMovement } = homeData.home;

  return (
    <Section
      title={joinMovement.title}
      className="cta-section"
    >
      <div className="cta-grid">
        {joinMovement.items.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            className="cta-card"
          />
        ))}
      </div>
      <div className="cta-button-wrapper">
        <Button to={joinMovement.buttonLink} className="cta-button">
          {joinMovement.buttonText}
        </Button>
        <p className="cta-subtext">{joinMovement.subtext}</p>
      </div>
    </Section>
  );
};

export default CTASection;
