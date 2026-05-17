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
        <div className={styles.content}>
          <span className={styles.greeting}>Hi, I&#39;m</span>
          <h1 className={styles.title}>Tamilselvan</h1>
          <h2 className={styles.subtitle}>
           Backend Engineer specializing in scalable systems, AI-driven workflows, and cloud infrastructure.
          </h2>
          <p className={styles.description}>
            4+ years of experience building microservices, healthcare systems, workflow automation platforms, and AWS-powered backend architectures using Node.js, TypeScript, PostgreSQL, Docker, and Kubernetes.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="#projects" className={styles.primaryBtn}>
              View Projects <span>→</span>
            </Link>
            <a href="Tamilselvan_Software_Engineer.pdf" download className={styles.secondaryBtn}>
              <span>↓</span> Download Resume
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
