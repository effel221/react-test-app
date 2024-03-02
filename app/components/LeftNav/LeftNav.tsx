"use client"
//import  components
import Link from "next/link";
import {usePathname} from "next/navigation";

// import styles
import styles from "./LeftNav.module.scss";


export default function LeftNav(): React.JSX.Element {
  const pathname = usePathname()
  const renderClassState = (path: string) => {
      return pathname !== path ? styles.leftNavBlockLink : styles.leftNavBlockLinkActive;
  }
  return (
      <aside className={styles.leftNavBlock}>
          <h2>Navigation</h2>
          <nav>
              <Link href="/" className={renderClassState("/")}>
                  Home
              </Link>
              <Link href="/pages/packages" className={renderClassState("/pages/packages")}>
                  Search packages
              </Link>
          </nav>
      </aside>
  );
}
