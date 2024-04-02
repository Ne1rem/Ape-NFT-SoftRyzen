import About from './About/About';
import Arts from './Arts/Arts';
import ContactUs from './ContactUs/ContactUs';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import MindMap from './MindMap/MindMap';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <MindMap />
      <FAQ />
      <Arts />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
