
//import  components
import SearchPackagesResult from "../../components/SearchPackagesResult/SearchPackagesResult"
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
