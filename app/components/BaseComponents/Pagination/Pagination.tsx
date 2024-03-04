//import components
import React from "react";
import ReactPaginate from "react-paginate";

// import styles
import styles from "./Pagination.module.scss";

type PaginationProps = {
    paginationLength: number,
    pageNumber: number,
    setPageNumber: (selectedNumber: any) => void
}

type PaginationArguments = {
  selected: number
}

export default function Pagination({pageNumber, paginationLength, setPageNumber}: PaginationProps): React.JSX.Element {
  const handlePageClick = (arg: PaginationArguments) => {
      const selectedNumber: number = ++arg.selected || 1
      setPageNumber(selectedNumber)
  }
  return (
      <div className={styles.paginationBlock}>
          <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={Math.ceil(paginationLength)}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              className={styles.paginationBlockList}
              activeClassName={styles.paginationBlockListItemActive}
          />
      </div>
  );
}
