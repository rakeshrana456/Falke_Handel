'use client';

import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAllowAll = () => {
    localStorage.setItem('cookieConsent', 'allowed');
    setIsVisible(false);
  };

  const handleDoNotAllow = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>
            This website uses cookies, pixel tags, and local storage for performance, personalization, and marketing purposes. We use our own cookies and some from third parties. Only essential cookies are turned on by default.{' '}
            <a href="#" className={styles.link}>Cookies settings</a>
          </p>
          <div className={styles.actions}>
            <button 
              onClick={handleDoNotAllow}
              className={styles.buttonSecondary}
            >
              Do not allow cookies
            </button>
            <button 
              onClick={handleAllowAll}
              className={styles.buttonPrimary}
            >
              Allow all cookies
            </button>
            <button 
              onClick={handleClose}
              className={styles.closeButton}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

