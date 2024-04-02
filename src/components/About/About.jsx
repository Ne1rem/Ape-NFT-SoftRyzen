import css from './About.module.css';
import imageX from '../../Image/Images/x.png'
import image from '../../Image/Images/About.png'

const About = () => {
  return (
    <div>
      <p className={css.aStoryAbout}>a Story that started with <span className={css.span}>one simple ape</span></p>
      <p className={css.whoGotAbout}>WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE YACHT</p>
      <div className={css.divAboutX}>
      <img src={imageX} className={css.x} alt="x"/>
      <p className={css.eachArtworkAbout}>EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE RANDOMLY GENERATED BY USERS</p>
      </div>
      <img src={image} className={css.AboutMonkey} alt="MonkeyAbout"/>
    </div>
  );
};

export default About;
