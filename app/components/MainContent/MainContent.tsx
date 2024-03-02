//import  components
import LeftNav from "../LeftNav/LeftNav";

// import styles
import styles from "./MainContent.module.scss";

export default function MainContent({children}: React.ReactNode): React.JSX.Element {
  return (
      <section className={styles.mainBlock}>
          <LeftNav/>
          <div className={styles.mainBlockContainer}>{children}</div>
      </section>
  );
}
