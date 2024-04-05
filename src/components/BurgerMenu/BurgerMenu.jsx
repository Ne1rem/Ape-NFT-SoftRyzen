import css from './BurgerMenu.module.css';
import icons from '../../Image/symbol-defs.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowNavigation from './ShowNavigation/ShowNavigation';

const BurgerMenu = () => {
  const [distanceScrolled, setDistanceScrolled] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setDistanceScrolled(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const handleLinkClick = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className={css.div}>
      <nav className={css.nav}>
        {burgerOpen && (
          <ShowNavigation
            openBurger={openBurger}
            distanceScrolled={distanceScrolled}
            windowWidth={windowWidth}
          />
        )}
        <ul className={css.ulNav}>
          <li className={css.liNav}>
            {burgerOpen ? null : distanceScrolled >= 380 ||
              windowWidth >= 820 ? (
              <button
                className={css.buttonNavMore}
                onClick={() => openBurger()}
              >
                <span className={css.menuTextMore}>MENU</span>
              </button>
            ) : (
              <button
                className={css.buttonNavLess}
                onClick={() => openBurger()}
              >
                <span className={css.menuTextLess}>MENU</span>
              </button>
            )}
          </li>
          <li className={css.liNav}>
            {distanceScrolled >= 320 || windowWidth >= 820 ? (
              <button className={css.buttonNavSvgMore} onClick={(event) => handleLinkClick(event, 'https://discord.com/')}>
                <svg className={css.svgNavMore}>
                  <use href={`${icons}#icon-Discord`} className={css.use} />
                </svg>
              </button>
            ) : (
              <button className={css.buttonNavSvgLess} onClick={(event) => handleLinkClick(event, 'https://discord.com/')}>
                <svg className={css.svgNavLess}>
                  <use href={`${icons}#icon-Discord`} className={css.use} />
                </svg>
              </button>
            )}
          </li>
          <li className={css.liNav}>
            {distanceScrolled >= 260 || windowWidth >= 820 ? (
              <button className={css.buttonNavSvgMore} onClick={(event) => handleLinkClick(event, 'https://github.com/Ne1rem/ape-nft-softryzen')}>
                <svg className={css.svgNavMore}>
                  <use href={`${icons}#icon-Logo-Ship`} className={css.use} />
                </svg>
              </button>
            ) : (
              <button className={css.buttonNavSvgLess} onClick={(event) => handleLinkClick(event, 'https://github.com/Ne1rem/ape-nft-softryzen')}>
                <svg className={css.svgNavLess}>
                  <use href={`${icons}#icon-Logo-Ship`} className={css.use} />
                </svg>
              </button>
            )}
          </li>
          <li className={css.liNav}>
            {distanceScrolled >= 210 || windowWidth >= 820 ? (
              <button className={css.buttonNavSvgMore} onClick={(event) => handleLinkClick(event, 'https://twitter.com/')}>
                <svg className={css.svgNavMore}>
                  <use href={`${icons}#icon-Twit`} className={css.use} />
                </svg>
              </button>
            ) : (
              <button className={css.buttonNavSvgLess} onClick={(event) => handleLinkClick(event, 'https://twitter.com/')}>
                <svg className={css.svgNavLess}>
                  <use href={`${icons}#icon-Twit`} className={css.use} />
                </svg>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
