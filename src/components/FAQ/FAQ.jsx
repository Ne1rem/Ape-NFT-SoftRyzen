import FAQCard from './FAQCard/FAQCard';
import css from './FAQ.module.css';
const FAQ = () => {
  return (
    <div>
      <h2 className={css.titleFAQ}>FAQ</h2>
      <div className={css.divFAQ}>
        <FAQCard
          number="1"
          question="WHAT IS AN NFT COLLECTION?"
          answer="An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style."
        />
        <FAQCard
          number="2"
          question="HOW DO I PURCHASE NFTS FROM A COLLECTION?"
          answer="To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace."
        />
        <FAQCard
          number="3"
          question="CAN I SELL OR TRADE NFTS FROM A COLLECTION?"
          answer="Yes, you can sell or trade NFTs from a collection like you would other digital assets."
        />
        <FAQCard
          number="4"
          question="WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?"
          answer="As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights."
        />
      </div>
    </div>
  );
};

export default FAQ;
