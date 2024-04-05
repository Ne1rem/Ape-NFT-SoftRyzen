import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import image from '../../Image/Images/x.png';
import svg from '../../Image/symbol-defs.svg';
import css from './ContactUs.module.css';
import Notiflix from 'notiflix';

const ContactUs = () => {
  const validationSchema = Yup.object({
    discordId: Yup.string()
      .matches(/^(?=.*[a-zA-Z]).{4,}$/, 'Invalid Discord username')
      .required('Discord ID is required'),
    foxId: Yup.string()
      .matches(/^[a-zA-Z0-9]{19,19}$/, 'Invalid Fox ID')
      .required('Fox ID is required'),
  });

  const initialValues = {
    discordId: '',
    foxId: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    Notiflix.Loading.standard('Loading...');
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
      Notiflix.Loading.remove();
      Notiflix.Notify.success('Thanks for join!');
      console.log(values);
    }, 1000);
  };

  return (
    <div id="Mint">
      <h2 className={css.titleContactUs}>Are you in?</h2>
      <img className={css.svgX} src={image} alt="X" />
      <p className={css.textContactsUs}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form>
            <div className={css.inputPart}>
              <div className={css.inputContainer}>
                <svg className={css.svgDiscord}>
                  <use href={`${svg}#icon-Discord`} />
                </svg>
                <div>
                  <Field
                    className={css.inputConctactUs}
                    type="text"
                    name="discordId"
                    placeholder="@USERNAME"
                    style={{
                      borderColor: !touched.discordId
                        ? 'var(--text-color)'
                        : errors.discordId
                        ? 'var(--main-color)'
                        : 'var(--white-color)',
                    }}
                  />
                  {touched.discordId && errors.discordId && (
                    <ErrorMessage
                      name="discordId"
                      component="div"
                      className={css.error}
                    />
                  )}
                </div>
              </div>
              <div className={css.inputContainer}>
                <svg className={css.svgFox}>
                  <use href={`${svg}#icon-Fox-Icon`} />
                </svg>
                <div>
                  <Field
                    className={css.inputConctactUs}
                    type="text"
                    name="foxId"
                    placeholder="WALLET ADDRESS"
                    style={{
                      borderColor: !touched.foxId
                        ? 'var(--text-color)'
                        : errors.foxId
                        ? 'var(--main-color)'
                        : 'var(--white-color)',
                    }}
                  />
                  {touched.foxId && errors.foxId && (
                    <ErrorMessage
                      name="foxId"
                      component="div"
                      className={css.error}
                    />
                  )}
                </div>
              </div>
            </div>
            <button
              className={css.buttonSubmit}
              type="submit"
              disabled={isSubmitting} 
            >
              {isSubmitting ? 'MINTED' : isValid ? 'MINT' : 'ERROR'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
