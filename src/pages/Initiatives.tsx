import { useState } from 'react';
import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';
import Button from '../components/common/Button/Button';
import data from '../data/initiatives.json';
import './Initiatives.css';

const Initiatives = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { hero, intro, filter, initiatives, features, cta } = data;

  const categories = ['all', ...new Set(initiatives.map(item => item.category))];
  const filtered =
    selectedCategory === 'all'
      ? initiatives
      : initiatives.filter(item => item.category === selectedCategory);

  return (
    <main>
      <Hero
        size={"compact"}
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
      />

      <Section className="initiatives-intro">
        <div className="intro-content">
          <h2>{intro.title}</h2>
          <p>{intro.content}</p>
        </div>
      </Section>

      <Section background={"white"}>
        <div className="filter-buttons">
          {categories.map(category => (
            <Button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? filter.allLabel : category}
            </Button>
          ))}
        </div>

        <div className="initiatives-grid">
          {filtered.map(item => (
            <div key={item.id} className="initiative-card-wrapper">
              <Card title={item.title} image={item.image} className="initiative-card">
                <span className="category-tag">{item.category}</span>
                <p className="initiative-description">{item.description}</p>
                <div className="impact-badge">
                  <span>Aim: {item.impact}</span>
                </div>
                <Button to={`/initiatives/${item.id}`} variant="secondary">
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
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background={'white'} className="initiatives-cta">
        <div className="cta-content">
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>
          <div className="cta-buttons">
            {cta.buttons.map((btn, idx) => (
              <Button key={idx} to={btn.to} variant={"secondary"}>
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Initiatives;