import css from '../FAQCard/FAQCard.module.css';

const FAQCard = ({ image, number, question, answer, index, indexCardOpen, toggleExpand }) => {

  return (
    <div onClick={() => toggleExpand(index)} className={css.divCardFAQ} id={index} style={{ backgroundColor: indexCardOpen[index] ? 'var(--text-color)' : 'transparent' }}>
      {indexCardOpen[index] && <img className={css.image} src={image} alt="FAQ Monkeys" />}
      <p className={css.numberOfFAQ} style={{ color: indexCardOpen[index] ? 'var(--white-color)' : 'var(--main-color)' }}>
        [ {number} ]
      </p>
      <div className={css.textContainer}>
        <p className={css.textQuastion} style={{ color: indexCardOpen[index] ? 'var(--main-color)' : 'var(--white-color)' }}>
          {question}
        </p>
        {indexCardOpen[index] && <p className={css.textAnswer}>{answer}</p>}
      </div>
    </div>
  );
};

export default FAQCard;
