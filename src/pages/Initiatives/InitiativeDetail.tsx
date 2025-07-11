import { useParams, Navigate } from 'react-router-dom';
import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';
import Quote from '../../components/common/Quote/Quote';
import initiativesData from '../../data/initiatives.json';
import './InitiativeDetail.css';

const InitiativeDetail = () => {
  const { id } = useParams();
  const initiative = initiativesData.initiatives.find(item => item.id === id);

  if (!initiative) {
    return <Navigate to="/initiatives" replace />;
  }

  return (
    <>
      <Hero
        title={initiative.title}
        subtitle={initiative.category}
        backgroundImage={initiative.image}
        mobileImage={initiativesData.hero.mobileImage}
      />

      <Section className="initiative-detail">
        <div className="detail-content">
          <div className="detail-main">
            <h2>About This Initiative</h2>
            <p className="lead-text">{initiative.description}</p>
            <p>{initiative.longDescription}</p>

            <div className="impact-highlight">
              <h3>Our Impact</h3>
              <p>{initiative.impact}</p>
            </div>

            <h3>Key Features</h3>
            <ul className="features-list">
              {initiative.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {initiative.testimonial && (
              <div className="testimonial-section">
                <Quote 
                  text={initiative.testimonial.text} 
                  author={initiative.testimonial.author}
                />
              </div>
            )}
          </div>

          <div className="detail-sidebar">
            <div className="action-card">
              <h3>Get Involved</h3>
              <p>Want to support this initiative?</p>
              <Button to="/get-involved/volunteer" variant="primary">
                Volunteer
              </Button>
              <Button to="/contribute" variant="secondary">
                Donate
              </Button>
            </div>

            <div className="info-card">
              <h4>Quick Facts</h4>
              <div className="info-item">
                <strong>Category:</strong>
                <span>{initiative.category}</span>
              </div>
              <div className="info-item">
                <strong>Impact:</strong>
                <span>{initiative.impact}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="accent" className="related-section">
        <h2>Explore Other Initiatives</h2>
        <div className="related-grid">
          {initiativesData.initiatives
            .filter(item => item.id !== initiative.id)
            .slice(0, 3)
            .map(item => (
              <div key={item.id} className="related-card">
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.category}</p>
                <Button to={`/initiatives/${item.id}`} variant="secondary">
                  Learn More
                </Button>
              </div>
            ))}
        </div>
      </Section>
    </>
  );
};

export default InitiativeDetail;