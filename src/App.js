import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Swipe from './components/SwipeCaroussel';
import PartnerSection from './components/PartnerSection';
import Linhas from './components/Linhas';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import ReadingProgress from './components/ReadingProgress';

function App() {
  return (
    <div className="">
      <ReadingProgress/>
      <Banner/>
      <AboutSection/>
      <ServicesSection/>
      <PartnerSection/>
      <Linhas/>
      <ContactSection/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
