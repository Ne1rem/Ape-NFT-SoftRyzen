import css from './Header.module.css';
import icons from '../../Image/symbol-defs.svg';
import image from '../../Image/Images/Header.png'
import Hero from 'components/Hero/Hero';

const Header = () => {
  return (
    <div className={css.divHeader}>
      <a href="/">
        <svg className={css.svgHeader}>
          <use href={`${icons}#icon-MadeBy`} className={css.use} />
        </svg>
      </a>

      <div className={css.divHeaderText}>
        <p className={css.didYouSeeIt}>diD yOu seE iT ?</p>
        <h1 className={css.yachtApes}>YACHT APES</h1>
        <h2 className={css.apesAreEverywhere}>Apes aRe eveRywhere</h2>
        <img src={image} className={css.MonkeyHeader} alt="Monkey Header"/>
        <Hero/>
        <p className={css.yacht}>Yacht Ape is a collection of unique digital apes that you can own in NFT format</p>
      </div>
    </div>
  );
};

export default Header;
