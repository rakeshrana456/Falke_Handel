import React from 'react';
import styles from './GetInTouch.module.css';
import Button from './Button';
import Image from "next/image";

export default function GetInTouch() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <div className={styles.globeImage}>
                        <Image
                                    src="/assets/contactImg.png"
                                    alt="Falke Handel platform"
                                    width={1200}
                                    height={600}
                                    style={{ maxWidth: "100%", height: "auto" }}
                                    priority
                                  />
                    </div>
                </div>
                <div className={styles.content}>
                    <span className={styles.label}>GET IN TOUCH</span>
                    <h2 className={styles.headline}>
                        Ready to <span className={styles.highlight}>Start Your Next</span> Project?
                    </h2>
                    <p className={styles.description}>
                        If you need assistance, we're here to help. Whether you're looking for more information or have any concerns, don't hesitate to reach out. Our team is ready to provide you with the support you need to make the most of your experience.
                    </p>
                    <Button>Discuss Your Requirements</Button>
                </div>
            </div>
        </section>
    );
}
