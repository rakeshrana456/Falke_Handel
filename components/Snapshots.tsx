import React from "react";
import styles from "./Snapshots.module.css";

export default function Snapshots() {
  const items = [
    {
      title: "1. Understanding Your Requirements",
      text: "We carefully understand your product requirements specifications, compliance needs, packaging preferences, delivery timelines, and branding objectives.",
    },
    {
      title: "2. Sample Development & Approval",
      text: "We coordinate with audited partner manufacturing units to develop prototypes that match your expectations. Production begins only after your approval.",
    },
    {
      title: "3. Production & In-Process Quality Control",
      text: "The production process is supervised by our quality assurance team. In-process checks ensure consistent output and adherence to international standards.",
    },
    {
      title: "4. Compliance with International Standards",
      text: "All products are sourced, manufactured, and inspected through audited units that follow globally accepted quality, safety, and regulatory guidelines.",
    },
  ];

  const images = [
    {
      id: "1",
      path: "/assets/snapshot img1.png",
    },
    {
      id: "2",
      path: "/assets/snapshot img2.png",
    },
    {
      id: "3",
      path: "/assets/snapshot img3.png",
    },
    {
      id: "4",
      path: "/assets/snapshot img4.png",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>SNAPSHOTS</span>
        <h2 className={styles.headline}>
          We provide flexible order quantities{" "}
          <span className={styles.highlight}>
            from sourcing to final delivery.
          </span>
        </h2>
      </div>

      <div className={styles.container}>
        <div className={styles.imageGrid}>
          {images.map((i) => (
            <div key={i.id} className={styles.gridImage}>
              <img
                src={i.path}
                alt={`Snapshot ${i.id}`}
                className={styles.img}
              />
            </div>
          ))}
        </div>

        <div className={styles.contentList}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
