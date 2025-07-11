import { useState } from 'react';
import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';
import data from '../../data/updates.json';
import './Updates.css';

const Updates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showNewsletter, setShowNewsletter] = useState(false);
  const {
    hero,
    featuredUpdate,
    recentUpdatesSection,
    categories,
    newsletterSection,
    recentUpdates,
    upcomingEventsSection,
    upcomingEvents,
    socialSection,
    socialMedia,
    archiveSection,
    loadMoreLabel
  } = data;

  const filteredUpdates =
    selectedCategory === 'all'
      ? recentUpdates
      : recentUpdates.filter(u => u.category === selectedCategory);

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
        mobileImage={hero.mobileImage}
      />

      <Section className="featured-section">
        <div className="featured-update">
          <div className="featured-image">
            <img src={featuredUpdate.image} alt={featuredUpdate.title} />
            <span className="featured-badge">Featured Story</span>
          </div>
          <div className="featured-content">
            <span className="update-category">{featuredUpdate.category}</span>
            <h2>{featuredUpdate.title}</h2>
            <p className="update-date">
              {new Date(featuredUpdate.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p className="featured-excerpt">{featuredUpdate.excerpt}</p>
            <Button to={`/updates/${featuredUpdate.id}`}>Read Full Story</Button>
          </div>
        </div>
      </Section>

      <Section background="accent" className="newsletter-section">
        <div className="newsletter-content">
          <h3>{newsletterSection.title}</h3>
          <p>{newsletterSection.description}</p>
          {!showNewsletter ? (
            <Button onClick={() => setShowNewsletter(true)}>
              {newsletterSection.subscribeButton}
            </Button>
          ) : (
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder={newsletterSection.formPlaceholder}
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          )}
        </div>
      </Section>

      <Section background="white">
        <h2>{recentUpdatesSection.heading}</h2>
        <div className="category-filter">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            {recentUpdatesSection.allLabel}
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="updates-grid">
          {filteredUpdates.map(update => (
            <article key={update.id} className="update-card">
              <div className="update-image">
                <img src={update.image} alt={update.title} />
                <span className="update-category-badge">{update.category}</span>
              </div>
              <div className="update-content">
                <h3>{update.title}</h3>
                <p className="update-meta">
                  <span className="update-author">{update.author}</span>
                  <span className="update-date">
                    {new Date(update.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </p>
                <p className="update-excerpt">{update.excerpt}</p>
                <a href={`/updates/${update.id}`} className="read-more">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="load-more">
          <Button variant="secondary">{loadMoreLabel}</Button>
        </div>
      </Section>

      <Section className="events-section">
        <h2>{upcomingEventsSection.heading}</h2>
        <div className="events-grid">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <span className="event-day">{new Date(event.date).getDate()}</span>
                <span className="event-month">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    month: 'short'
                  })}
                </span>
              </div>
              <div className="event-details">
                <h4>{event.title}</h4>
                <p className="event-type">{event.type}</p>
                <p className="event-location">📍 {event.location}</p>
                <p className="event-description">{event.description}</p>
                <Button to={`/events/${event.id}`} variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white" className="social-section">
        <h2>{socialSection.heading}</h2>
        <p className="social-subtitle">{socialSection.subtitle}</p>
        <div className="social-grid">
          {socialMedia.platforms.map((p, i) => (
            <div key={i} className="social-card">
              <div className="social-icon">{p.name.charAt(0)}</div>
              <h4>{p.name}</h4>
              <p>{p.handle}</p>
              <a href={p.url} className="social-link">
                Follow Us
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section className="archive-section">
        <div className="archive-content">
          <h3>{archiveSection.title}</h3>
          <p>{archiveSection.text}</p>
          <Button to="/updates/archive" variant="secondary">
            {archiveSection.buttonLabel}
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Updates;