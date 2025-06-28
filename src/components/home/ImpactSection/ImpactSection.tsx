import Section from '../../common/Section/Section';
import content from '../../../data/content.json';
import './ImpactSection.css';

const ImpactSection = () => {
  const { impact } = content.home;

  return (
    <Section title={impact.title} background="accent" className="impact-section">
      <div className="impact-grid">
        {impact.stats.map((stat, index) => (
          <div key={index} className="impact-stat">
            <div className="impact-icon">{stat.icon}</div>
            <h3 className="impact-number">{stat.number}</h3>
            <p className="impact-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ImpactSection;