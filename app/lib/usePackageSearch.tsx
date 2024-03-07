import {useEffect, useState} from "react";
import {SearchCardType} from "../components/BaseComponents/SearchCard/SearchCard";
import {useSelector} from "react-redux";
import {getFetchCache} from "../stores/fetchCacheStore";
import {useAppDispatch} from "./hooks";
import {getPackages} from "./getPackages";
import {RootState} from "./store";

export interface SearchCacheType {
    [key: string]: [SearchCardType]
}

export const usePackageSearch = (value: string, setIsLoading: (T:boolean) => void,
  isSortedByStars: boolean, page: number,
  setPageNumber: (T:number) => void): [SearchCardType] => {
      const [packages, setPackages] = useState<[SearchCardType]>([]);
      const [isResultLoaded, setIsResultLoaded] = useState<boolean>(false);
      const searchCache: SearchCacheType = useSelector<RootState, SearchCacheType>(getFetchCache);
      const dispatch = useAppDispatch();

      useEffect(() => {
          setIsResultLoaded(false)
          if (!value.length) return setPackages([])
          const sort = isSortedByStars ? 'stars' : '';
          const cacheKey = `${value}-${sort}-${page}`;
          if (searchCache[cacheKey]) {
              setPackages(searchCache[cacheKey] || []);
              setIsLoading(false)
          } else {
              setIsLoading(true)
              getPackages(value, sort, page, setPageNumber,
                  searchCache, dispatch).then((response) => {
                  if (!response) {
                      setPackages([]);
                      setIsLoading(false)
                      return;
                  }
                  setIsResultLoaded(true)
              });
          }
      }, [value, isResultLoaded, isSortedByStars, page]);

    useEffect(() => {
        setPageNumber && setPageNumber(1)
    }, [value]);

    return packages;
};
