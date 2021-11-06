import styles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React from "react";
import { useState } from "react";
import Popup from "../Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useEffect } from "react";
import { api } from "../Api/Api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App(props) {

  const [profileVisible, profileSetVisible] = useState(false);
  const [addPlaceVisible, addPlaceSetVisible] = useState(false);
  const [avatarVisible, avatarSetVisible] = useState(false);
  const [visibleCard, cardPictureCloseVisible] = useState(false);
  const [selectedCard, cardPictureSet] = useState(null);
  const [currentUser, setCurrentUser] = useState('')



  const handleAvatarClick = () => {
    avatarSetVisible(true);
  };
  const handleProfileClick = () => {
    profileSetVisible(true);
    console.log("isVisible");
  };
  const handleAddPlaceClick = () => {
    addPlaceSetVisible(true);
  };
  const handleCardClick = (card) => {
    cardPictureSet(card);
    cardPictureCloseVisible(true)
  };

  useEffect(()=>{
    api.getUserInfo()
    .then((res)=>{
      setCurrentUser(res)

    })
    .catch((err) => { 
      console.log(`К сожалению произошла ошибка ${err}`); 
  })


  },[]); 

  return (
<div className={styles.page}>
<CurrentUserContext.Provider value={currentUser}>
<Popup 
activeProfile={profileVisible} profileSetVisible={profileSetVisible}
activeAddPlace={addPlaceVisible} addPlaceSetVisible={addPlaceSetVisible}
activeAvatar={avatarVisible} avatarSetVisible={avatarSetVisible}
> 
</Popup>
{selectedCard &&
<ImagePopup
visibleCard={visibleCard} cardPictureCloseVisible={cardPictureCloseVisible}
selectedCard={selectedCard} cardPictureSet={cardPictureSet} />}

<Header />
<Main
 handleAvatarClick={handleAvatarClick}
 handleProfileClick={handleProfileClick}
 handleAddPlaceClick={handleAddPlaceClick}
 handleCardClick={handleCardClick}
/>
<Footer />
</CurrentUserContext.Provider>
    </div>
  );
}

export default App;
