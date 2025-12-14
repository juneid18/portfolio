"use client";
import styles from "./caseStudies.module.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";

/**
 * Case Studies Component
 * Converts top projects into detailed case studies showing problem-solving approach,
 * technical decisions, and measurable outcomes.
 */
const CaseStudies = () => {
  // Case study data - in production, this could come from CMS or API
  const caseStudies = [
    {
      id: 1,
      title: "Automated YouTube Scheduling SaaS",
      problem: "Content creators needed a way to schedule and automate YouTube uploads without manual intervention, reducing time spent on repetitive tasks.",
      responsibility: "Sole developer responsible for full-stack architecture, API integrations, authentication, and deployment infrastructure.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "YouTube Data API", "OAuth 2.0"],
      techChoices: [
        "Node.js backend for handling YouTube API rate limits and webhook processing",
        "MongoDB for flexible scheduling data and user preferences",
        "OAuth 2.0 for secure YouTube API access without storing credentials",
        "React for real-time scheduling interface with optimistic UI updates"
      ],
      challenges: [
        "Managing YouTube API quota limits across multiple users",
        "Handling timezone conversions for global scheduling",
        "Implementing reliable webhook system for upload status updates",
        "Ensuring data persistence during API failures"
      ],
      outcome: "Reduced manual upload time by 80% for users, supporting 100+ scheduled videos per user with 99.5% success rate.",
      githubUrl: "https://github.com/juneid18",
      liveUrl: null,
    },
    {
      id: 2,
      title: "AI-Based Fridge Scanner Application",
      problem: "Users struggled to track food inventory and expiration dates, leading to food waste and unnecessary grocery purchases.",
      responsibility: "Led development of mobile-first application with computer vision integration, real-time inventory management, and notification system.",
      techStack: ["React Native", "Python", "TensorFlow", "Firebase", "Cloud Vision API"],
      techChoices: [
        "React Native for cross-platform mobile deployment (iOS/Android)",
        "TensorFlow for on-device image recognition to reduce API costs",
        "Firebase for real-time database sync and push notifications",
        "Cloud Vision API as fallback for complex image scenarios"
      ],
      challenges: [
        "Optimizing image processing for mobile device performance",
        "Handling varying lighting conditions in fridge photos",
        "Creating intuitive UI for inventory management",
        "Implementing reliable expiration date tracking and alerts"
      ],
      outcome: "Enabled users to reduce food waste by 40% on average, with 85% user retention after first month.",
      githubUrl: "https://github.com/juneid18",
      liveUrl: null,
    }
  ];

  return (
    <section id="case-studies" className={styles.container} aria-labelledby="case-studies-heading">
      <header className={styles.header}>
        <h2 id="case-studies-heading">Case Studies</h2>
        <p>
          Real projects with real constraints. Here&apos;s how I approach problems, 
          make technical decisions, and deliver results.
        </p>
      </header>

      <div className={styles.caseStudiesList}>
        {caseStudies.map((study, index) => (
          <article 
            key={study.id} 
            className={styles.caseStudy}
            aria-labelledby={`case-study-${study.id}-title`}
          >
            <div className={styles.caseStudyHeader}>
              <span className={styles.caseNumber}>{String(index + 1).padStart(2, '0')}</span>
              <h3 id={`case-study-${study.id}-title`}>{study.title}</h3>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Problem</h4>
                <p className={styles.sectionText}>{study.problem}</p>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>My Responsibility</h4>
                <p className={styles.sectionText}>{study.responsibility}</p>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Tech Stack</h4>
                <ul className={styles.techList} role="list">
                  {study.techStack.map((tech, idx) => (
                    <li key={idx} className={styles.techItem}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Technical Decisions</h4>
                <ul className={styles.decisionList} role="list">
                  {study.techChoices.map((choice, idx) => (
                    <li key={idx} className={styles.decisionItem}>
                      <span className={styles.bullet}>→</span>
                      <span>{choice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Challenges Faced</h4>
                <ul className={styles.challengeList} role="list">
                  {study.challenges.map((challenge, idx) => (
                    <li key={idx} className={styles.challengeItem}>
                      <span className={styles.bullet}>•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Outcome</h4>
                <p className={styles.outcome}>{study.outcome}</p>
              </div>

              {(study.githubUrl || study.liveUrl) && (
                <div className={styles.projectLinks}>
                  {study.githubUrl && (
                    <a 
                      href={study.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`View ${study.title} source code on GitHub`}
                    >
                      <FiGithub /> View Code
                    </a>
                  )}
                  {study.liveUrl && (
                    <a 
                      href={study.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`View ${study.title} live demo`}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

