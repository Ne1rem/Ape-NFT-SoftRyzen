import { useState } from 'react';
import css from '../FAQCard/FAQCard.module.css';

const FAQCard = ({ image, number, question, answer }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const toggleExpand = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <div onClick={toggleExpand} className={css.divCardFAQ} style={{ backgroundColor: cardOpen ? 'var(--text-color)' : 'transparent' }}>
      {cardOpen && <img className={css.image} src={image} alt="FAQ Monkeys" />}
      <p className={css.numberOfFAQ} style={{ color: cardOpen ? 'var(--white-color)' : 'var(--main-color)' }}>
        [ {number} ]
      </p>
      <div className={css.textContainer}>
        <p className={css.textQuastion} style={{ color: cardOpen ? 'var(--main-color)' : 'var(--white-color)' }}>
          {question}
        </p>
        {cardOpen && <p className={css.textAnswer}>{answer}</p>}
      </div>
    </div>
  );
};

export default FAQCard;
  