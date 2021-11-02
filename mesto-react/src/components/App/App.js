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
    avatarSetVisible(true);
  };
  const handleProfileClick = () => {
    profileSetVisible(true);
    console.log("isVisible");
  };
  const handleAddPlaceClick = () => {
    addPlaceSetVisible(true);
  };


  return (
<div className={styles.page}>

<Popup 
activeProfile={profileVisible} profileSetVisible={profileSetVisible}
activeAddPlace={addPlaceVisible} addPlaceSetVisible={addPlaceSetVisible}
activeAvatar={avatarVisible} avatarSetVisible={avatarSetVisible}
> 
</Popup>

<Header />
<Main
 handleAvatarClick={handleAvatarClick}
 handleProfileClick={handleProfileClick}
 handleAddPlaceClick={handleAddPlaceClick}
/>
<Footer />
    </div>
  );
}

export default App;
