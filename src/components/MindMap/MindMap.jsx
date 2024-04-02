import { useRef } from 'react';
import css from './MindMap.module.css';
import Slider from 'react-slick';

const MindMap = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <p className={css.MingMapP}>Mind map</p>
      <div className={css.sliderContainer}>
        <Slider
          ref={slider => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div key={1}>
            <h3>12</h3>
          </div>
          <div key={2}>
            <h3>223</h3>
          </div>
          <div key={3}>
            <h3>334</h3>
          </div>
          <div key={4}>
            <h3>445</h3>
          </div>
        </Slider>
        <div style={{ textAlign: 'center' }}>
          <button className="button" onClick={previous}>
            Previous
          </button>
          <button className="button" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MindMap;
