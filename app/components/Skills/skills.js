import styles from "./skills.module.css";

export default function Skills() {
  return (
    <section
      className={styles.skillsContainer}
      aria-labelledby="skills-heading"
    >
      <header className={styles.skillsHeader}>
        <h2 id="skills-heading">Technical Skills</h2>
        <p>
          Tools and technologies I&apos;ve used to design, build, and ship real
          applications — not just tutorials.
        </p>
      </header>

      <div className={styles.skillsGrid}>
        {/* Frontend */}
        <article className={styles.skillCategory}>
          <h3>Frontend Engineering</h3>
          <ul className={styles.skillList}>
            <li>
              <strong>React & Next.js</strong>
              <p>
                Built SSR and client-rendered apps using App Router, dynamic
                routes, authentication flows, and API integrations.
              </p>
            </li>
            <li>
              <strong>JavaScript (ES6+)</strong>
              <p>
                Daily use of async patterns, state management, modular code, and
                performance-conscious logic.
              </p>
            </li>
            <li>
              <strong>Styling & UI</strong>
              <p>
                CSS Modules, responsive layouts, animations, and component-based
                design systems with accessibility in mind.
              </p>
            </li>
            <li>
              <strong>React Native</strong>
              <p>
                Cross-platform mobile apps with shared logic, API consumption,
                and native features.
              </p>
            </li>
          </ul>
        </article>

        {/* Backend */}
        <article className={styles.skillCategory}>
          <h3>Backend & APIs</h3>
          <ul className={styles.skillList}>
            <li>
              <strong>Node.js & Express</strong>
              <p>
                Designed REST APIs, handled authentication, background tasks,
                validation, and error handling.
              </p>
            </li>
            <li>
              <strong>Databases (MongoDB)</strong>
              <p>
                Data modeling, schema design, indexing, and aggregations for
                real-world use cases.
              </p>
            </li>
            <li>
              <strong>Authentication & Security</strong>
              <p>
                JWT-based auth, OAuth flows, role-based access control, and basic
                security best practices.
              </p>
            </li>
            <li>
              <strong>Python</strong>
              <p>
                Automation scripts, API integrations, and backend utilities for
                data processing.
              </p>
            </li>
          </ul>
        </article>

        {/* Infrastructure */}
        <article className={styles.skillCategory}>
          <h3>Infrastructure & Workflow</h3>
          <ul className={styles.skillList}>
            <li>
              <strong>Git & Collaboration</strong>
              <p>
                Feature branching, meaningful commits, pull requests, and code
                reviews.
              </p>
            </li>
            <li>
              <strong>Docker & Deployment</strong>
              <p>
                Containerized apps, environment configuration, and deployment to
                cloud platforms.
              </p>
            </li>
            <li>
              <strong>Cloud Services</strong>
              <p>
                Experience with AWS and Firebase for hosting, storage, and
                serverless features.
              </p>
            </li>
            <li>
              <strong>Third-Party APIs</strong>
              <p>
                Integrated external services including payments, media APIs,
                and AI-based tools.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
