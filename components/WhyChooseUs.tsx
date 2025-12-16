import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";
import coreEthics from "./assets/coreEthics.png";
export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.leftContent}>
        <div className={styles.iconBox}>
          <Image
            src="/assets/sustainability.png"
            alt="coreEthics"
            width={200}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </div>
        <div className={styles.iconBox}>
             <Image
            src="/assets/ethics.png"
            alt="coreEthics"
            width={200}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </div>
        <div className={styles.iconBox}>
            
          <Image
            src="/assets/Vector.png"
            alt="coreEthics"
            width={200}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </div>
        <div className={styles.iconBox}>
            <Image
            src="/assets/Snapshots/Vectors.png"
            alt="coreEthics"
            width={200}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>

      <div className={styles.rightContent}>
        <span className={styles.label}>WHY CHOOSE US?</span>
        <h2 className={styles.headline}>
          By partnering with responsible vendors and audited manufacturing
          units, we ensure every product meets{" "}
          <span className={styles.high}>international standards.<img src="/assets/svg/svg9359300341.svg" alt="" /></span>
        </h2>
        <p className={styles.description}>
          We are built on the pillars of Sustainability, Ethics, Quality,
          Transparency and Reliability. By working with trusted cooperatives,
          responsible vendors, and audited manufacturing units across India, we
          ensure that every product is ethically sourced, consistently high in
          quality, and aligned with EU standards. Our process is transparent at
          every stage, from sourcing to sample approval, production, branding,
          packaging, and logistics, giving you complete visibility and peace of
          mind.
        </p>
      </div>
    </section>
  );
}
