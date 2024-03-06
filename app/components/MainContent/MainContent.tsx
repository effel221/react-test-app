//import  components
import LeftNav from "../LeftNav/LeftNav";
import StoreProvider from "../../StoreProvider";

// import styles
import styles from "./MainContent.module.scss";



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
