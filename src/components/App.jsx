import About from './About/About';
import Arts from './Arts/Arts';
import ContactUs from './ContactUs/ContactUs';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MindMap from './MindMap/MindMap';
import css from './App.module.css'
import BurgerMenu from './BurgerMenu/BurgerMenu';

const App = () => {
  return (
    <div className={css.div}>
      <Header />
      <About />
      <MindMap />
      <FAQ />
      <Arts />
      <ContactUs />
      <Footer />
      <BurgerMenu/>
    </div>
  );
};

export default App;
