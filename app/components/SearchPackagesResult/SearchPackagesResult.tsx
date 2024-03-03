"use client"
//import  components
import React, {memo} from "react";
import SearchCard from "../BaseComponents/SearchCard/SearchCard";

// import styles
import styles from "./SearchPackagesResult.module.scss";

// redux store
import {getSearchValue} from "../../stores/searchStore";
import {useSelector} from "react-redux";
import {useDebounce} from "../../lib/debounce";
import {usePackageSearch} from "../../lib/usePackageSearch";



export default memo(function SearchPackagesResult(): React.JSX.Element {
  const currentValue = useSelector(getSearchValue)
  const debouncedValue = useDebounce(currentValue, 500);
  const packagesData = usePackageSearch(debouncedValue)
  return (
      <div className={styles.searchPackagesResultBlock}>
          {packagesData?.length > 0 && packagesData.map((card, ind)=>{
              return <SearchCard key={ind} card={card}/>
          })}
          {packagesData?.length === 0 && <p>No data</p>}
      </div>
  );
})
