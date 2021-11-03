import styles from "./Popup.module.css";
import React from "react";

function Popup(props) {

  return (
  <div>


<section className={props.activeProfile ? styles.active : styles.popup} onClick={()=>props.profileSetVisible(false)}>
<div className={styles.overlay}>
<div className={styles.container} onClick={e=>e.stopPropagation()}>
<form action="#" name={props.name} className={`form form_${props.name}`} noValidate > 
<button className={styles.btnClose} type="button" onClick={()=>props.profileSetVisible(false)} />
<h3 className={styles.form__name}> Редактировать профиль </h3>
<input className={styles.form__info}  type="text" name='name' placeholder="Введите имя" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id="name-error"></span>
<input className={styles.form__info}  type="text" name='info' placeholder="Введите род вашей деятельности" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id="job-error"></span>
<button className={styles.form__btnSave} type='submit'>Сохранить</button>
</form>
</div></div>
</section>


<section className={props.activeAddPlace ? styles.active : styles.popup} onClick={()=>props.addPlaceSetVisible(false)}>
<div className={styles.overlay}>
<div className={styles.container} onClick={e=>e.stopPropagation()}>
<form action="#" name={props.name} className={`form form_${props.name}`} noValidate > 
<button className={styles.btnClose} type="button" onClick={()=>props.addPlaceSetVisible(false)} />
<h3 className={styles.form__name}>Новое место</h3>
<input className={styles.form__info}  type="text" name='title' placeholder="Название" required minLength={2} maxLength={40}/>
<span className={styles.form__input_type_error} id="name-error"></span>
<input className={styles.form__info}  type="url" name='link' placeholder="Введите ссылку" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id="job-error"></span>
<button className={styles.form__btnSave} type='submit'>Создать</button>
</form>
</div></div>
</section>



<section className={props.activeAvatar ? styles.active : styles.popup} onClick={()=>props.avatarSetVisible(false)}>
<div className={styles.overlay}>
<div className={styles.container} onClick={e=>e.stopPropagation()}>
<form action="#" name={props.name} className={`form form_${props.name}`} noValidate > 
<button className={styles.btnClose} type="button" onClick={()=>props.avatarSetVisible(false)} />
<h3 className={styles.form__name}>Обновить аватар</h3>
<input className={styles.form__info}  type="text" name='avatar' placeholder="Введите ссылку на картинку" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id="name-error"></span>
<button className={styles.form__btnSave} type='submit'>Сохранить</button>
</form>
</div></div>
</section>




    </div>
  );
}

export default Popup;
