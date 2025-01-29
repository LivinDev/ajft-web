// PublicLayout.tsx

import LogoSection from '../components/navbar/LogoSection';
import Navbar from '../components/navbar/Navbar';
import SocialIcons from '../components/socialBar/SocialIcons';
import EventsBar from '../components/eventsBar/EventsBar';
import Footer from '../components/footer/Footer';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <TopBanner /> */}
      <LogoSection />
      <Navbar />
      {/* <MarqueeText>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          itaque.
        </h1>
      </MarqueeText> */}
      <SocialIcons />
      {children}
      <EventsBar />
      <Footer />
    </>
  );
};

export default PublicLayout;
