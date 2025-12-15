import React from 'react';
import styles from './Hero.module.css';
import Button from './Button';
import Image from "next/image";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Global Export Solutions Across Agro,{' '}
          <span className={styles.highlightWrapper}>
            <span className={styles.highlight}>Lifestyle & Home</span>
            <svg className={styles.underline} viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="#6B46C1" strokeWidth="2" fill="none" />
            </svg>
          </span>
          , Commercial, and Sustainable Products
        </h1>
        <div style={{ position: 'relative' }}>
          <p className={styles.description}>
            Falke Handel as a platform bridges the gap between traditional producers and emerging global markets by eliminating inefficiencies and fostering meaningful trade partnerships. Our commitment is to deliver a seamless export experience built on trust, transparency, and responsibility.
          </p>
          <svg className={styles.arrow} viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 40 C 30 40, 50 10, 90 10 M 80 5 L 90 10 L 85 20" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Button className={styles.BottomButton}>Discuss Your Requirements</Button>
      </div>
       
      <div className={styles.imageContainer}>
        <div className={styles.image} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>
          <Image
            src="/assets/topBanner.png"
            alt="Falke Handel platform"
            width={1200}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
