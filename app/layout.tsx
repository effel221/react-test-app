//import  components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";

//import meta assets
import Favicon from '/public/favicon.ico';

// import styles
import "@/styles/global.css";

//import  types
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Bower — a package manager for the web",
    description: "A package manager for the web",
    icons: [{ rel: 'icon', url: Favicon.src }]
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
      <main>
        <Header/>
        <MainContent>
          {children}
        </MainContent>
      </main>
      <Footer/>
      </body>
    </html>
  );
}
