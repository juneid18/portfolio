"use client";
import styles from "./whyHireMe.module.css";

/**
 * Why Hire Me Component
 * Addresses soft skills, collaboration, and what makes this candidate different
 * - Critical for hiring managers who need to see team fit
 */
const WhyHireMe = () => {
  const differentiators = [
    {
      title: "Ownership & Initiative",
      description: "I don't wait for instructions. When I see a problem, I propose solutions. I've independently architected and shipped features from concept to production without micromanagement.",
      example: "Built YouTube scheduling SaaS end-to-end, handling product decisions, technical architecture, and user feedback."
    },
    {
      title: "Fast Learner",
      description: "I pick up new technologies quickly because I focus on fundamentals, not frameworks. When a project needed TensorFlow, I learned it in a week and shipped a working prototype.",
      example: "Went from zero React Native knowledge to shipping a production mobile app in 3 weeks."
    },
    {
      title: "Communication & Collaboration",
      description: "I write clear code comments, document decisions, and explain technical concepts to non-technical stakeholders. I've collaborated with designers, product managers, and other developers.",
      example: "Regularly translate technical constraints into business terms for product discussions."
    },
    {
      title: "Production Mindset",
      description: "I think about edge cases, error handling, and what happens when things break. My code is written for maintainability, not just to work.",
      example: "Implemented comprehensive error handling and retry logic for API integrations, reducing production incidents by 90%."
    },
    {
      title: "Problem-Solving Approach",
      description: "I break down complex problems into smaller pieces, research solutions, and make informed decisions. I'm comfortable saying 'I don't know' and then learning it.",
      example: "When YouTube API rate limits became an issue, I researched quota management strategies and implemented a queue system."
    },
    {
      title: "Reliability",
      description: "I deliver on time, communicate blockers early, and write code that works in production, not just on my machine. I test my work before pushing.",
      example: "Maintained 99.5% uptime for scheduled uploads by implementing robust error handling and monitoring."
    }
  ];

  return (
    <section id="why-hire-me" className={styles.container} aria-labelledby="why-hire-me-heading">
      <header className={styles.header}>
        <h2 id="why-hire-me-heading">Why Hire Me?</h2>
        <p>
          Beyond technical skills—here&apos;s what makes me a strong team member and 
          someone you can trust to deliver.
        </p>
      </header>

      <div className={styles.grid}>
        {differentiators.map((item, index) => (
          <article 
            key={index} 
            className={styles.card}
            aria-labelledby={`differentiator-${index}-title`}
          >
            <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
            <h3 id={`differentiator-${index}-title`} className={styles.cardTitle}>
              {item.title}
            </h3>
            <p className={styles.cardDescription}>{item.description}</p>
            <div className={styles.example}>
              <strong>Example:</strong> {item.example}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <p className={styles.ctaText}>
          Ready to add a reliable, self-directed developer to your team?
        </p>
        <a 
          href="mailto:prof.juneidshaikh18@gmail.com?subject=Let's%20Discuss%20Opportunities"
          className={styles.ctaButton}
          aria-label="Contact me to discuss opportunities"
        >
          Let&apos;s Start a Conversation
        </a>
      </div>
    </section>
  );
};

export default WhyHireMe;

