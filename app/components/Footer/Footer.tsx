// import styles
import styles from "./Footer.module.scss";


export default function Footer(): React.JSX.Element {
  return (
    <footer className={styles.footerBlock}>
      <p>@ Bower A package manager for the web</p>
    </footer>
  );
}
