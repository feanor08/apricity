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
              {organization.socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} aria-label={link.ariaLabel}>
                  {link.label}
                </a>
              ))}
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
          <p>{organization.copyrightText}</p>
          <p>
            {organization.contactLabel}{' '}
            {organization.email} | {organization.phone}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
