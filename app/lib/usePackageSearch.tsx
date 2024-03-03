import { useEffect,useState } from "react";
import {SearchCardType} from "../components/BaseComponents/SearchCard/SearchCard";

const url = 'https://libraries.io/api/search'
const githubKey = 'adea9f496220f5bf0a57a2fc91bfe40b'
const searchCache = {};

export const getPackages = async (value: string, sort: string) => {
    try {
        const response = await fetch(`${url}?q=${value}&sort=${sort}&api_key=${githubKey}`)
        const packagesData = await response.json();
        searchCache[`${value}-${sort}`] = packagesData;
    } catch (error: Error) {
        console.error(error);
    }
}

export const usePackageSearch = (value: string, setIsLoading: (boolean)=>void, isSortedByStars: boolean): [SearchCardType] => {
    const [packages, setPackages] = useState<[SearchCardType]>([]);
    const [isResultLoaded, setIsResultLoaded ] = useState<boolean>(false);
    useEffect(()=> {
      setIsResultLoaded(false)
      if (!value.length) return setPackages([])
      const sort = isSortedByStars ? 'stars' : '';
      const cacheKey = `${value}-${sort}`;
      if (searchCache[cacheKey]) {
          setPackages(searchCache[cacheKey] || []);
          setIsLoading(false)
      } else {
          setIsLoading(true)
          getPackages(value, sort).then(() => setIsResultLoaded(true))
      }
    }, [value, isResultLoaded, isSortedByStars]);
    return packages;
};
