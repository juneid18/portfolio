"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "animate.css";

import AboutMe from "./components/AboutMe/aboutMe";
import Service from "./components/ServiceSection/service";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Blog from "./components/Blog/blog";
import CaseStudies from "./components/CaseStudies/caseStudies";
import WhyHireMe from "./components/WhyHireMe/whyHireMe";
import VisitCounter from "./components/VisitCounter/VisitCounter";

import { FaLongArrowAltUp, FaGithub, FaLinkedin } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#aboutme" },
  { label: "Skills", href: "#skills" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Why Hire Me", href: "#why-hire-me" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#blog" },
];

const CONTACT_LINK =
  "mailto:prof.juneidshaikh18@gmail.com?subject=Let's%20Talk%20About%20Opportunities";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  useEffect(() => {
    if (!isNavOpen) return;

    const handleOutsideClick = (e) => {
      if (!e.target.closest(`.${styles.sidenav}`)) {
        closeNav();
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") closeNav();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isNavOpen]);

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

      {/* ===== HEADER + HERO ===== */}
      <header className={styles.container} id="home">
        {/* Mobile Nav */}
        <nav className={styles.mobilenvacon} aria-label="Mobile navigation">
          <div
            className={`${styles.sidenav} ${isNavOpen ? styles.open : ""}`}
            aria-hidden={!isNavOpen}
          >
            <button
              className={styles.closeBtn}
              onClick={closeNav}
              aria-label="Close menu"
            >
              &times;
            </button>

            {NAV_ITEMS.map(({ label, href }) => (
              <a key={href} href={href} onClick={closeNav}>
                {label}
              </a>
            ))}

            <a href={CONTACT_LINK} className={styles.mobileCta}>
              Contact Me
            </a>
          </div>
        </nav>

        {/* Desktop Nav */}
        <nav className={styles.navigation_container} aria-label="Main navigation">
          <div className={styles.navbar}>
            <a className={styles.navLogo} href="#home">
              JS
            </a>

            <ul className={styles.navMenu}>
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a href={CONTACT_LINK} className={styles.navCta}>
              Contact
            </a>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setIsNavOpen(true)}
              aria-expanded={isNavOpen}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className={styles.sub_container}>
          <h2 className={styles.sub_container_h2}>Juneid Shaikh</h2>

          <div className={styles.availabilityBadge}>
            <span className={styles.badgeDot} />
            Open to Work • Immediate Joiner • India
          </div>

          <h1 className={styles.sub_container_h1}>
            Full-Stack Developer Who Ships Production-Ready Code
          </h1>

          <p className={styles.hero_description}>
            I build scalable applications using React, Node.js, MongoDB, and
            modern deployment workflows.
          </p>

          <div className={styles.socialProof}>
            <a href="https://github.com/juneid18" target="_blank">
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/juneid-shaikh/"
              target="_blank"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <span className={styles.timezone}>IST (UTC+5:30)</span>
          </div>

          <div className={styles.cta_container}>
            <a href="#projects" className={styles.cta_primary}>
              View Projects
            </a>
            <a
              href="/assets/resume.docx"
              download
              className={styles.cta_secondary}
            >
              Download Resume
            </a>
            <a href={CONTACT_LINK} className={styles.cta_tertiary}>
              Let’s Talk
            </a>
          </div>

          <Image
            src="/assets/dot.png"
            className={styles.leftDot}
            width={400}
            height={300}
            alt=""
            aria-hidden
          />
          <Image
            src="/assets/dot.png"
            className={styles.rightDot}
            width={400}
            height={300}
            alt=""
            aria-hidden
          />
        </section>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main id="main-content">
        <section id="aboutme">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="case-studies">
          <CaseStudies />
        </section>

        <section id="why-hire-me">
          <WhyHireMe />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="blog">
          <Blog />
        </section>
      </main>

      <VisitCounter />

      {/* Scroll to top */}
      <a href="#home" className={styles.scrollTop} aria-label="Scroll to top">
        <FaLongArrowAltUp />
      </a>

      <footer className={styles.footer}>
        © All Rights Reserved By Juneid Shaikh
      </footer>
    </>
  );
}