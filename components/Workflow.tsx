import React from 'react';
import styles from './Workflow.module.css';

export default function Workflow() {
    const steps = [
        {
            title: "Understanding Your Requirements",
            text: "Every project begins with a conversation. We carefully understand your product requirements specifications, compliance needs, packaging preferences, delivery timelines, and branding objectives. This ensures that your products are not only manufactured to the highest standards but also fully aligned with your brand identity from the very beginning."
        },
        {
            title: "Sample Development & Approval",
            text: "Before anything goes into production, we prepare samples for your review. We coordinate closely with our partner manufacturing units to develop prototypes that match your exact expectations. Only after you approve the sample do we green-light the production process."
        },
        {
            title: "Sourcing of Raw Materials",
            text: "We source raw materials exclusively from audited and trusted suppliers within our network. We work closely with vendor units to ensure:",
            list: ["Quality", "Consistency", "Compliance with EU standards"]
        },
        {
            title: "Production & In-Process Quality Control",
            text: "The production process is coordinated and supervised by our quality assurance team. At every stage, in-process quality checks are carried out to ensure consistent output and adherence to international standards."
        },
        {
            title: "Final Quality Assurance",
            text: "Once production is complete, every batch goes through a comprehensive inspection process to verify:",
            list: ["Dimensional & functional checks", "Quality, Finishing, and Packaging Inspection", "Compliance requirements"]
        }
    ];
    const icons=[
        {
            id:"1",
            path:"/assets/workflow4.png"
        },
         {
            id:"2",
            path:"/assets/workflow img 2.png"
        },
         {
            id:"3",
            path:"/assets/workflow img 3.png"
        },
         {
            id:"4",
            path:"/assets/workflow img 4.png"
        },
         {
            id:"5",
            path:"/assets/workflow img 8.png"
        },

    ]

    return (
        <section className={styles.section}>
            <div className={styles.leftContent}>
                <span className={styles.label}>OUR WORKFLOW</span>
                <h2 className={styles.headline}>
                    The service we offer is <span className={styles.highlight}>specifically</span> designed to meet your needs.
                </h2>
                <p className={styles.description}>
                    Our export process is structured to give you clarity from the first discussion to final delivery. Each stage—requirements, samples, sourcing, production, quality checks, packaging, and logistics—is managed with precision to ensure consistent results and smooth execution.
                </p>
            </div>

            <div className={styles.rightContent}>
  {steps.map((step, index) => (
    <div key={index} className={styles.card}>
      
      <div className={styles.cardIcon}>
        <img  className={styles.img} src={icons[index].path} alt={`Step ${index + 1}`} />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{step.title}</h3>
        <p className={styles.cardText}>{step.text}</p>

        {step.list && (
          <ul className={styles.list}>
            {step.list.map((item, i) => (
              <li key={i} className={styles.listItem}>
                <span className={styles.dot}></span> {item}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  ))}
</div>

        </section>
    );
}
