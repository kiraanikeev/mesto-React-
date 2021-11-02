import styles from './Cards.module.css'

function Cards(props){



return(
  
    

        <div className={styles.element}>
          <img
            src={props.link}
            alt={`Фотография ${props.name}`} 
            className={styles.img}
          />
          <h2 className={styles.name}>{props.name}</h2>
          <button className={styles.like} type="button"></button>
          <button className={styles.delete} type="button"></button>
          <div className={styles.counter}>{props.length}</div>
        </div>

    

)
}

export default Cards;