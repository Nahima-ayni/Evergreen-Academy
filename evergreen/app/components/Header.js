import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/evergreen logo.png" alt="E.H.A. Logo" width={50} height={50} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About us</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/staff">Staff</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <Link href="/contact" className={styles.contactButton}>Contact us</Link>
      </nav>
    </header>
  );
}