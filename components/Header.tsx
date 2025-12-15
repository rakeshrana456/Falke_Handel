"use client";

import React from 'react';
import styles from './Header.module.css';
import Button from './Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup: ensuring scroll is re-enabled when unmounting
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>
          <Image
            alt='logo'
            src="/assets/Logo/FalkeLogo.png"
            height={60}
            width={100}
          />
        </span>
      </div>

      {/* Hamburger Icon */}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Navigation */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <Link 
          href="/" 
          className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link 
          href="/ui/CoreValues" 
          className={`${styles.navLink} ${pathname === "/ui/CoreValues" ? styles.active : ""}`}
          onClick={closeMenu}
        >
          Core Values
        </Link>

        <Link 
          href="/ui/Product" 
          className={`${styles.navLink} ${pathname === "/ui/Product" ? styles.active : ""}`}
          onClick={closeMenu}
        >
          Product & Services
        </Link>

        <Link 
          href="/ui/Contact" 
          className={`${styles.navLink} ${pathname === "/ui/Contact" ? styles.active : ""}`}
          onClick={closeMenu}
        >
          Contact
        </Link>

        <div className={styles.mobileButton} onClick={closeMenu}>
          <Link href="/ui/Contact">
            <Button>Discuss Your Requirements</Button>
          </Link>
        </div>
      </nav>

      {/* Desktop Button (Hidden on Mobile) */}
      <div className={styles.desktopButton}>
        <Link href="/ui/Contact">
          <Button>Discuss Your Requirements</Button>
        </Link>
      </div>
    </header>
  );
}


