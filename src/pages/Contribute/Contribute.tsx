import Hero from '../../components/common/Hero/Hero';
import Section from '../../components/common/Section/Section';
import contributeData from '../../data/contribute.json';
import './Contribute.css';

const Contribute = () => {
  const { hero, donationSection } = contributeData;
  const { accountName, address, accountNumber, ifsc, bankName } = donationSection.bankDetails;

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        mobileImage={hero.mobileImage}
      />
      
      <Section>
        <div className="donation-container">
          <div className="bank-details">
            <p><strong>Account Name:</strong> {accountName}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Account Number:</strong> {accountNumber}</p>
            <p><strong>IFSC:</strong> {ifsc}</p>
            <p><strong>Bank:</strong> {bankName}</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contribute;
