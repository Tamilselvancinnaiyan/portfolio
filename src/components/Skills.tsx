"use client";

import React from "react";

const startDate = new Date("2022-05-01");
const now = new Date();
const months =
  (now.getFullYear() - startDate.getFullYear()) * 12 +
  (now.getMonth() - startDate.getMonth());
const experience = (months / 12).toFixed(1);
export default function Skills({ id }: { id: string }) {
  return (
    <section id={id} className="skills-section">
      <style>{`
        .skills-section {
          padding: 100px 32px 40px;
          max-width: 1440px;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          color: #fff;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Unified Stroke Header */
        .skills-section .header-area {
            text-align: center;
            margin-bottom: 32px;
        }

        .skills-section .header-area h2 {
            font-size: clamp(2rem, 4vw, 3.5rem);
            font-weight: 900;
            letter-spacing: -3px;
            margin: 0;
        }

        .skills-section .header-area span {
            color: transparent;
            -webkit-text-stroke: 1px var(--sky-cyan);
        }

        /* Bento Grid with Obsidian Glass */
        .skills-section .bento-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(200px, 0.65fr) minmax(0, 1.2fr);
          grid-template-areas:
            "backend experience data"
            "cloud experience automation"
            "frontend experience automation";
          grid-template-rows: auto auto auto;
          gap: 1.5rem;
          margin-top: 0;
        }

        .skills-section .bento-item {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: clamp(24px, 2.2vw, 32px);
          min-width: 0;
          position: relative;
          overflow-wrap: break-word;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skills-section .bento-item:hover {
          border-color: var(--sky-cyan);
          background: rgba(0, 0, 0, 0.6);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        /* Give long descriptions wide cards and the experience stat a vertical anchor. */
        .skills-section .bento-item:nth-child(1) { grid-area: backend; }
        .skills-section .bento-item:nth-child(2) { grid-area: experience; }
        .skills-section .bento-item:nth-child(3) { grid-area: data; }
        .skills-section .bento-item:nth-child(4) { grid-area: cloud; }
        .skills-section .bento-item:nth-child(5) { grid-area: automation; }
        .skills-section .bento-item:nth-child(6) { grid-area: frontend; }
        .skills-section .bento-item:nth-child(5) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .skills-section .stat-number { white-space: nowrap; }

        .skills-section .skill-chip {
          display: inline-block;
          white-space: normal;
          max-width: 100%;
          background: rgba(255, 255, 255, 0.03);
          padding: 7px 12px;
          border-radius: 12px;
          margin: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: 0.3s;
        }

        .skills-section .bento-item:hover .skill-chip {
            background: rgba(255, 255, 255, 0.06);
            color: #fff;
            border-color: rgba(255, 255, 255, 0.1);
        }

        .skills-section .stat-number {
          font-size: 4rem;
          font-weight: 900;
          display: block;
          line-height: 1;
          margin-bottom: 0.5rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skills-section .description {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .skills-section h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        @media (max-width: 1100px) {
          .skills-section .bento-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-areas:
              "backend experience"
              "cloud experience"
              "data automation"
              "frontend automation";
          }
          .skills-section .large { grid-column: auto; }
        }

        @media (max-width: 600px) {
          .skills-section { padding: 48px 20px 100px; }
          .skills-section .header-area h2 { letter-spacing: -1.5px; }
          .skills-section .bento-grid {
            grid-template-columns: 1fr;
            grid-template-areas: "backend" "experience" "data" "cloud" "automation" "frontend";
          }
          .skills-section .header-area { margin-bottom: 28px; }
        }
      `}</style>

      <div className="header-area">
        <h2>Capabilities <span>& Tools</span></h2>
      </div>

      <div className="bento-grid">
        {/* Box 1: Core Backend */}
        <div className="bento-item large">
          <h3>Backend Engineering </h3>
          <div className="skill-chip">Node.js</div>
          <div className="skill-chip">NestJS</div>
          <div className="skill-chip">Python</div>
          <div className="skill-chip">TypeScript</div>
          <div className="skill-chip">Java</div>
          <p className="description" style={{ marginTop: '20px' }}>
            Designing scalable REST APIs, microservices, and backend systems with a focus on performance, reliability, security, and maintainable architecture
          </p>
        </div>

        {/* Box 2: Experience Stat */}
        <div className="bento-item tall" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <span className="stat-number">{experience}+</span>
          <p style={{ fontWeight: '800', fontSize: '1.1rem', letterSpacing: '1px' }}>YEARS EXP</p>
          <p className="description">Software Engineer</p>
        </div>

        {/* Box 3: Databases */}
        <div className="bento-item">
          <h3>Data & Caching</h3>
          <div className="skill-chip">PostgreSQL</div>
          <div className="skill-chip">NoSQL</div>
          <div className="skill-chip">Redis</div>
          <div className="skill-chip">MongoDB</div>
          <p className="description" style={{ marginTop: '20px' }}>Designing relational schemas, optimizing SQL queries, managing transactions, and implementing caching and concurrency control for high-performance applications.</p>
        </div>

        {/* Box 4: DevOps & Cloud */}
        <div className="bento-item large">
          <h3>Cloud & Infrastructure</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '12px' }}>
            <span style={{ color: '#4285F4', fontWeight: '700' }}>GCP</span>
            <span style={{ color: '#FF9900', fontWeight: '700' }}>AWS</span>
            <span style={{ color: '#2496ED', fontWeight: '700' }}>Docker</span>
            <span style={{ color: '#d7e60cff', fontWeight: '700' }}>CI/CD</span>
          </div>
          <p className="description">Building and deploying containerized applications, managing cloud infrastructure, and implementing reliable deployment pipelines for production environments.</p>
        </div>

        {/* Box 5: Automation */}
        <div className="bento-item">
          <h3>AI & Automation</h3>
          <div className="skill-chip">LLM APIs</div>
          <div className="skill-chip">RAG</div>
          <div className="skill-chip">Vector Search</div>
          <div className="skill-chip">Background Jobs</div>
          <div className="skill-chip">Event-Driven Systems</div>
          <div className="skill-chip">Workflow Automation</div>
          <p className="description" style={{ marginTop: '20px' }}>Building AI-powered backend workflows, integrating language models, and designing asynchronous processing pipelines for document ingestion and content generation.</p>
        </div>

        {/* Box 6: Frontend */}
        <div className="bento-item">
          <h3>Frontend</h3>
          <div className="skill-chip">Next.js</div>
          <div className="skill-chip">Angular</div>
          <p className="description" style={{ marginTop: '20px' }}>Building responsive web interfaces and integrating frontend applications with backend APIs and authentication services.</p>
        </div>
      </div>
    </section>
  );
}
