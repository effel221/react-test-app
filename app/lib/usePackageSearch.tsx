import { useEffect,useState } from "react";
import {SearchCardType} from "../components/BaseComponents/SearchCard/SearchCard";

const url = 'https://libraries.io/api/search'
const githubKey = 'adea9f496220f5bf0a57a2fc91bfe40b'
const searchCache = {};

const getPackages = async (value: string) => {
  const response = await fetch(`${url}?q=${value}&api_key=${githubKey}`)
  const packagesData = await response.json();
  searchCache[value] = packagesData;
}

export const usePackageSearch = (value: string, setIsLoading: (boolean)=>void): [SearchCardType] => {
    const [packages, setPackages] = useState<[SearchCardType]>([]);
    const [isResultLoaded, setIsResultLoaded ] = useState<boolean>(false);
    useEffect(()=> {
      setIsResultLoaded(false)
      if (!value.length) return setPackages([])
      if (searchCache[value]) {
          setPackages(searchCache[value] || []);
          setIsLoading(false)
      } else {
          setIsLoading(true)
          getPackages(value).then(() => setIsResultLoaded(true))
      }
    }, [value, isResultLoaded]);
    return packages;
};
