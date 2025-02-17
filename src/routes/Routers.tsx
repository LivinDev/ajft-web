
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import PublicLayout from '../layout/HomeLayout';
import AboutPage from '../pages/about/AboutPage';
import EventPage from '../pages/events/EventPage';
import TeamSection from '../pages/team/Team';
import ContactPage from '../pages/contact/ContactPage';
import Gallery from '../pages/gallery/Gallery';
import Certificate from '../pages/certificates/Certificates';
import EventPageLayout from '../pages/events/EventPageLayout';
import VolunteerPage from '../pages/volunteer/Volunteer';
import DontePage from '../pages/donate/DontePage';
import ImpactPage from '../pages/ourimpact';
import OurAreaOfWork from '../pages/ourwork';
import ProtectedRoute from './ProtectedRoutes';
import Login from '../pages/login/LoginPage';
import LoginLayout from '../layout/LoginLayout';
import DashBoard from '../pages/dashboard';
import ProtectedLayout from '../layout/ProtextedLayout';
import PageNotFound from '../pages/404/PageNotFound';
import Governance from '../pages/governance/Governance';
import Financials from '../pages/financials/Financials';
import CareerPage from '../pages/career/CarrerPage';
import PrivacyPolicy from '../pages/privacy/Privacy';

interface HomeRouteProps {
  isAuthenticated: boolean;
}

const HomeRoute: React.FC<HomeRouteProps> = ({ isAuthenticated }) => {
  console.log("first", isAuthenticated)
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            element={ProtectedLayout}
            isAuthenticated={isAuthenticated}
            props={{ children: <DashBoard /> }}
          />
        }
      />
      <Route
        path="/login"
        element={
          <LoginLayout>
            <Login />
          </LoginLayout>
        }
      />
      <Route
        path="/aboutus"
        element={
          <PublicLayout>
            <AboutPage />
          </PublicLayout>
        }
      />
      <Route
        path="/governance"
        element={
          <PublicLayout>
            <Governance/>
          </PublicLayout>
        }
      />
      <Route
        path="/financials"
        element={
          <PublicLayout>
            <Financials/>
          </PublicLayout>
        }
      />
      <Route
        path="/events"
        element={
          <PublicLayout>
            <EventPage />
          </PublicLayout>
        }
      />
      <Route
        path="/events/:id"
        element={
          <PublicLayout>
            <EventPageLayout />
          </PublicLayout>
        }
      />
      <Route
        path="/team"
        element={
          <PublicLayout>
            <TeamSection />
          </PublicLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <PublicLayout>
            <ContactPage />
          </PublicLayout>
        }
      />
      <Route
        path="/gallery"
        element={
          <PublicLayout>
            <Gallery />
          </PublicLayout>
        }
      />
      <Route
        path="/certificates"
        element={
          <PublicLayout>
            <Certificate />
          </PublicLayout>
        }
      />
      <Route
        path="/volunteer"
        element={
          <PublicLayout>
            <VolunteerPage />
          </PublicLayout>
        }
      />
      <Route
        path="/donate"
        element={
          <PublicLayout>
            <DontePage />
          </PublicLayout>
        }
      />
      <Route
        path="/career"
        element={
          <PublicLayout>
            <CareerPage />
          </PublicLayout>
        }
      />
      <Route
        path="/our-impact"
        element={
          <PublicLayout>
            <ImpactPage />
          </PublicLayout>
        }
      />
      <Route
        path="/our-area-work"
        element={
          <PublicLayout>
            <OurAreaOfWork />
          </PublicLayout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <PublicLayout>
            <PrivacyPolicy />
          </PublicLayout>
        }
      />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
};

export default HomeRoute;
