import styles from './Cards.module.css'
import React from "react";

function Cards(props){

function handleClich(){
  props.handleCardClick(props.data)
  console.log('click', props.data)
}

return(
  
    

        <div className={styles.element}>
          <img
            src={props.data.link}
            alt={`Фотография ${props.data.name}`} 
            className={styles.img}
            onClick={handleClich}
          />
          <h2 className={styles.name}>{props.data.name}</h2>
          <button className={styles.like} type="button"></button>
          <button className={styles.delete} type="button"></button>
          <div className={styles.counter}>{props.data.likes.length}</div>
        </div>

    

)
}

export default Cards;