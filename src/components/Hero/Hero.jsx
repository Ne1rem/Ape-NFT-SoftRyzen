import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.div}>
      <a className={css.meetButA} href="#Mint">
        <button className={css.meetBut}>MEET APES</button>
      </a>
    </div>
  );
};

export default Hero;
