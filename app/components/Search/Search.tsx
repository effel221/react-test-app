// import styles
import styles from "./Search.module.scss";


export default function Search(): React.JSX.Element {
  return (
      <div className={styles.searchBlock}>
          <input type="text" className={styles.searchBlockInput} placeholder={'Search packages...'}/>
          <button className={styles.searchBlockButton} >Search</button>
      </div>
  );
}
