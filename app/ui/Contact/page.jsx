"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Footer2 from "@/components/Footer2";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (res.ok && data.success) {
        alert("Message sent successfully!");
        setForm({ email: "", contact: "", message: "" });
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error("Error sending contact form:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.wrapper}>
        <h1 className={styles.heading}>CONTACT</h1>

        <div className={styles.container}>
          <div className={styles.imageBox}>
            <Image
              src="/assets/contactImg.png"
              width={1200}
              height={600}
              style={{ maxWidth: "100%", height: "auto" }}
              alt="Contact"
              className={styles.image}
            />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>GET IN TOUCH</h3>

            <label className={styles.label}>EMAIL</label>
            <input
              type="email"
              className={styles.input}
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <label className={styles.label}>CONTACT NO.</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Contact no."
              value={form.contact}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  setForm({ ...form, contact: value });
                }
              }}
              required
            />

            <label className={styles.label}>COMMENT</label>
            <textarea
              className={styles.textarea}
              placeholder="Message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            <button
              className={styles.button}
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

      <Footer2 />
    </>
  );
}
