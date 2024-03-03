import { useEffect,useState } from "react";
import {SearchCardType} from "../components/BaseComponents/SearchCard/SearchCard";

const url = 'https://libraries.io/api/search'
const githubKey = 'adea9f496220f5bf0a57a2fc91bfe40b'
const searchCache = {};
const getPackages = async (value: string, setIsLoading: (boolean)=>void) => {
    setIsLoading(true)
    if (!searchCache[value]) {
      const response = await fetch(`${url}?q=${value}&api_key=${githubKey}`)
      const packagesData = await response.json();
      searchCache[value] = packagesData;
    }
    setIsLoading(false)
    return searchCache[value];
}

export const usePackageSearch = (value: string, setIsLoading: (boolean)=>void): [SearchCardType] => {
    const [packages, setPackages] = useState<[SearchCardType]>([])
    const [isResultLoaded, setIsResultLoaded ] = useState<boolean>(false)
    useEffect(()=> {
     setIsResultLoaded(false)
     value.length && getPackages(value, setIsLoading).then(() => setIsResultLoaded(true))
     !value.length && setPackages([])
    }, [value]);

    useEffect(()=> {
        isResultLoaded && setPackages(searchCache[value] || [])
    }, [isResultLoaded, value]);

    return packages;
};
