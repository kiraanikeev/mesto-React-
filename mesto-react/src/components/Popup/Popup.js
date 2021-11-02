import styles from "./Popup.module.css";

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
<input className={styles.form__info}  type="info" name='text' placeholder="Введите род вашей деятельности" required minLength={2} maxLength={200}/>
<span className={styles.form__input_type_error} id="job-error"></span>
<button className={styles.form__btnSave} type='submit'>Сохранить</button>
</form>
</div></div>

</section>


<div ></div>
<div ></div>
<div ></div>

    </div>
  );
}

export default Popup;
