import { useRef, useState, useEffect } from 'react';
import css from './Arts.module.css';
import Slider from 'react-slick';

const Arts = () => {
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    
    const importImages = async () => {
      const importedImages = [];
      for (let i = 1; i <= 10; i++) {
        const image = await import(`../../Image/Images/Collections/${i}.png`);
        importedImages.push(image.default);
      }
      setImages(importedImages);
    };

    importImages();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: windowWidth > 767 ? 2 : 1,
    slidesToScroll: 1,
  };

  return (
    <div className={css.artPart}>
      <p className={css.COLLECTION}>COLLECTION</p>
      <div className={css.sliderContainer}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div className={css.divSlaider} key={index}>
              <img src={image} className={css.imageCollection} alt={`Art Collection ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <div style={{ textAlign: 'center', paddingTop: '24px' }}>
          <button className={css.buttonNextPrev} onClick={previous}>
            Prev
          </button>
          <button className={css.buttonNextPrev} onClick={next}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Arts;
