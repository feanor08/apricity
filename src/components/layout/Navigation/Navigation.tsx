import { Link } from 'react-router-dom';
import navigationData from '../../../data/navigation.json';
import './Navigation.css';

interface NavigationProps {
  mobileOpen: boolean;
}

const Navigation = ({ mobileOpen }: NavigationProps) => {
  return (
    <nav className={`navigation ${mobileOpen ? 'mobile-open' : ''}`}>
      <ul className="nav-list">
        {navigationData.main.map((item, index) => (
          <li key={index} className="nav-item">
            <Link to={item.path} className="nav-link">
              {item.label}
            </Link>
            {item.children && (
              <ul className="dropdown">
                {item.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <Link to={child.path} className="dropdown-link">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;