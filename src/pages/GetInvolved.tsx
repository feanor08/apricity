import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';

const GetInvolved = () => {
  const options = [
    {
      title: "Collection Camps",
      description: "Drop off your preloved saris, surplus yardage, or textile-mill offcuts at our seasonal Collection Camps. Our team sorts, cleans, and hands these materials to trained tribal artisans, who upcycle every scrap into hand-stitched toys, pet beds, and naturally dyed fabrics. Your unused cloth becomes sustainable products—and creates dignified income—right here. Donate, host, or share the word; together we keep textiles out of landfills and skills alive in our communities.",
      path: "/get-involved/collection-camps"
    },
    {
      title: "Dropping Centers",
      description: "Visit the nearest center, schedule a workplace collection, or volunteer for a sorting shift. Together, we keep textiles out of landfills and skills alive in our communities.",
      path: "/get-involved/dropping-centers"
    },
    {
      title: "Volunteer",
      description: "Turn your skills into solutions that touch every life we reach. Join our Circular Innovation Labs—monthly pop-ups where volunteers, artisans, and sustainability experts co-design new ways to turn textile waste into high-impact products. How you can help Hands-On Sorting &amp; Upcycling: weekend sessions prepping donated cloth for artisans. Skill-Share Sprints: teach digital marketing, design, or finance to strengthen rural enterprises. Impact Hackathons: 24-hour challenges that invent simple tech tools for village production. Each idea you spark cuts landfill waste, grows livelihoods, and spreads sustainable practices far beyond our communities. Sign up today and let innovation start with you.",
      path: "/get-involved/volunteer"
    },
    {
      title: "Partner With Us",
      description: "\"Together, We Build Better Systems\” We believe collaboration is the future of impact. Whether you're a fashion designer seeking sustainable sourcing, an NGO looking to amplify rural voices, or a brand with a conscience, we welcome partnerships that are aligned with our values. From co-developing textile collections, organizing workshops, or innovating grassroots production systems—there’s space here to build something meaningful together. → Let's design systems that empower",
      path: "/get-involved/partner"
    },
    {
      title: "Career",
      description: "Work that weaves purpose into every day. At Apricity Life Foundation, a typical job description won’t capture what you’ll really do: spark dignified livelihoods, revive heritage crafts, and lighten the planet’s load—often all before lunch. If you believe commerce and compassion can share the same loom, we’d love to meet you. Roles We are Hiring Community Program Leads and Field Coordinators Circular Product and Textile Designers Natural-Dye / Craft Trainers Impact and Fund-Raising Specialists Digital Storytelling, E-commerce Managers (Don’t see your specialty? Tell us how your skills can serve the mission.)",
      path: "/get-involved/career"
    },
    {
      title: "Internship",
      description: "Learn, create, and leave a legacy of impact. Our internship program invites bright minds from all fields—design, engineering, business, social sciences, or any discipline where you believe you can make a difference—to step beyond the classroom and into living laboratories of circular design, rural enterprise, and social innovation.What You’ll Experience Hands-On Projects – Map textile-waste streams, prototype upcycled products, or launch storytelling campaigns that champion artisan voices. Field Immersion – Spend time in partner villages, seeing how craft and community intertwine, and contribute ideas that make production safer, smarter, and more sustainable. Mentorship &amp; Workshops – Weekly check-ins with seasoned professionals, plus clinics on natural dyeing, impact measurement, and ethical supply chains.Visible Impact – Present your outcomes at our monthly Circular Innovation Lab; standout concepts go straight into production, benefiting artisans and the planet. Who Should Apply Students and recent graduates from any discipline who are eager to learn, innovate, and create measurable social and environmental impact. ",
      path: "/get-involved/internship"
    }
  ];

  return (
    <>
      <Hero
        title="Join The Movement"
        subtitle="Be part of something warm, real, and rooted. At Apricity Life Foundation, change isn’t something we
do alone. It’s a collective effort — made possible by thoughtful individuals, ethical brands, creative
minds, and compassionate communities. There are many ways to be part of our story. Choose the
one that speaks to you."
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