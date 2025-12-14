"use client";
import styles from "./page.module.css";
import "animate.css";
import AboutMe from "./components/AboutMe/aboutMe";
import Service from "./components/ServiceSection/service";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Blog from "./components/Blog/blog";
import CaseStudies from "./components/CaseStudies/caseStudies";
import WhyHireMe from "./components/WhyHireMe/whyHireMe";
import { useState, useEffect } from "react";
import { FaLongArrowAltUp, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  // Keyboard navigation support for mobile nav
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isNavOpen) {
      closeNav();
    }
  };

  // Close nav when clicking outside (accessibility improvement)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && !event.target.closest(`#${styles.mySidenav}`) && !event.target.closest(`.${styles.openBtn}`)) {
        closeNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isNavOpen]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className={styles.container} id="home">
      {/* Mobile Side Nav */}
      <nav className={styles.mobilenvacon} aria-label="Mobile navigation">
        <div
          id={styles.mySidenav}
          className={`${styles.sidenav} ${isNavOpen ? styles.open : ""}`}
          role="navigation"
          aria-label="Mobile menu"
          aria-hidden={!isNavOpen}
        >
          <button 
            className={styles.closeBtn} 
            onClick={closeNav}
            onKeyDown={(e) => e.key === "Enter" && closeNav()}
            aria-label="Close navigation menu"
            type="button"
          >
            &times;
          </button>
          <a href="#home" onClick={closeNav} onKeyDown={(e) => e.key === "Enter" && closeNav()}>Home</a>
          <a href="#aboutme" onClick={closeNav} onKeyDown={(e) => e.key === "Enter" && closeNav()}>About</a>
          <a href="#skills" onClick={closeNav} onKeyDown={(e) => e.key === "Enter" && closeNav()}>Skills</a>
          <a href="#case-studies" onClick={closeNav} onKeyDown={(e) => e.key === "Enter" && closeNav()}>Case Studies</a>
          <a href="#why-hire-me" onClick={closeNav} onKeyDown={(e) => e.key === "Enter" && closeNav()}>Why Hire Me</a>
          <a href="#projects" onClick={closeNav} onKeyDown={(e) => e.key === "Enter" && closeNav()}>Projects</a>
          <a href="#blog" onClick={closeNav} onKeyDown={(e) => e.key === "Enter" && closeNav()}>Achievements</a>
          <a 
            href="mailto:prof.juneidshaikh18@gmail.com?subject=Let's%20Talk%20About%20Opportunities" 
            onClick={closeNav}
            style={{
              marginTop: '1rem',
              padding: '0.8rem 2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '25px',
              textAlign: 'center',
              fontWeight: '600'
            }}
          >
            Contact Me
          </a>
        </div>
      </nav>
        {/* Modern Navigation Bar */}
        <nav className={styles.navigation_container} aria-label="Main navigation">
          <div className={styles.navbar}>
            <div className={styles.navLogo}>
              <a href="#home">JS</a>
            </div>
            <ul className={styles.navMenu} role="menubar" data-open={isNavOpen}>
              <li role="none">
                <a href="#home" role="menuitem" className={styles.navLink}>Home</a>
              </li>
              <li role="none">
                <a href="#aboutme" role="menuitem" className={styles.navLink}>About</a>
              </li>
              <li role="none">
                <a href="#skills" role="menuitem" className={styles.navLink}>Skills</a>
              </li>
              <li role="none">
                <a href="#case-studies" role="menuitem" className={styles.navLink}>Case Studies</a>
              </li>
              <li role="none">
                <a href="#why-hire-me" role="menuitem" className={styles.navLink}>Why Hire Me</a>
              </li>
              <li role="none">
                <a href="#projects" role="menuitem" className={styles.navLink}>Projects</a>
              </li>
              <li role="none">
                <a href="#blog" role="menuitem" className={styles.navLink}>Achievements</a>
              </li>
            </ul>
            <a 
              href="mailto:prof.juneidshaikh18@gmail.com?subject=Let's%20Talk%20About%20Opportunities" 
              className={styles.navCta}
              aria-label="Contact me via email"
            >
              Contact
            </a>
            <button
              className={styles.mobileMenuBtn}
              onClick={openNav}
              aria-label="Open navigation menu"
              aria-expanded={isNavOpen}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        <section className={styles.sub_container} aria-labelledby="hero-heading">
          <h2 className={styles.sub_container_h2}>
            Juneid Shaikh
          </h2>
          <div className={styles.availabilityBadge}>
            <span className={styles.badgeDot}></span>
            Open to Work • Available Immediately • Remote or On-site (India)
          </div>
          <h1 id="hero-heading" className={styles.sub_container_h1}>
            Full-Stack Developer Who Ships Production-Ready Code
          </h1>
          <p className={styles.hero_description}>
            I build end-to-end applications with React, Node.js, and modern cloud infrastructure.
          </p>
          <p className={styles.hero_description}>
            <strong>For recruiters:</strong> 3+ years building production apps, strong problem-solving, ready to contribute day one.
            <strong>For founders:</strong> I handle the full stack—UI, APIs, databases, deployment, and scaling decisions.
          </p>
          <div className={styles.socialProof}>
            <a 
              href="https://github.com/juneid18" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="View my GitHub profile"
            >
              <FaGithub /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/juneid-shaikh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="View my LinkedIn profile"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <span className={styles.timezone}>📍 IST (UTC+5:30)</span>
          </div>
          <div className={styles.cta_container}>
            <a 
              href="#projects" 
              className={styles.cta_primary}
              aria-label="View my projects"
            >
              View Projects
            </a>
            <a 
              href="/assets/resume.docx" 
              download
              className={styles.cta_secondary}
              aria-label="Download my resume"
            >
              Download Resume
            </a>
            <a 
              href="mailto:prof.juneidshaikh18@gmail.com?subject=Let's%20Talk%20About%20Opportunities"
              className={styles.cta_tertiary}
              aria-label="Contact me via email"
            >
              Let's Talk
            </a>
          </div>
          <Image
            className={styles.leftDot}
            src="/assets/dot.png"
            width={400}
            height={300}
            alt=""
            aria-hidden="true"
          />
          <Image
            className={styles.rightDot}
            src="/assets/dot.png"
            width={400}
            height={300}
            alt=""
            aria-hidden="true"
          />
        </section>
        <div style={{ height: "2000px" }}>
          <a
            href="#home"
            style={{
              position: "fixed",
              bottom: "6%",
              right: "2%",
              zIndex: "9999",
              backgroundColor: "#000",
              padding: "14px",
              borderRadius: "20%",
              color: "#fff",
              fontSize: "20px",
            }}
            aria-label="Scroll to top"
          >
            <FaLongArrowAltUp aria-hidden="true" />
          </a>
        </div>
      </div>
      <main id="main-content">
        <section id="aboutme" aria-labelledby="about-heading">
          <AboutMe />
        </section>
        <section id="skills" aria-labelledby="skills-heading">
          <Skills />
        </section>
        <section id="case-studies" aria-labelledby="case-studies-heading">
          <CaseStudies />
        </section>
        <section id="why-hire-me" aria-labelledby="why-hire-me-heading">
          <WhyHireMe />
        </section>
        <section id="projects" aria-labelledby="projects-heading">
          <Projects />
        </section>
        <section id="blog" aria-labelledby="blog-heading">
          <Blog />
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© All Rights Reserved By Juneid 💗.</span>
      </footer>
    </>
  );
}
