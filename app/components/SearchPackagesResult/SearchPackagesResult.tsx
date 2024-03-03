"use client"
//import  components
import React, {memo, useState} from "react";
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
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const currentValue: string = useSelector(getSearchValue)
  const debouncedValue: string = useDebounce(currentValue, 500);
  const packagesData: [SearchCardType] = usePackageSearch(debouncedValue, setIsLoading)

  return (
      <div className={styles.searchPackagesResultBlock}>
          {!isLoading && packagesData.length > 0 && packagesData.map((card:SearchCardType , ind: number)=>{
              return <SearchCard key={ind} card={card}/>
          })}
          {!isLoading && packagesData.length === 0 && <p>No data</p>}
          {isLoading && <LoadingData/>}
      </div>
  );
})
