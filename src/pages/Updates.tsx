import { useState } from 'react';
import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import Button from '../components/common/Button/Button';
import updatesData from '../data/updates.json';
import './Updates.css';

const Updates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showNewsletter, setShowNewsletter] = useState(false);
  
  const { featuredUpdate, recentUpdates, upcomingEvents, categories } = updatesData;
  
  const filteredUpdates = selectedCategory === 'all' 
    ? recentUpdates 
    : recentUpdates.filter(update => update.category === selectedCategory);

  return (
    <>
      <Hero
        title="Updates & News"
        subtitle="Stay connected with our journey"
        description="Get the latest news, stories, and updates from our work in tribal communities across South India."
        backgroundImage="/images/placeholder/updates-hero.jpg"
      />

      {/* Featured Update */}
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

      {/* Newsletter Signup */}
      <Section background="accent" className="newsletter-section">
        <div className="newsletter-content">
          <h3>Stay Updated</h3>
          <p>Get monthly updates about our work, impact stories, and ways to get involved.</p>
          {!showNewsletter ? (
            <Button onClick={() => setShowNewsletter(true)}>Subscribe to Newsletter</Button>
          ) : (
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <Button type="submit">Subscribe</Button>
            </form>
          )}
        </div>
      </Section>

      {/* Recent Updates */}
      <Section background="white">
        <h2>Recent Updates</h2>
        
        {/* Category Filter */}
        <div className="category-filter">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Updates
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Updates Grid */}
        <div className="updates-grid">
          {filteredUpdates.map((update) => (
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

        {/* Load More */}
        <div className="load-more">
          <Button variant="secondary">Load More Updates</Button>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <span className="event-day">
                  {new Date(event.date).getDate()}
                </span>
                <span className="event-month">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
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

      {/* Social Media Feed */}
      <Section background="white" className="social-section">
        <h2>Follow Our Journey</h2>
        <p className="social-subtitle">
          Connect with us on social media for daily updates and behind-the-scenes content
        </p>
        <div className="social-grid">
          <div className="social-card">
            <div className="social-icon">📘</div>
            <h4>Facebook</h4>
            <p>@ApricityLife</p>
            <a href="#" className="social-link">Follow Us</a>
          </div>
          <div className="social-card">
            <div className="social-icon">📷</div>
            <h4>Instagram</h4>
            <p>@apricitylife_foundation</p>
            <a href="#" className="social-link">Follow Us</a>
          </div>
          <div className="social-card">
            <div className="social-icon">🐦</div>
            <h4>Twitter</h4>
            <p>@ApricityLife</p>
            <a href="#" className="social-link">Follow Us</a>
          </div>
          <div className="social-card">
            <div className="social-icon">💼</div>
            <h4>LinkedIn</h4>
            <p>Apricity Life Foundation</p>
            <a href="#" className="social-link">Connect</a>
          </div>
        </div>
      </Section>

      {/* Archive Section */}
      <Section className="archive-section">
        <div className="archive-content">
          <h3>Looking for older updates?</h3>
          <p>Browse our complete archive of news, stories, and updates from previous years.</p>
          <Button to="/updates/archive" variant="secondary">View Archive</Button>
        </div>
      </Section>
    </>
  );
};

export default Updates;