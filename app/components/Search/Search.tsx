"use client"
//import  components
import React, {createRef, LegacyRef, useState} from "react";
import {useRef} from "react";
import {getSearchValue, setSearchValue} from "../../stores/searchStore";

// import styles
import styles from "./Search.module.scss";
import {useAppDispatch} from "../../lib/hooks";


export default function Search(): React.JSX.Element {
  const inputRef = useRef<ReturnType<string>>('');
  const dispatch = useAppDispatch();

  const changeSearchValue = () => {
    dispatch(setSearchValue(inputRef.current.value))
  }
  return (
      <div className={styles.searchBlock}>
          <input ref={inputRef} type="search"
            className={styles.searchBlockInput}
            placeholder={'Search packages...'}
                 onChange={changeSearchValue}
          />
          <button className={styles.searchBlockButton}
            onClick={changeSearchValue}>Search</button>
      </div>
  );
}
