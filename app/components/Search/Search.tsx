"use client"
//import  components
import React, {useState} from "react";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSearchValue, setSearchValue} from "../../stores/searchStore";

// import styles
import styles from "./Search.module.scss";

export default function Search(): React.JSX.Element {
  const [searchValue, setSearchValue] = useState('')
  const inputRef: React.MutableRefObject<null> = useRef(null)

  const changeSearchValue = () => {
    setSearchValue(inputRef.current.value)
  }
  return (
      <div className={styles.searchBlock}>
          <input ref={inputRef} type="text" className={styles.searchBlockInput} placeholder={'Search packages...'}/>
          <button className={styles.searchBlockButton}
            onClick={changeSearchValue}>Search</button>
      </div>
  );
}
