import css from './ShowNavigation.module.css';
import icons from '../../../Image/symbol-defs.svg'

const ShowNavigation = ({
  openBurger,
  distanceScrolled,
  scrollValues,
  windowWidth,
}) => {

  const closeModal = () => {
    openBurger(false)
  }


  const handleLinkClick = () => {
    if(windowWidth>767){
      return
    } else openBurger(false)
    
  };
  return (
    <div className={css.div}>
      <a href="/" className={css.LogoPhone}>
        <svg className={css.svgHeader}>
          <use href={`${icons}#icon-MadeBy`} className={css.use} />
        </svg>
      </a>
      <nav
        className={css.nav}
        style={{
          backgroundColor:
            windowWidth <= 767 ? 'transparent' : distanceScrolled >= scrollValues.menu ? 'rgba(255, 255, 255, 0.1)' : 'rgba(30, 30, 30, 0.1)',
        }}
      >
        <ul className={css.ul}>
          {distanceScrolled >= scrollValues.menu ? (
            <>
              <li className={css.liMore}>
                <a className={css.navigationAMore} onClick={handleLinkClick} href="#About">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>About</span>
                  </button>
                </a>
              </li>
              <li className={css.liMore}>
                <a className={css.navigationAMore} onClick={handleLinkClick} href="#M-Map">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>M-Map</span>
                  </button>
                </a>
              </li>
              <li className={css.liMore}>
                <a className={css.navigationAMore} onClick={handleLinkClick} href="#FAQ">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>FAQ</span>
                  </button>
                </a>
              </li>
              <li className={css.liMore}>
                <a className={css.navigationAMore} onClick={handleLinkClick} href="#Arts">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>Arts</span>
                  </button>
                </a>
              </li>
              <li className={css.liMore}>
                <a className={css.navigationAMore} onClick={handleLinkClick} href="#Mint">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>Mint</span>
                  </button>
                </a>
              </li>
              <li>
                <button className={css.buttonMore} onClick={closeModal}>
                  <span className={css.spanMore}>CLOSE</span>
                </button>
              </li>
              <p className={css.footerText}>
                © Yacht ape 2024 all rights reserved
              </p>
            </>
          ) : (
            <>
              <li className={css.liLess}>
                <a className={css.navigationALess} onClick={handleLinkClick} href="#About">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>About</span>
                  </button>
                </a>
              </li>
              <li className={css.liLess}>
                <a className={css.navigationALess} onClick={handleLinkClick} href="#M-Map">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>M-Map</span>
                  </button>
                </a>
              </li>
              <li className={css.liLess}>
                <a className={css.navigationALess} onClick={handleLinkClick} href="#FAQ">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>FAQ</span>
                  </button>
                </a>
              </li>
              <li className={css.liLess}>
                <a className={css.navigationALess} onClick={handleLinkClick} href="#Arts">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>Arts</span>
                  </button>
                </a>
              </li>
              <li className={css.liLess}>
                <a className={css.navigationALess} onClick={handleLinkClick} href="#Mint">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>Mint</span>
                  </button>
                </a>
              </li>
              <li>
                <button className={css.buttonLess} onClick={closeModal}>
                  <span className={css.spanLess}>CLOSE</span>
                </button>
              </li>
              <p className={css.footerText}>
                © Yacht ape 2024 all rights reserved
              </p>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default ShowNavigation;
