import css from './BurgerMenu.module.css';
import icons from '../../Image/symbol-defs.svg';
import { useState, useEffect } from 'react';
import ShowNavigation from './ShowNavigation/ShowNavigation';

const BurgerMenu = () => {
  const [distanceScrolled, setDistanceScrolled] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [scrollValues, setScrollValues] = useState({
    twitter: 0,
    button: 0,
    discord: 0,
    menu: 0,
  });

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

  useEffect(() => {
    if (windowWidth < 768 && burgerOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    const updateScrollValues = () => {
      if (windowWidth >= 768 && windowWidth < 1280) {
        setScrollValues({
          twitter: 207,
          button: 267,
          discord: 323,
          menu: 380,
        });
      } else if (windowWidth >= 1280) {
        setScrollValues({
          twitter: 323,
          button: 416,
          discord: 515,
          menu: 612,
        });
      } else if (windowWidth < 768) {
        setScrollValues({
          twitter: 328,
          button: 387,
          discord: 443,
          menu: 503,
        });
      }
    };

    updateScrollValues();
  }, [windowWidth, burgerOpen]);

  const openBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const handleLinkClick = (event, url) => {
    if (windowWidth <= 767) {
      openBurger(false);
    }
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
            scrollValues={scrollValues}
            windowWidth={windowWidth}
            burgerOpen={burgerOpen}
          />
        )}
        <ul className={css.ulNav}>
          <li className={css.liNav}>
            {burgerOpen ? null : distanceScrolled >= scrollValues.menu ? (
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
                style={{
                  backgroundColor:
                    windowWidth <= 767 && burgerOpen
                      ? 'rgba(255, 255, 255, 0.1)'
                      : null,
                }}
              >
                <span className={css.menuTextLess}>MENU</span>
              </button>
            )}
          </li>

          <li className={css.liNav}>
            {distanceScrolled >= scrollValues.discord ? (
              <button
                className={css.buttonNavSvgMore}
                onClick={event =>
                  handleLinkClick(event, 'https://discord.com/')
                }
              >
                <svg className={css.svgNavMore}>
                  <use href={`${icons}#icon-Discord`} className={css.use} />
                </svg>
              </button>
            ) : (
              <button
                className={css.buttonNavSvgLess}
                onClick={event =>
                  handleLinkClick(event, 'https://discord.com/')
                }
              >
                <svg className={css.svgNavLess}>
                  <use href={`${icons}#icon-Discord`} className={css.use} />
                </svg>
              </button>
            )}
          </li>
          <li className={css.liNav}>
            {distanceScrolled >= scrollValues.button ? (
              <button
                className={css.buttonNavSvgMore}
                onClick={event =>
                  handleLinkClick(
                    event,
                    'https://github.com/Ne1rem/ape-nft-softryzen'
                  )
                }
              >
                <svg className={css.svgNavMore}>
                  <use href={`${icons}#icon-Logo-Ship`} className={css.use} />
                </svg>
              </button>
            ) : (
              <button
                className={css.buttonNavSvgLess}
                onClick={event =>
                  handleLinkClick(
                    event,
                    'https://github.com/Ne1rem/ape-nft-softryzen'
                  )
                }
              >
                <svg className={css.svgNavLess}>
                  <use href={`${icons}#icon-Logo-Ship`} className={css.use} />
                </svg>
              </button>
            )}
          </li>
          <li className={css.liNav}>
            {distanceScrolled >= scrollValues.twitter ? (
              <button
                className={css.buttonNavSvgMore}
                onClick={event =>
                  handleLinkClick(event, 'https://twitter.com/')
                }
              >
                <svg className={css.svgNavMore}>
                  <use href={`${icons}#icon-Twit`} className={css.use} />
                </svg>
              </button>
            ) : (
              <button
                className={css.buttonNavSvgLess}
                onClick={event =>
                  handleLinkClick(event, 'https://twitter.com/')
                }
              >
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
