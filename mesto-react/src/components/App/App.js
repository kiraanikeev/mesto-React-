
import styles from './App.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import React from 'react';
import {useState} from 'react';
function App() {



const[isVisible, setVisible]=useState(false);


    
const handleEditAvatarClick =()=>{
  setVisible({ 
    

  })
}
const handleEditProfileClick =()=>{
  console.log("isVisible")
}
const handleAddPlaceClick =()=>{
  console.log("isVisible")
}


  return (
    <div className={styles.page}>
   



     <section className="popup popup__overlay" id="popup__info">
        <div className="popup__container"> 
            <button className="popup__btn-close" type="button"></button>
            <form action="#" className="form form__alter" name='form' novalidate>
                <h3 className="form__name">Редактировать профиль</h3>
                <input type="text" className="form__info popup__input_tupe_name" name="name" id="name-input" placeholder='Введите имя' required minlength="2" maxlength="200" />
                <span className="form__input-error name-input-error" id="name-error"></span>
                <input type="text" className="form__info popup__input_tupe_job" name="info" id="job-input" placeholder='Введите род вашей деятельности' required minlength="2" maxlength="200"/>
                <span className="form__input-error job-input-error" id="job-error"></span>
                <button className="form__btn-save" type="submit">Сохранить</button>
            </form>
        </div>
    </section>
    <p>mesto-react</p>
     <Header/>
     <Main handleEditAvatarClick={handleEditAvatarClick} handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick} />
     <Footer/>

    </div>
  );
}

export default App;
