import FAQCard from './FAQCard/FAQCard';
import css from './FAQ.module.css';
import image1 from '../../Image/Images/FAQ/FAQ1.png'
import image2 from '../../Image/Images/FAQ/FAQ2.png'
import image3 from '../../Image/Images/FAQ/FAQ3.png'
import image4 from '../../Image/Images/FAQ/FAQ4.png'
import { useState } from 'react';

const FAQ = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <h2 className={css.titleFAQ}>FAQ</h2>
      <div className={css.divFAQ}>
        <FAQCard
          index={0}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
          number="1"
          image={image1}
          question="WHAT IS AN NFT COLLECTION?"
          answer="An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style."
        />
        <FAQCard
          index={1}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
          number="2"
          image={image2}
          question="HOW DO I PURCHASE NFTS FROM A COLLECTION?"
          answer="To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace."
        />
        <FAQCard
          index={2}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
          number="3"
          image={image3}
          question="CAN I SELL OR TRADE NFTS FROM A COLLECTION?"
          answer="Yes, you can sell or trade NFTs from a collection like you would other digital assets."
        />
        <FAQCard
          index={3}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
          number="4"
          image={image4}
          question="WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?"
          answer="As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights."
        />
      </div>
    </div>
  );
};

export default FAQ;