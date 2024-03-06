"use client"
//import  components
import React from "react";
import Link from "next/link";

//import hooks
import {usePathname} from "next/navigation";

// import styles
import styles from "./LeftNav.module.scss";


export default function LeftNav(): React.JSX.Element {
  const pathname = usePathname()
  const renderClassState = (path: string): string => {
      const defaultLine = styles.leftNavBlockLink
      return pathname === path ? defaultLine + ' ' + styles.leftNavBlockLinkActive : defaultLine;
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
