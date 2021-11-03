import styles from "./Main.module.css";
import avatar from "../../images/image.jpg";
import {api} from "../Api/Api"
import { useState } from "react";
import Cards from "./Cards/Cards";
import React from "react"; 

function Main(props) {

const[userName, setUserName]=useState('')
const[userInfo, setUserInfo]=useState('')
const[userAvatar, setUserAvatar]=useState('')
const[cardsArray, setCardsArray]=useState([])

React.useEffect(() => { 
  api.getUserInfo()
  .then((res)=>{
    console.log('res',res)
    setUserName(res.name)
    setUserInfo(res.about)
    setUserAvatar(res.avatar)
    console.log('res.avatar',res.avatar)
  })
  .catch((err) => { 
    console.log(`К сожалению произошла ошибка ${err}`); 

  }); 

  api.getCards()
  .then((res)=>{
    console.log('resCards',res)
    setCardsArray(res)
    })
    .catch((err) => { 
      console.log(`К сожалению произошла ошибка ${err}`); 
  
    }); 
  }, []); 


  return (
    <div className={styles.main}>
      <section className={styles.profile}>
        <img src={userAvatar} alt="фотография человека" className={styles.avatar} />
        <button
          className={styles.buttonAvatar}
          onClick={props.handleAvatarClick}
        ></button>
        <div className={styles.info}>
          <h1 className={styles.name}>{userName}</h1>
          <button
            className={styles.editBtn}
            type="button"
            onClick={props.handleProfileClick}
          ></button>
          <p className={styles.status}>{userInfo}</p>
        </div>
        <button
          className={styles.addBtn}
          type="button"
          onClick={props.handleAddPlaceClick}
        ></button>
      </section>


      <section className={styles.elements}>
{/* {cardsArray.map((item)=>{
      return( <Cards key={item._id} link={item.link} name={item.name}
       length={item.likes.length} handleCardClick={props.handleCardClick}></Cards>)})} */}
       {cardsArray.map((item)=>{
      return( <Cards key={item._id} data={item} handleCardClick={props.handleCardClick}></Cards>)})}
 </section>
    </div>
  );
}

export default Main;
