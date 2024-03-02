//import  components
import Link from "next/link";

// import styles
import styles from "./Header.module.scss";

// import images
import Image from 'next/image';
import BowerLogo from '/images/bower-logo.svg';


export default function Header(): React.JSX.Element {
    return (
        <header className={styles.headerBlock}>
            <Link href="/" className={styles.logoBlock} >
                <Image
                    src={BowerLogo}
                    alt="Bower Logo"
                />
            </Link>
            <div className={styles.headerInfo}>
                <div className={styles.headerInfoContent}>
                    <h1>Bower</h1>
                    <h3>A package manager for the web</h3>
                </div>
            </div>
        </header>
    );
}
