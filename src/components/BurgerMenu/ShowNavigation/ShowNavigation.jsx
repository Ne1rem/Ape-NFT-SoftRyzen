import css from './ShowNavigation.module.css';

const ShowNavigation = ({ openBurger, distanceScrolled, windowWidth }) => {
  return (
    <div className={css.div}>
      <nav
        className={css.nav}
        style={{
          backgroundColor:
            distanceScrolled >= 380 || windowWidth >= 820
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(30, 30, 30, 0.1)',
        }}
      >
        <ul className={css.ul}>
          {distanceScrolled >= 380 || windowWidth >= 820 ? (
            <>
              <li className={css.liMore}>
                <a className={css.navigationAMore} href="#About">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>About</span>
                  </button>
                </a>
              </li>
              <li className={css.liMore}>
                <a className={css.navigationAMore} href="#M-Map">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>M-Map</span>
                  </button>
                </a>
              </li>
              <li className={css.liMore}>
                <a className={css.navigationAMore} href="#FAQ">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>FAQ</span>
                  </button>
                </a>
              </li>
              <li className={css.liMore}>
                <a className={css.navigationAMore} href="#Arts">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>Arts</span>
                  </button>
                </a>
              </li>
              <li className={css.liMore}>
                <a className={css.navigationAMore} href="#Mint">
                  <button className={css.buttonMore}>
                    <span className={css.spanMore}>Mint</span>
                  </button>
                </a>
              </li>
              <li>
                <button className={css.buttonMore} onClick={openBurger}>
                  <span className={css.spanMore}>CLOSE</span>
                </button>
              </li>
            </>
          ) : (
            <>
              <li className={css.liLess}>
                <a className={css.navigationALess} href="#About">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>About</span>
                  </button>
                </a>
              </li>
              <li className={css.liLess}>
                <a className={css.navigationALess} href="#M-Map">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>M-Map</span>
                  </button>
                </a>
              </li>
              <li className={css.liLess}>
                <a className={css.navigationALess} href="#FAQ">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>FAQ</span>
                  </button>
                </a>
              </li>
              <li className={css.liLess}>
                <a className={css.navigationALess} href="#Arts">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>Arts</span>
                  </button>
                </a>
              </li>
              <li className={css.liLess}>
                <a className={css.navigationALess} href="#Mint">
                  <button className={css.buttonLess}>
                    <span className={css.spanLess}>Mint</span>
                  </button>
                </a>
              </li>
              <li>
                <button className={css.buttonLess} onClick={openBurger}>
                  <span className={css.spanLess}>CLOSE</span>
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default ShowNavigation;
