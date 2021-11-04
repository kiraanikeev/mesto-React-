import styles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React from "react";
import { useState } from "react";
import Popup from "../Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";

function App(props) {

  const [profileVisible, profileSetVisible] = useState(false);
  const [addPlaceVisible, addPlaceSetVisible] = useState(false);
  const [avatarVisible, avatarSetVisible] = useState(false);
  const [visibleCard, cardPictureCloseVisible] = useState(false);
  const [selectedCard, cardPictureSet] = useState('');

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

  return (
<div className={styles.page}>

<Popup 
activeProfile={profileVisible} profileSetVisible={profileSetVisible}
activeAddPlace={addPlaceVisible} addPlaceSetVisible={addPlaceSetVisible}
activeAvatar={avatarVisible} avatarSetVisible={avatarSetVisible}
> 
</Popup>

<ImagePopup
visibleCard={visibleCard} cardPictureCloseVisible={cardPictureCloseVisible}
selectedCard={selectedCard} cardPictureSet={cardPictureSet} />
<Header />
<Main
 handleAvatarClick={handleAvatarClick}
 handleProfileClick={handleProfileClick}
 handleAddPlaceClick={handleAddPlaceClick}
 handleCardClick={handleCardClick}
/>
<Footer />
    </div>
  );
}

export default App;
