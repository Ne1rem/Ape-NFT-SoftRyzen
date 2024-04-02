import css from './BurgerMenu.module.css';
import icons from '../../Image/symbol-defs.svg';

const BurgerMenu = () => {
  return (
    <div className={css.div}>
      <nav className={css.nav}>
        <ul className={css.ulNav}>
          <li className={css.liNav}>
            <button className={css.buttonNav}>MENU</button>
          </li>
          <li className={css.liNav}>
            <button className={css.buttonNavSvg}>
              <svg className={css.svgNav}>
                <use href={`${icons}#icon-Discord`} className={css.use} />
              </svg>
            </button>
          </li>
          <li className={css.liNav}>
            <button className={css.buttonNavSvg}>
              <svg className={css.svgNav}>
                <use href={`${icons}#icon-Logo-Ship`} className={css.use} />
              </svg>
            </button>
          </li>
          <li className={css.liNav}>
            <button className={css.buttonNavSvg}>
              <svg className={css.svgNav}>
                <use href={`${icons}#icon-Twit`} className={css.use} />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
