import React from 'react';
import styles from './Footer2.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer2() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Column 1: Logo */}
                <div className={styles.column}>
                    <div className={styles.logo}>
                          <Image
                           src="/assets/Logo/FalkeLogoWhite.png"
                           alt='logo'
                           height={60}
                           width={100}
                           />
                    </div>
                    <a href="mailto:info@falkehandel.de" className={styles.email}>info@falkehandel.de</a>
                </div>

                {/* Column 2: Get in Touch */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>Get in Touch</h3>
                    <span className={styles.text}>Phone number</span>
                    <Link href="/ui/Contact" className={styles.link}>Contact Form</Link>
                    <a href="mailto:info@email.com" className={styles.link}>info@email.com</a>
                    <span className={styles.text}>00 (123) 456 78 90</span>
                </div>

                {/* Column 3: Learn More */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>Learn More</h3>
                    <Link href="/" className={styles.link}>Process</Link>
                    <Link href="/ui/Product" className={styles.link}>Services</Link>
                </div>

                {/* Column 4: Newsletter */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>Our Newsletter</h3>
                    <p className={styles.text}>Subscribe to our newsletter to get our news delivered to you.</p>
                    <form className={styles.newsletterForm}>
                        <input type="email" placeholder="name@email.com" className={styles.input} />
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}
