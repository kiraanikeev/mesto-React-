import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__text}>Anikeev Kirill © 2021 Mesto Russia</p>
    </div>
  );
}

export default Footer;
