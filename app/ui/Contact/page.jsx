"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Footer2 from "@/components/Footer2"
export default function Contact() {
  return (
    <>
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>CONTACT</h1>

      <div className={styles.container}>
        {/* LEFT IMAGE */}
        <div className={styles.imageBox}>
          <Image 
          src="/assets/contactImg.png" 
            width={1200}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
          alt="Contact" className={styles.image} />
        </div>

        {/* RIGHT FORM */}
        <form className={styles.form}>
          <h3 className={styles.formTitle}>GET IN TOUCH</h3>

          <label className={styles.label}>EMAIL</label>
          <input
            type="email"
            placeholder="name@email.com"
            className={styles.input}
          />

          <label className={styles.label}>CONTACT NO.</label>
          <input
            type="text"
            placeholder="876543332111"
            className={styles.input}
          />

          <label className={styles.label}>COMMENT</label>
          <textarea
            placeholder="Message..."
            className={styles.textarea}
          />

          <button className={styles.button}>Submit</button>
        </form>
      </div>

    </section>
    <Footer2/>
            </>
  );
}
