import styles from './Main.module.css'
import avater from "../../images/image.jpg"

function Main(props) {


    return (


      <div className={styles.main}>
   <section className={styles.profile}>
        <img src={avater} alt="фотография человека" className={styles.avatar}/>
     
        <button className={styles.buttonAvatar} onClick={props.handleEditAvatarClick}></button>
        <div className={styles.info}>
<h1 className={styles.name}>Жак-Ив Кусто</h1>
<button className={styles.editBtn} type="button" onClick={props.handleEditProfileClick}></button>
<p className={styles.status}>Исследователь океана</p>
        </div>
        <button className={styles.addBtn} type="button" onClick={props.handleAddPlaceClick}></button>
    </section>
    <section className={styles.elements}>
  
        
{ <template className={styles.cards}>
    <div className={styles.element}>
<img src="" alt="К сожалению ваша картинка не отобразилась, нам очень жаль" className={styles.img}/>
<h2 className={styles.element_name}></h2>
<button className={styles.like} type="button"></button>
<button className={styles.delete} type="button"></button>
<div className={styles.couner}></div>   

</div>
</template> }

    </section>    





  
  
      </div> 

    );
  }
  
  export default Main;