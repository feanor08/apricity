import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';

const GetInvolved = () => {
  const options = [
    {
      title: "Collection Camps",
      description: "Lorem ipsum dolor sit amet",
      path: "/get-involved/collection-camps"
    },
    {
      title: "Dropping Centers",
      description: "Lorem ipsum dolor sit amet",
      path: "/get-involved/dropping-centers"
    },
    {
      title: "Volunteer",
      description: "Lorem ipsum dolor sit amet",
      path: "/get-involved/volunteer"
    },
    {
      title: "Partner With Us",
      description: "Lorem ipsum dolor sit amet",
      path: "/get-involved/partner"
    },
    {
      title: "Career",
      description: "Lorem ipsum dolor sit amet",
      path: "/get-involved/career"
    },
    {
      title: "Internship",
      description: "Lorem ipsum dolor sit amet",
      path: "/get-involved/internship"
    }
  ];

  return (
    <>
      <Hero
        title="Get Involved"
        subtitle="Join us in making a difference"
        backgroundImage="/images/placeholder/get-involved-hero.jpg"
      />
      
      <Section>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {options.map((option, index) => (
            <Link key={index} to={option.path} style={{ textDecoration: 'none' }}>
              <Card
                title={option.title}
                description={option.description}
              />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default GetInvolved;