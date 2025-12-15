"use client";

import React from 'react';
import styles from './Header.module.css';
import Button from './Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname(); // 👈 gets current page URL

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>
          <Image
          alt='logo'
          src="/assets/Logo/FalkeLogo.png"
          height={60}
          width={100}
          // className='width:"100%"'
          />

        </span>
       
      </div>

      <nav className={styles.nav}>
        <Link 
          href="/" 
          className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>

        <Link 
          href="/ui/CoreValues" 
          className={`${styles.navLink} ${pathname === "/ui/CoreValues" ? styles.active : ""}`}
        >
          Core Values
        </Link>

        <Link 
          href="/ui/Product" 
          className={`${styles.navLink} ${pathname === "/ui/Product" ? styles.active : ""}`}
        >
          Product & Services
        </Link>

        <Link 
          href="/ui/Contact" 
          className={`${styles.navLink} ${pathname === "/ui/Contact" ? styles.active : ""}`}
        >
          Contact
        </Link>
      </nav>
        <Link href="/ui/Contact">
      <Button>Discuss Your Requirements</Button></Link>
    </header>
  );
}
