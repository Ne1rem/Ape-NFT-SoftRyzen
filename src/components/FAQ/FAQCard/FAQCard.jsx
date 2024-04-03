import { useState } from 'react';
import css from '../FAQCard/FAQCard.module.css';

const FAQCard = ({ number, question, answer }) => {
  const [expanded, setExpanded] = useState(false);
  const [textColor, setTextColor] = useState('var(--white-color)');
  const [numberColor, setNumbreColor] = useState('var(--main-color)');

  const toggleExpand = () => {
    setExpanded(!expanded);
    setTextColor(expanded ? 'var(--white-color)' : 'var(--main-color)');
    setNumbreColor(expanded ? 'var(--main-color)' : 'var(--white-color)');
  };

  return (
    <div onClick={toggleExpand} className={css.divCardFAQ}>
      <p className={css.numberOfFAQ} style={{ color: numberColor }}>
        [ {number} ]
      </p>
      <div className={css.textContainer}>
        <p className={css.textQuastion} style={{ color: textColor }}>
          {question}
        </p>
        {expanded && <p className={css.textAnswer}>{answer}</p>}
      </div>
    </div>
  );
};

export default FAQCard;
