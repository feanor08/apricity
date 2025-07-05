import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import orgData from '../../../data/organization.json';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 👇 helper to snap the menu shut
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <h1>{orgData.organization.name}</h1>
          </Link>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>

          {/* pass it down */}
          <Navigation mobileOpen={mobileMenuOpen} closeMenu={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
