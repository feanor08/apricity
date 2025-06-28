import { useState } from 'react';
import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import Quote from '../components/common/Quote/Quote';
import Button from '../components/common/Button/Button';
import impactData from '../data/impact.json';
import './Impact.css';

const Impact = () => {
  const [selectedStory, setSelectedStory] = useState(0);
  const { statistics, stories, milestones } = impactData;

  return (
    <>
      <Hero
        title="Our Impact"
        subtitle="Making a difference, one life at a time"
        description="Every number represents a life transformed, a family empowered, and a community strengthened. This is the story of our collective journey."
        backgroundImage="/images/placeholder/impact-hero.jpg"
      />
      
      {/* Impact Statistics */}
      <Section className="impact-stats-section">
        <h2>The Numbers That Matter</h2>
        <p className="section-subtitle">
          Behind every statistic is a human story of transformation and hope.
        </p>
        <div className="stats-grid">
          {statistics.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Visual Impact Comparison */}
      <Section background="white" className="comparison-section">
        <h2>The Transformation Journey</h2>
        <div className="comparison-grid">
          <div className="before-card">
            <h3>Before</h3>
            <ul>
              <li>Limited income opportunities</li>
              <li>Traditional skills fading away</li>
              <li>Children dropping out of school</li>
              <li>Lack of healthcare access</li>
              <li>Dependency on external aid</li>
            </ul>
          </div>
          <div className="arrow-container">
            <div className="transformation-arrow">→</div>
            <span>Our Intervention</span>
          </div>
          <div className="after-card">
            <h3>After</h3>
            <ul>
              <li>Sustainable income sources</li>
              <li>Heritage crafts thriving</li>
              <li>95% school enrollment rate</li>
              <li>Regular health checkups</li>
              <li>Self-reliant communities</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section className="stories-section">
        <h2>Stories of Change</h2>
        <p className="section-subtitle">
          Real people, real transformations. These are the stories that inspire us every day.
        </p>
        
        <div className="stories-container">
          <div className="story-selector">
            {stories.map((story, index) => (
              <button
                key={story.id}
                className={`story-tab ${selectedStory === index ? 'active' : ''}`}
                onClick={() => setSelectedStory(index)}
              >
                {story.author}
              </button>
            ))}
          </div>
          
          <div className="story-content">
            <div className="story-image">
              <img 
                src={stories[selectedStory].image} 
                alt={stories[selectedStory].title}
              />
            </div>
            <div className="story-text">
              <h3>{stories[selectedStory].title}</h3>
              <p className="story-date">
                {new Date(stories[selectedStory].date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })}
              </p>
              <Quote 
                text={stories[selectedStory].content}
                author={stories[selectedStory].author}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white" className="timeline-section">
        <h2>Our Journey of Impact</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-text">{milestone.achievement}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Impact by Region Map Placeholder */}
      <Section className="map-section">
        <h2>Our Reach Across South India</h2>
        <div className="map-container">
          <div className="map-placeholder">
            <div className="region-stat">
              <h4>Karnataka</h4>
              <p>12 Villages • 5,000+ Lives</p>
            </div>
            <div className="region-stat">
              <h4>Tamil Nadu</h4>
              <p>5 Villages • 2,500+ Lives</p>
            </div>
            <div className="region-stat">
              <h4>Kerala</h4>
              <p>3 Villages • 1,500+ Lives</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Awards & Recognition */}
      <Section background="white" className="recognition-section">
        <h2>Recognition & Partnerships</h2>
        <div className="recognition-grid">
          <div className="recognition-card">
            <div className="recognition-icon">🏆</div>
            <h4>Social Impact Award 2023</h4>
            <p>For excellence in community development</p>
          </div>
          <div className="recognition-card">
            <div className="recognition-icon">🤝</div>
            <h4>UN Global Compact Member</h4>
            <p>Committed to sustainable development goals</p>
          </div>
          <div className="recognition-card">
            <div className="recognition-icon">🌟</div>
            <h4>Best NGO Award</h4>
            <p>State Government Recognition</p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="impact-cta-section">
        <div className="impact-cta-content">
          <h2>Be Part of Our Impact Story</h2>
          <p>
            Every contribution, whether time, resources, or skills, helps us create 
            lasting change in tribal communities across South India.
          </p>
          <div className="cta-stats">
            <div className="cta-stat">
              <h3>₹500</h3>
              <p>Can train one woman in a new skill</p>
            </div>
            <div className="cta-stat">
              <h3>₹2,000</h3>
              <p>Supports a child's education for 6 months</p>
            </div>
            <div className="cta-stat">
              <h3>₹5,000</h3>
              <p>Helps set up a micro-enterprise</p>
            </div>
          </div>
          <div className="cta-buttons">
            <Button to="/contribute">Donate Now</Button>
            <Button to="/get-involved/volunteer" variant="secondary">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Impact;