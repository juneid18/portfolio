"use client";
import styles from "./aboutMe.module.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <div className={styles.skillsHeader}>
        <h2 id="about-heading">About Me</h2>
        <p>
          A glimpse into my background, passion, and the journey that has shaped
          me both personally and professionally.
        </p>
      </div>
      <div className={styles.about_container}>
        <div className={styles.designContainer}>
          <span className={styles.line1}>.</span>
          <span className={styles.line2}>.</span>
          <span className={styles.line3}>.</span>
        </div>
        <div className={styles.about_container_left}>
          <b>Full Name: </b>
          <span>Juneid Mansur Shaikh</span>
          <br />
          <b>Phone: </b>
          <span>+91 95031 70450</span>
          <br />
          <b>Email: </b>
          <span>prof.juneidshaikh18@gmail.com</span>
          <br />
          <b>Address: </b>
          <span>Satara, Maharashtra, India</span>
          <br />
          <br />
          <a
            className={styles.resumebtn}
            href="/assets/resume.docx"
            download
            aria-label="Download my resume"
          >
            Download My Resume
          </a>
        </div>
        <div className={styles.about_container_right}>
          <h2>Hello There!</h2>
          <p>
            I&apos;m a full-stack developer who builds products with real users
            and real constraints — not just classroom tutorials. I focus on
            solving problems end-to-end: clean UI, solid backend logic, reliable
            infrastructure, and smooth deployment.
          </p>

          <p>
            I&apos;ve shipped projects like an automated YouTube scheduling
            SaaS, an AI-based fridge scanner, a full-stack blogging system with
            authentication, and a real-time chat platform. Each project forced
            me to think like an engineer — handling edge cases, making
            architecture decisions, optimizing performance, and keeping the
            system stable when things go wrong.
          </p>

          <p>
            I care about writing clean, predictable code that future me
            doesn&apos;t hate, and I&apos;m constantly improving how I design
            systems, review code, and break down complex tasks. I&apos;m comfortable
            learning whatever a problem demands — React, Node.js, MongoDB,
            authentication flows, background jobs, cloud storage, or automation
            tools.
          </p>

          <p>
            Right now, I&apos;m looking for a role where I can take ownership,
            contribute to a real product from day one, and grow alongside people
            who take engineering seriously. If you&apos;re looking for someone who
            works hard, learns fast, and actually delivers, then we should talk.
          </p>
          <a
            href="https://www.linkedin.com/in/juneid-shaikh/"
            className={styles.socialbtn}
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Juneidshaikh18?t=4w1-K7AXflxO848dM-5pqg&s=09"
            className={styles.socialbtn}
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/juneid18"
            className={styles.socialbtn}
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
