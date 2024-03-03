import { useEffect,useState } from "react";
import {SearchCardType} from "../components/BaseComponents/SearchCard/SearchCard";

const url = 'https://libraries.io/api/search'
const githubKey = 'adea9f496220f5bf0a57a2fc91bfe40b'
const searchCache = {};
const getPackages = async (value: string) => {
    if (!searchCache[value]) {
      const response = await fetch(`${url}?q=${value}&api_key=${githubKey}`)
      const packagesData = await response.json();
      searchCache[value] = packagesData;
    }
    return searchCache[value];
}

export const usePackageSearch = (value: string): [SearchCardType] => {
    const [ packages, setPackages ] = useState<[SearchCardType]>([])
    useEffect(()=> {
     value.length && getPackages(value).then(setPackages)
     !value.length && setPackages([])
    }, [value]);
    return packages;
};
