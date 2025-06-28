import { useState } from 'react';
import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';
import Button from '../components/common/Button/Button';
import initiativesData from '../data/initiatives.json';
import './Initiatives.css';

const Initiatives = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { initiatives } = initiativesData;
  
  const categories = ['all', ...new Set(initiatives.map(item => item.category))];
  
  const filteredInitiatives = selectedCategory === 'all' 
    ? initiatives 
    : initiatives.filter(item => item.category === selectedCategory);

  return (
    <>
      <Hero
        title="Our Initiatives"
        subtitle="Transforming lives through sustainable development"
        description="We believe in creating lasting change through community-driven programs that empower, educate, and elevate."
        backgroundImage="/images/placeholder/initiatives-hero.jpg"
      />
      
      <Section className="initiatives-intro">
        <div className="intro-content">
          <h2>Building a Better Tomorrow</h2>
          <p>
            Our initiatives are designed to create a ripple effect of positive change. 
            From empowering women with sustainable livelihoods to preserving ancient crafts 
            and fostering holistic community development, each program is a step towards 
            building resilient, self-sufficient communities.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="filter-buttons">
          {categories.map((category) => (
            <Button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Initiatives' : category}
            </Button>
          ))}
        </div>
        
        <div className="initiatives-grid">
          {filteredInitiatives.map((initiative) => (
            <div key={initiative.id} className="initiative-card-wrapper">
              <Card
                title={initiative.title}
                image={initiative.image}
                className="initiative-card"
              >
                <span className="category-tag">{initiative.category}</span>
                <p className="initiative-description">{initiative.description}</p>
                <div className="impact-badge">
                  <span>Impact: {initiative.impact}</span>
                </div>
                <Button to={`/initiatives/${initiative.id}`} variant="secondary">
                  Learn More
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      <Section className="initiative-features">
        <h2>How We Create Impact</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Targeted Approach</h3>
            <p>We identify specific community needs and design programs that address root causes, not just symptoms.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Community Partnership</h3>
            <p>Local communities are our partners, not beneficiaries. We co-create solutions that work for them.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Measurable Outcomes</h3>
            <p>Every initiative is tracked and measured to ensure we're creating real, lasting change.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">♻️</div>
            <h3>Sustainable Models</h3>
            <p>Our programs are designed to be self-sustaining, creating long-term value for communities.</p>
          </div>
        </div>
      </Section>

      <Section background="accent" className="initiatives-cta">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>Join us in our mission to create lasting change in tribal communities.</p>
          <div className="cta-buttons">
            <Button to="/get-involved/volunteer">Volunteer With Us</Button>
            <Button to="/contribute" variant="secondary">Support Our Work</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Initiatives;