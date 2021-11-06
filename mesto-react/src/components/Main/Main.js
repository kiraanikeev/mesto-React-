import styles from "./Main.module.css";
import {api} from "../Api/Api"
import { useState, useEffect, useContext } from "react";
import Cards from "./Cards/Cards";
import React from "react"; 
import {CurrentUserContext} from "../../contexts/CurrentUserContext"
function Main(props) {

const[cardsArray, setCardsArray]=useState([])

const currentUser = useContext(CurrentUserContext)
useEffect(() => { 

  api.getCards()
  .then((res)=>{
    setCardsArray(res)
  
    })
    .catch((err) => { 
      console.log(`К сожалению произошла ошибка ${err}`); 
  
    }); 

  }, []); 

  function handleCardLike (card) {


    const isLiked = card.likes.some(like => like._id === currentUser._id);
{ !isLiked 
   ? api.makeLike(card._id)
    .then((newCard) => {
  
      setCardsArray((state) => 
      state.map((CardWithLike) => CardWithLike._id === card._id ? newCard : CardWithLike))})
     .catch((err) => { 
           console.log( 
 `Не удалось постаить лайк картинке. Попробуйте позже ${err}` 
 ); 
 })
    : api.deleteLike(card._id)
    .then((newCard) => {
  
      setCardsArray((state) => 
      state.map((CardWithLike) => CardWithLike._id === card._id ? newCard : CardWithLike))})
     .catch((err) => { 
           console.log( 
 `Не удалось постаить лайк картинке. Попробуйте позже ${err}` 
 ); 
 })
} 
  }
  function handleCardDelete(card){

api.deleteCards(card._id)
.then(()=>{

  setCardsArray((state) => 
  state.filter((element)=>element._id === card._id ? card.remove : element))})
.catch((err) => { 
  console.log(`Не удалось удалить картинку ${err}`); 
}); 
  }

  return (
    <div className={styles.main}>
      <section className={styles.profile}>
        <img src={currentUser.avatar} alt="фотография человека" className={styles.avatar} />
        <button
          className={styles.buttonAvatar}
          onClick={props.handleAvatarClick}
        ></button>
        <div className={styles.info}>
          <h1 className={styles.name}>{currentUser.name}</h1>
          <button
            className={styles.editBtn}
            type="button"
            onClick={props.handleProfileClick}
          ></button>
          <p className={styles.status}>{currentUser.about}</p>
        </div>
        <button
          className={styles.addBtn}
          type="button"
          onClick={props.handleAddPlaceClick}
        ></button>
      </section>


      <section className={styles.elements}>
       {cardsArray.map((item)=>{
      return( <Cards key={item._id} data={item} handleCardClick={props.handleCardClick} 
        handleCardLike={handleCardLike} handleCardDelete={handleCardDelete} ></Cards>)})}
 </section>
    </div>
  );
}

export default Main;
