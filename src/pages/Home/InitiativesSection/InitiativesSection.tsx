import Section from '../../../components/common/Section/Section';
import Card from '../../../components/common/IconCard/IconCard';
import homeData from '../../../data/home.json';
import './InitiativesSection.css';

const InitiativesSection = () => {
  const { whatWeDo, values } = homeData.home;

  return (
    <>
      <Section title={whatWeDo.title} background="white" className="initiatives-section">
        <div className="initiatives-grid">
          {whatWeDo.items.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className="initiative-card"
            />
          ))}
        </div>
      </Section>

      <Section title={values.title} className="values-section">
        <div className="values-grid">
          {values.items.map((value, index) => (
            <div key={index} className="value-item">
              <div className="value-icon">{value.icon}</div>
              <h4 className="value-title">{value.title}</h4>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default InitiativesSection;