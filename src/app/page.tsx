import Link from "next/link";
import styles from "./page.module.css";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProjectExperience from "@/components/ProjectExperience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.hero} id="home">
        {/* Background Decorative Elements */}
        <div className={styles.ambientGlow}></div>
        <div className={styles.ambientGlowTwo}></div>
        
        <div className={styles.content}>
          <span className={styles.greeting}>Hi, I&#39;m</span>
          <div className={styles.glassNameContainer}>
            <h1 className={styles.title}>Tamilselvan</h1>
          </div>
          
          <h2 className={styles.subtitle}>
            Backend Engineer crafting <span className={styles.highlight}>scalable systems</span> &amp; <span className={styles.highlight}>AI-driven workflows</span>.
          </h2>
          
          <p className={styles.description}>
            4+ years of experience building microservices, healthcare systems, workflow automation platforms, and AWS-powered architectures. Turning complex problems into elegant, highly available solutions using Node.js, TypeScript, PostgreSQL, Docker, and Kubernetes.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="#projects" className={styles.primaryBtn}>
              <span className={styles.btnText}>View Projects</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
            <a href="Tamilselvan_Software_Engineer.pdf" download className={styles.secondaryBtn}>
              <span className={styles.btnIcon}>↓</span> 
              <span className={styles.btnText}>Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      <Skills id="skills" />
      <Experience id="experience" />
      <ProjectExperience id="project-experience" />
      {/* <Projects id="projects" /> */}
      <Contact id="contact" />
    </div>
  );
}
