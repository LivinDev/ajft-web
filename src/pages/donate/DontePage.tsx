
import DonationCard from '../../components/ui/cards/DonateCard';
import Style from './donatepage.module.css';
import DonateSection from '../../sections/donatehelp/DonateHelp';

const DontePage = () => {
  return (
    <div className={Style.mainContainer}>
      <DonateSection />
      <div className={Style.cardSection}>
        <DonationCard
          title="Support Our Cause"
          description="Help us make a difference in the world by donating today. Every contribution counts!"
          imageUrl="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          buttonText="Donate Now"
        />
        <DonationCard
          title="Support Our Cause"
          description="Help us make a difference in the world by donating today. Every contribution counts!"
          imageUrl="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          buttonText="Donate Now"
        />
        <DonationCard
          title="Support Our Cause"
          description="Help us make a difference in the world by donating today. Every contribution counts!"
          imageUrl="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          buttonText="Donate Now"
        />
      </div>
      <div className={Style.card}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Union_Bank_of_India_logo.svg/1200px-Union_Bank_of_India_logo.svg.png"
          alt="Union Bank of India Logo"
          className={Style.logo}
        />
        <div className={Style.accountInfo}>
          <h2>SARTHAK EDUCATIONAL TRUST</h2>
          <p>Saving Account</p>
        </div>
        <div className={Style.details}>
          <p>
            <strong>Account Number:</strong> 058710100020302
          </p>
          <p>
            <strong>Bank Name:</strong> Union Bank of India
          </p>
          <p>
            <strong>Branch:</strong> Lawrence Road
          </p>
          <p>
            <strong>IFSC Code:</strong> UBIN0805874
          </p>
          <p>
            <strong>MICR Code:</strong> 110022617
          </p>
          <p>
            <strong>Swift Code:</strong> UBININBBSBD
          </p>
        </div>
      </div>
    </div>
  );
};

export default DontePage;
