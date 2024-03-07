"use client"
//import  components
import React, {memo, useCallback, useState} from "react";
import SearchCard, {SearchCardType} from "../BaseComponents/SearchCard/SearchCard";
import LoadingData from "../BaseComponents/LoadingData/LoadingData";
import Pagination from "../BaseComponents/Pagination/Pagination";

// import styles
import styles from "./SearchPackagesResult.module.scss";

// redux store
import {getSearchValue} from "../../stores/searchStore";
import {useSelector} from "react-redux";

//import hooks
import {useDebounce} from "../../lib/debounce";
import {usePackageSearch} from "../../lib/usePackageSearch";
import {getTotalPagesFetched} from "../../stores/fetchCacheStore";
import {RootState} from "../../lib/store";


export default memo(function SearchPackagesResult(): React.JSX.Element {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isSortedByStars, setIsSortedByStars ] = useState<boolean>(false);
  const [ pageNumber, setPageNumber ] = useState<number>(1);
  const currentValue: string = useSelector<RootState, string>(getSearchValue);
  const totalPagesAll: number = useSelector<RootState, number>(getTotalPagesFetched);
  const debouncedValue: string = useDebounce<string, number>(currentValue, 500);
  const packagesData: [SearchCardType] = usePackageSearch(debouncedValue,
      setIsLoading, isSortedByStars, pageNumber, setPageNumber);
  const paginationLength = totalPagesAll/5

  const handleCheckboxChange = useCallback(() => {
    setIsSortedByStars(!isSortedByStars);
  }, [isSortedByStars, debouncedValue]);

  return (
      <div className={styles.searchPackagesResultBlock}>
        <span className={styles.searchPackagesResultBlockSorting}>
          <label htmlFor="sortingByStars">
            <input
                id={"sortingByStars"}
                type="checkbox"
                checked={isSortedByStars}
                onChange={handleCheckboxChange}
            />
            Sort: Stars
          </label>
        </span>
        {!isLoading && packagesData.length > 0 && <>
          <div className={styles.searchPackagesResultBlockCards}>
            {packagesData.map((card:SearchCardType , ind: number)=>{
              return <SearchCard key={ind} card={card}/>
            })}
          </div>
          <Pagination
            paginationLength={paginationLength}
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
          />
        </>
        }
        {!isLoading && packagesData.length === 0 && <p>No data</p>}
        {isLoading && <LoadingData/>}
      </div>
  );
})
