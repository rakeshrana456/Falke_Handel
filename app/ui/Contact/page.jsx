"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Footer2 from "@/components/Footer2";
import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  // const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    if (!window.grecaptcha) {
      alert("Captcha not loaded");
      setLoading(false);
      return;
    }

    // ✅ v3 token
    const captchaToken = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action: "contact_form" } 
    );

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        message: form.message,
        name: form.contact,
        captchaToken, 
      }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      alert("Message sent successfully!");
      setForm({ email: "", contact: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};


  return (
    <> <section className={styles.wrapper}> 
    <h1 className={styles.heading}>CONTACT</h1>
     <div className={styles.container}> 
      <div className={styles.imageBox}> 
        <Image src="/assets/contactImg.png" width={1200} height={600} style={{ maxWidth: "100%", height: "auto" }} alt="Contact" className={styles.image} /> 
        </div> 
        <form className={styles.form} onSubmit={handleSubmit}> 
          <h3 className={styles.formTitle}>GET IN TOUCH</h3> 
          <label className={styles.label}>EMAIL</label> 

          <input type="email"
           className={styles.input} 
           placeholder="Enter your email" 
           value={form.email} 
           onChange={(e) => setForm({ ...form, email: e.target.value })} 
           required />


           <label className={styles.label}>CONTACT NO.</label>
            <input type="text"
             className={styles.input} 
            placeholder="Contact no." 
            value={form.contact}
             onChange={(e) => { const value = e.target.value;
               if (/^\d{0,10}$/.test(value)) { setForm({ ...form, contact: value }); } }} required />
                <label className={styles.label}>COMMENT</label> 
                <textarea className={styles.textarea} 
                placeholder="Message..." value={form.message}
                 onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required />
                  {/* <ReCAPTCHA
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  onChange={(token) => setCaptchaToken(token)}
/>  */}

<button className={styles.button} type="submit" disabled={loading} > {loading ? "Sending..." : "Submit"} </button> </form> </div> </section> <Footer2 /> </>
  );
}
