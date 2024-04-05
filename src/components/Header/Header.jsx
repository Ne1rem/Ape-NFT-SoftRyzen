import { useState, useEffect } from 'react';
import css from './Header.module.css';
import icons from '../../Image/symbol-defs.svg';
import image from '../../Image/Images/Header.png';
import Hero from 'components/Hero/Hero';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={css.divHeader}>
      <a href="/">
        <svg className={css.svgHeader}>
          <use href={`${icons}#icon-MadeBy`} className={css.use} />
        </svg>
      </a>

      <div className={css.divHeaderText}>
        <p className={css.didYouSeeIt}>diD yOu seE iT ?</p>
        {windowWidth >= 768 ? (
          <h1 className={css.yachtApes}>
            YACHT <span style={{paddingLeft: "152px"}}> APES</span>
          </h1>
        ) : (
          <h1 className={css.yachtApes}>YACHT APES</h1>
        )}
        <div className={css.tabletTextPart}>
          <h2 className={css.apesAreEverywhere}>Apes aRe eveRywhere</h2>
          <img src={image} className={css.MonkeyHeader} alt="Monkey Header" />
          {windowWidth >= 768 ? (
            <div className={css.tabletTextPart}>
              <div className={css.tabletButtonParts}>
                <p className={css.yacht}>
                  Yacht Ape is a collection of unique digital apes that you can
                  own in NFT format
                </p>
                <Hero />
              </div>
            </div>
          ) : (
            <div className={css.tabletButtonParts}>
              <Hero />
              <p className={css.yacht}>
                Yacht Ape is a collection of unique digital apes that you can
                own in NFT format
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
