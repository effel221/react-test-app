import {setSearchCache, setTotalPagesFetched} from "../stores/fetchCacheStore";

const url = 'https://libraries.io/api/search'
const githubKey = 'adea9f496220f5bf0a57a2fc91bfe40b'

export const getPackages = async (value: string, sort: string,
  page: number, setPageNumber: (T) => void, searchCache: Object,
  dispatch: (T) => void) => {
      try {
          const searchCacheLocal = {}
          let response = null;
          const mainUrl = `${url}?q=${value}`;
          const sortParam = `&sort=${sort}`;
          const pageParam = `&page=${page}&per_page=5`;
          response = await fetch(`${mainUrl}${sortParam}${pageParam}&api_key=${githubKey}`)
          if (response.status === 404) {
              const newPageParam = `&page=1&per_page=5`;
              response = await fetch(`${mainUrl}${sortParam}${newPageParam}&api_key=${githubKey}`)
              setPageNumber(1)
          }
          const totalPages = Number(response?.headers?.get('total')) || 1;
          dispatch(setTotalPagesFetched(totalPages));
          const packagesData = await response.json();
          searchCacheLocal[`${value}-${sort}-${page}`] = packagesData;
          dispatch(setSearchCache(searchCacheLocal));
          return searchCacheLocal;
      } catch (error: Error) {
          console.log(error);
      }
}
