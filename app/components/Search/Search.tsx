// import styles
import styles from "./Search.module.scss";
import {useAppDispatch, useAppStore} from "../../lib/hooks";
import {useRef} from "react";


export default function Search(): React.JSX.Element {
    const store = useAppStore()
    const initialized = useRef(false)

    const dispatch = useAppDispatch()
  return (
      <div className={styles.searchBlock}>
          <input type="text" className={styles.searchBlockInput} placeholder={'Search packages...'}/>
          <button className={styles.searchBlockButton} >Search</button>
      </div>
  );
}
