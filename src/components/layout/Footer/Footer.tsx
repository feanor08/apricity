import { Link } from 'react-router-dom';
import orgData from '../../../data/organization.json';
import navigationData from '../../../data/navigation.json';
import './Footer.css';

const Footer = () => {
  const { organization } = orgData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{organization.name}</h3>
            <p>{organization.tagline}</p>
            <div className="social-links">
              <a href={organization.socialMedia.facebook} aria-label="Facebook">FB</a>
              <a href={organization.socialMedia.twitter} aria-label="Twitter">TW</a>
              <a href={organization.socialMedia.instagram} aria-label="Instagram">IG</a>
              <a href={organization.socialMedia.linkedin} aria-label="LinkedIn">LI</a>
            </div>
          </div>
          
          {navigationData.footer.sections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 {organization.name}. All rights reserved.</p>
          <p>Contact: {organization.email} | {organization.phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;