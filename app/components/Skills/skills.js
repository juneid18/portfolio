import styles from './skills.module.css';

export default function Skills() {
  return (
    <>
      <section className={styles.skillsContainer}>
      
        <div className={styles.skillsHeader}>
          <h2>Technical Expertise</h2>
          <p>A comprehensive overview of my professional skills and competencies</p>
        </div>
        
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>Frontend Development</h3>
            <ul className={styles.skillList}>
              <li>
                HTML5 & CSS3
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '95%' }}></div>
                </div>
              </li>
              <li>
                JavaScript (ES6+)
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '90%' }}></div>
                </div>
              </li>
              <li>
                React.js
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '85%' }}></div>
                </div>
              </li>
              <li>
                UI/UX Design
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '80%' }}></div>
                </div>
              </li>
              <li>
              React Native
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '60%' }}></div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Backend Development</h3>
            <ul className={styles.skillList}>
              <li>
                Node.js
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '88%' }}></div>
                </div>
              </li>
              <li>
                Python
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '85%' }}></div>
                </div>
              </li>
              <li>
                Database Design
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '92%' }}></div>
                </div>
              </li>
              <li>
                API Development
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '90%' }}></div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>DevOps & Tools</h3>
            <ul className={styles.skillList}>
              <li>
                Git & GitHub
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '95%' }}></div>
                </div>
              </li>
              <li>
                Docker
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '82%' }}></div>
                </div>
              </li>
              <li>
                CI/CD
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '88%' }}></div>
                </div>
              </li>
              <li>
                Cloud Services
                <div className={styles.proficiencyBar}>
                  <div className={styles.proficiencyLevel} style={{ width: '85%' }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.designContainer}>
          <span className={styles.line1}>.</span>
          <span className={styles.line2}>.</span>
          <span className={styles.line3}>.</span>
        </div>
      </section>
    </>
  );
}
