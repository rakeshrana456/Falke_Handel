"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Footer2 from "@/components/Footer2"
// Icons
import SustainabilityIcon from "/public/assets/sustainability.png";
import EthicsIcon from "/public/assets/ethics.png";
import QualityIcon from "/public/assets/Vector.png";
import ReliabilityIcon from "/public/assets/reliability.png";

const values = [
  {
    number: "01",
    title: "Sustainability",
    icon: SustainabilityIcon,
   description: (
  <>
    <p>We believe that growth and responsibility must go hand in hand.</p>

    <p>Sustainability</p>

    <p>
      guides how we design our processes, from thoughtful material choices to
      efficient production cycles and reduced waste practices.
    </p>

    <p>
      Our approach focuses on long-term value, durability, and conscious decision
      making at every stage of the export journey.
    </p>

    <p>
      By prioritizing sustainability, we support businesses that want to scale
      while remaining environmentally responsible.
    </p>
  </>
)

  },
  {
    number: "02",
    title: "Ethics",
    icon: EthicsIcon,
    description: `
      Ethics define who we are and how we treat every stakeholder.
      We operate with honesty, transparency, and accountability.
      Our commitment to ethical conduct ensures fairness and trust in every interaction,
      making integrity the core foundation of our business relationships.
    `,
  },
  {
    number: "03",
    title: "Quality",
    icon: QualityIcon,
    description: `
      Quality is not an act—it is a culture. Every project is managed through
      structured workflows to ensure consistency, precision, and excellence.
      From sourcing to packaging, we follow strict quality control standards,
      delivering outcomes that exceed expectations.
    `,
  },
  {
    number: "04",
    title: "Reliability",
    icon: ReliabilityIcon,
    description: `
      Reliability is built through predictability and communication.
      Our clients always know the status of their requirements.
      We deliver on time, every time, maintaining transparent updates,
      consistent results, and dependable support across all project stages.
    `,
  },
];

export default function CoreValues() {
  return (
    <>
    <section className={styles.wrapper}>
      {/* ---------- TOP HEADING ---------- */}
      <h2 className={styles.subHeading}>CORE VALUES</h2>

      <h1 className={styles.mainHeading}>
        Our business is built on the <span className={styles.highlightGold}>pillars</span> of
        <br />
        <span className={styles.highlightPurple}>sustainability</span>,{" "}
        <span className={styles.highlightPurple}>ethics</span>,{" "}
        <span className={styles.highlightPurple}>quality</span>,<br />
        <span className={styles.highlightPurple}>transparency</span>, and{" "}
        <span className={styles.highlightPurple}>reliability</span>.
      </h1>

      {/* ---------- LOOP THROUGH VALUES -------- */}
      {values.map((item, index) => (
        <div key={index}>
          {/* Box Header (01 Sustainability) */}
          <div className={styles.box}>
            <span className={styles.boxNumber}>{item.number}</span>
            <span className={styles.boxTitle}>{item.title}</span>
          </div>

          {/* Section Content */}
          <div className={styles.grid}>
            {/* LEFT IMAGE BLOCK */}
            <div className={styles.imageBlock}>
              <Image src={item.icon} alt={item.title} className={styles.icon} />
            </div>

            {/* RIGHT TEXT BLOCK */}
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.text}>{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
    <Footer2/>
    </>
  );
}
