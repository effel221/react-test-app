
//import  components
import {Suspense} from 'react';
import dynamic from 'next/dynamic'
import LoadingData from "../../components/BaseComponents/LoadingData/LoadingData";
const SearchPackagesResult = dynamic(() => import('../../components/SearchPackagesResult/SearchPackagesResult'), {
    ssr: false, loading: () => <LoadingData />
})
import Search from "../../components/Search/Search";


//import  types
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Packages Page",
  description: "Page to display all packages",
};

export default function PackagesComponent(): React.JSX.Element {
  return (
    <>
      <Search/>
      <SearchPackagesResult/>
    </>
  );
}
