import { useState } from 'react';
import image from '../../Image/Images/x.png';
import svg from '../../Image/symbol-defs.svg';
import css from './ContactUs.module.css';

const ContactUs = () => {
  const [discordId, setDiscordId] = useState('');
  const [foxId, setFoxId] = useState('');
  const [discordError, setDiscordError] = useState('');
  const [foxError, setFoxError] = useState('');

  const handleDiscordChange = event => {
    const value = event.target.value;
    setDiscordId(value);

    if (!value.trim()) {
      setDiscordError('Discord ID is required');
    } else {
      setDiscordError('');
    }
  };

  const handleFoxChange = event => {
    const value = event.target.value;
    setFoxId(value);

    if (!value.trim()) {
      setFoxError('Fox ID is required');
    } else {
      setFoxError('');
    }
  };

  const handleSubmit = () => {
    if (!discordError && !foxError) {
    } else {
    }
  };

  return (
    <div>
      <h2 className={css.titleContactUs}>Are you in?</h2>
      <img className={css.svgX} src={image} alt="X" />
      <p className={css.textContactsUs}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <div className={css.inputPart}>
        <div className={css.inputContainer}>
          <svg className={css.svgDiscord}>
            <use href={`${svg}#icon-Discord`} />
          </svg>
          <input
          className={css.inputConctactUs}
            type="text"
            value={discordId}
            onChange={handleDiscordChange}
            placeholder="@USERNAME"
          />
          {discordError && <p className={css.error}>{discordError}</p>}
        </div>
        <div className={css.inputContainer}>
          <svg className={css.svgFox}>
            <use href={`${svg}#icon-Fox-Icon`} />
          </svg>
          <input
          className={css.inputConctactUs}
            type="text"
            value={foxId}
            onChange={handleFoxChange}
            placeholder="WALLET ADDRESS"
          />
          {foxError && <p className={css.error}>{foxError}</p>}
        </div>
      </div>
      <button className={css.buttonSubmit} onClick={handleSubmit}>MINT</button>
    </div>
  );
};

export default ContactUs;
