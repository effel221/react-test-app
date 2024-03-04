import { useEffect,useState } from "react";
import {SearchCardType} from "../components/BaseComponents/SearchCard/SearchCard";
import {SearchCardTypeAll} from "../components/SearchPackagesResult/SearchPackagesResult";

const url = 'https://libraries.io/api/search'
const githubKey = 'adea9f496220f5bf0a57a2fc91bfe40b'
const searchCache = {};
let totalPagesAll = 100;

export const getPackages = async (value: string, sort: string, page: number, setPageNumber: (T) => void) => {
    try {
        let response = null
        const mainUrl = `${url}?q=${value}`;
        const sortParam = `&sort=${sort}`;
        const pageParam = `&page=${page}&per_page=5`;
        response = await fetch(`${mainUrl}${sortParam}${pageParam}&api_key=${githubKey}`)
        if (response.status === 404) {
            const newPageParam = `&page=1&per_page=5`;
            response = await fetch(`${mainUrl}${sortParam}${newPageParam}&api_key=${githubKey}`)
            setPageNumber(1)
        }
        const totalPages = Number(response.headers.get('total'));
        totalPagesAll = totalPages;
        const packagesData = await response.json();
        searchCache[`${value}-${sort}-${page}`] = packagesData;
    } catch (error: Error) {
        console.error(error);
    }
}

export const usePackageSearch = (value: string, setIsLoading: (boolean)=>void,
    isSortedByStars: boolean, page: number, setPageNumber: (T) => void ): SearchCardTypeAll => {
    const [packages, setPackages] = useState<[SearchCardType]>([]);
    const [isResultLoaded, setIsResultLoaded ] = useState<boolean>(false);
    useEffect(()=> {
      setIsResultLoaded(false)
      if (!value.length) return setPackages([])
      const sort = isSortedByStars ? 'stars' : '';
      const cacheKey = `${value}-${sort}-${page}`;
      if (searchCache[cacheKey]) {
          setPackages(searchCache[cacheKey] || []);
          setIsLoading(false)
      } else {
          setIsLoading(true)
          getPackages(value, sort, page, setPageNumber).then(() => setIsResultLoaded(true))
      }
    }, [value, isResultLoaded, isSortedByStars, page]);

    return {packages, totalPagesAll};
};
