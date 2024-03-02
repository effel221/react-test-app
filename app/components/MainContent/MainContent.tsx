//import  components
import LeftNav from "../LeftNav/LeftNav";

// import styles
import styles from "./MainContent.module.scss";
import StoreProvider from "../../StoreProvider";

export default function MainContent({children}: React.ReactNode): React.JSX.Element {
  return (
      <StoreProvider>
        <section className={styles.mainBlock}>
            <LeftNav/>
            <div className={styles.mainBlockContainer}>
                <section className={styles.mainPageBlock}>
                    {children}
                </section>
            </div>
        </section>
      </StoreProvider>
  );
}
