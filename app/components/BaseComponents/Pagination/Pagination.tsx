//import components
import React from "react";

// import styles
import styles from "./Pagination.module.scss";


export default function Pagination({paginationLength, setPageNumber}): React.JSX.Element {
  const paginationSet = [...Array(Math.ceil(paginationLength)).keys()]
  return (
      <div className={styles.paginationBlock}>
        {paginationSet.map(page=> <a key={page}> <span>{page+1} </span></a>)}
      </div>
  );
}
