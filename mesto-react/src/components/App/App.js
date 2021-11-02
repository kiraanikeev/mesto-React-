import styles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React from "react";
import { useState } from "react";
import stylesPopup from "./Popup.module.css";
import Popup from "../Popup/Popup";

function App(props) {

  const [profileVisible, profileSetVisible] = useState(false);
  const [addPlaceVisible, addPlaceSetVisible] = useState(false);
  const [avatarVisible, avatarSetVisible] = useState(false);
  const [cardPictureVisible, cardPictureSetVisible] = useState(false);

  const handleAvatarClick = () => {
    console.log("isVisible");
  };
  const handleProfileClick = () => {
    profileSetVisible(true);
    console.log("isVisible");
  };
  const handleAddPlaceClick = () => {
    console.log("isVisible");
  };

  return (
<div className={styles.page}>

<Popup 
activeProfile={profileVisible} profileSetVisible={profileSetVisible}> 

</Popup>















{/* <PopupEdit isOpen={isVisible}>
    <div className={styles.page}>
      <section 
        className={stylesPopup.popup}
        id="popup__info"
        
      >
        <div className={stylesPopup.popup__overlay}>
        <div className={stylesPopup.popup__container}>
          <button className={stylesPopup.popup__btnClose} type="button">
            {" "}
          </button>{" "}
          <form
          
            action="#"
            className={(stylesPopup.form, stylesPopup.form__alter)}
            name="form"
            novalidate
          >
            <h3 className={stylesPopup.form__name}> Редактировать профиль </h3>{" "}
            <input
              type="text"
              className={
                (stylesPopup.form__info)
              }
              name="name"
              id="name-input"
              placeholder="Введите имя"
              required
              minlength="2"
              maxlength="200"
            />
            <span
              className={
                (stylesPopup.form__inputError, stylesPopup.nameInputError)
              }
              id="name-error"
            >
              {" "}
            </span>{" "}
            <input
              type="text"
              className={
                (stylesPopup.form__info)
              }
              name="info"
              id="job-input"
              placeholder="Введите род вашей деятельности"
              required
              minlength="2"
              maxlength="200"
            />
            <span
              className={
                (stylesPopup.form__inputError, stylesPopup.jobInputError)
              }
              id="job-error"
            >
              {" "}
            </span>{" "}
            <button className={stylesPopup.form__btnSave} type="submit">
              {" "}
              Сохранить{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
        </div> 
      </section>
      </div> 
      </PopupEdit> */}
      <Header />
      <Main
        handleAvatarClick={handleAvatarClick}
        handleProfileClick={handleProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
      />{" "}
      <Footer />
    </div>
  );
}

export default App;
