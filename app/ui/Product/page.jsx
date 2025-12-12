"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Footer2 from "@/components/Footer2"


// import checkIcon from "/public/assets/check.png"; // Purple check icon

export default function Product() {
  const offers = [
    "End-to-end sourcing and procurement",
    "Sample development and customization",
    "White labelling and private branding",
    "Quality checks and compliance assurance",
    "International packaging and logistics handling",
  ];

  const categories = [
    {
      letter: "A",
      title: "Agro Exports",
      description: `We work with certified processing units and agricultural clusters across India. 
      Our portfolio includes products such as coffee, spices, tea-based products, and essential oils. 
      Every shipment meets international food handling and export standards.`,
    },
    {
      letter: "B",
      title: "Commercial & Industrial Solutions",
      description: `Our commercial and industrial segment supports business operations and corporate 
      environments. We supply items such as display products, promotional merchandise, workwear, and 
      commercial-use equipment, tailored to buyer requirements.`,
    },
    {
      letter: "C",
      title: "Sustainable & Eco-Conscious Products",
      description: `We curate sustainable products that align with eco-friendly business goals. 
      Our portfolio ranges from lifestyle essentials to compostable and environmentally responsible 
      solutions, helping brands make conscious decisions without compromising quality.`,
    },
    {
      letter: "D",
      title: "Lifestyle & Home",
      description: `Our Lifestyle & Home segment features products that combine style, functionality, 
      and durability. Each item is designed to meet international standards, enabling global buyers 
      to offer reliable and appealing solutions for everyday living.`,
    },
  ];

  return (
   <>
  {/* Full-width purple background */}
  <div style={{ backgroundColor: "#f0f0f8", padding: "40px 0" }}>

    {/* Your original section remains untouched */}
    <section className={styles.wrapper}>
      <h2 className={styles.subHeading}>PRODUCTS AND SERVICES</h2>

      <div className={styles.TopHeading}>
        <h1 className={styles.mainHeading}>
          We specialize in cross-category export
          <br />
          solutions across{" "}
          <span className={styles.highlightOrange}>Lifestyle & Home</span>,{" "}
          <span className={styles.highlightOrange}>Agro</span>, Commercial, and
          Sustainable product
          <br />
          segments. From sourcing to logistics, we
          <br />
          manage every step to ensure compliance,
          <br />
          quality, and on-time delivery for global
          <br />
          buyers.
        </h1>
      </div>

      <h3 className={styles.offerHeading}>What We Offer</h3>

      <div className={styles.offerGrid}>
        {offers.map((item, idx) => (
          <div key={idx} className={styles.offerItem}>
            <Image
              src="/assets/checkIcon.png"
              height={30}
              width={30}
              alt="check"
              className={styles.icon}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className={styles.cardContainer}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardLetter}>{cat.letter}</div>

            <div>
              <h4 className={styles.cardTitle}>{cat.title}</h4>
              <p className={styles.cardText}>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>

  <Footer2 />
</>

  );
}
