import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import content from '../../../data/content.json';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>{content.organization.name}</h1>
          </Link>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Navigation mobileOpen={mobileMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;