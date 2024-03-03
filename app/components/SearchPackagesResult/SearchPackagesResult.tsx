"use client"
//import  components
import React, {memo, useCallback, useState} from "react";
import SearchCard, {SearchCardType} from "../BaseComponents/SearchCard/SearchCard";

// import styles
import styles from "./SearchPackagesResult.module.scss";

// redux store
import {getSearchValue} from "../../stores/searchStore";
import {useSelector} from "react-redux";
import {useDebounce} from "../../lib/debounce";
import {usePackageSearch} from "../../lib/usePackageSearch";
import LoadingData from "../BaseComponents/LoadingData/LoadingData";



export default memo(function SearchPackagesResult(): React.JSX.Element {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isSortedByStars, setIsSortedByStars ] = useState<boolean>(false);
  const currentValue: string = useSelector(getSearchValue);
  const debouncedValue: string = useDebounce(currentValue, 500);
  const packagesData: [SearchCardType] = usePackageSearch(debouncedValue, setIsLoading, isSortedByStars);

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
        </>
        }
        {!isLoading && packagesData.length === 0 && <p>No data</p>}
        {isLoading && <LoadingData/>}
      </div>
  );
})
