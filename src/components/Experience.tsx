"use client";

import React, { useEffect, useRef, useState } from "react";

const EXP_DATA = [
  {
    year: "2025",
    company: "DaivTech, Coimbatore",
    role: "Software Engineer",
    duration: "Jan 2025 — Present",
    points: [
      "Engineered scalable backend services using NestJS, TypeScript, PostgreSQL, Redis, and AWS for healthcare and SaaS platforms.",
      "Built appointment scheduling and booking workflows using Redis-based slot reservations and PostgreSQL transactions to handle concurrent bookings.",
      "Implemented HL7 integrations for standardized patient and clinical data exchange between healthcare systems.",
      "Integrated Stripe and Razorpay payment workflows, including payment processing, webhook handling, and transaction management.",
      "Developed secure communication integrations using Gmail API, Microsoft Graph API, and OAuth 2.0.",
      "Architected a multi-tenant SaaS platform with PostgreSQL, implementing role-based access control (RBAC) and row-level security (RLS).",
      "Built a multi-tenant Investor Relations platform with tenant-specific public pages, subdomain routing, and AWS-based deployments."
    ]
  },
  {
    year: "2022",
    company: "Iamneo, Coimbatore",
    role: "Software Engineer",
    duration: "May 2022 — Jan 2025",
    points: [
      "Developed backend services for an online coding assessment and automated evaluation platform.",
      "Built Docker-isolated execution environments supporting multiple programming languages and development stacks.",
      "Debugged and resolved critical evaluation engine failures, improving the reliability of containerized code execution.",
      "Deployed and maintained containerized services using Kubernetes and cloud infrastructure.",
      "Developed face liveness detection and facial recognition integrations for authentication and assessment security.",
      "Built custom Chrome extensions for real-time exam integrity monitoring, including screen recording and tab restriction enforcement."
    ]
  }
];

export default function Experience({ id }: { id: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const yearHues = useRef<Record<string, number>>({});
  const [yearColors, setYearColors] = useState<Record<string, React.CSSProperties>>({});
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const card = target.closest('.content-side');
      if (!card || !sectionRef.current?.contains(card)) {
        setSelectedYear(null);
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  const toggleYear = (year: string) => {
    const previousHue = yearHues.current[year] ?? (year === '2025' ? 265 : 35);
    const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
    const hue = (previousHue + 45 + (randomValue % 271)) % 360;
    yearHues.current[year] = hue;
    const colors = {
      '--year-color': `hsl(${hue} 90% 74%)`,
      '--year-glow': `hsl(${hue} 95% 65% / 0.65)`,
      '--year-highlight': `hsl(${hue} 100% 92%)`,
    } as React.CSSProperties;
    setYearColors((previous) => ({ ...previous, [year]: colors }));
    setSelectedYear((previous) => previous === year ? null : year);
  };

  return (
    <section ref={sectionRef} id={id} className="parallax-section">
      <style>{`
        .parallax-section {
          padding: 100px 32px 60px;
          max-width: 1440px;
          margin: 0 auto;
          color: #fff;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .parallax-section .header-area { text-align: center; margin-bottom: 40px; }
        .parallax-section .header-area h2 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -2px;
          margin: 0;
        }
        .parallax-section .header-area span {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.65);
        }
        .parallax-section .exp-container { display: grid; gap: 24px; }
        .parallax-section .exp-block {
          display: grid;
          grid-template-columns: minmax(220px, 0.8fr) minmax(0, 2.2fr);
          gap: clamp(24px, 3vw, 44px);
        }
        .parallax-section .year-side {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 220px;
          font-size: clamp(4rem, 7vw, 7rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -5px;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
        .parallax-section .content-side {
          min-width: 0;
          padding: 28px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }
        .parallax-section .company-tag {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 8px 16px;
          color: var(--sky-cyan);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }
        .parallax-section .duration-text {
          font-family: monospace;
          color: #a0a7b3;
          letter-spacing: 0;
          text-transform: none;
        }
        .parallax-section .role-title {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 800;
          margin: 0 0 20px;
          letter-spacing: -0.5px;
        }
        .parallax-section .points-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }
        .parallax-section .points-list li {
          color: #b8bec8;
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
          position: relative;
          padding-left: 20px;
          overflow-wrap: break-word;
        }
        .parallax-section .points-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--sky-cyan);
        }
        .parallax-section .reverse {
          grid-template-columns: minmax(0, 2.2fr) minmax(220px, 0.8fr);
        }
        .parallax-section .reverse .year-side { grid-column: 2; grid-row: 1; }
        .parallax-section .reverse .content-side { grid-column: 1; grid-row: 1;  }
        .parallax-section .year-position {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: top 3.6s ease-in-out, transform 3.6s ease-in-out;
        }
        .parallax-section .year-raised .year-position {
          top: 0;
          transform: translateY(0);
        }
        .parallax-section .content-side {
          position: relative;
          transform-origin: center;
          transition: transform 0.8s ease, border-color 0.6s ease, box-shadow 0.6s ease;
        }
        .parallax-section .year-raised .content-side {
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.025);
          z-index: 1;
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.4);
        }
        .parallax-section .content-side[role="button"] { cursor: pointer; }
        .parallax-section .content-side:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.8);
          outline-offset: 4px;
        }
        .parallax-section .exp-block {
          --year-color: #b58aff;
          --year-glow: rgba(163, 104, 255, 0.65);
          --year-highlight: #f0dfff;
        }
        .parallax-section .reverse {
          --year-color: #ffbd69;
          --year-glow: rgba(255, 161, 65, 0.65);
          --year-highlight: #fff1cc;
        }
        .parallax-section .year-number {
          -webkit-text-stroke: 1.5px var(--year-color);
          filter: drop-shadow(0 0 8px var(--year-glow));
          position: relative;
          display: inline-block;
          animation: experienceYearFloat 7s ease-in-out infinite;
          transition: filter 0.5s ease;
        }
        .parallax-section .reverse .year-number { animation-delay: -3.5s; }
        .parallax-section .year-number::after {
          content: attr(data-year);
          position: absolute;
          inset: 0;
          color: transparent;
          color: var(--year-highlight);
          -webkit-text-stroke: 2px var(--year-highlight);
          text-shadow: 0 0 16px var(--year-glow);
          mask-image: linear-gradient(115deg, transparent 20%, black 43%, black 57%, transparent 80%);
          mask-size: 300% 100%;
          mask-repeat: no-repeat;
          animation: experienceYearShimmer 6s ease-in-out infinite;
          pointer-events: none;
        }
        .parallax-section .reverse .year-number::after { animation-delay: -3s; }
        .parallax-section .exp-block:hover .year-number,
        .parallax-section .year-raised .year-number {
          filter: drop-shadow(0 0 12px var(--year-glow)) drop-shadow(0 0 28px var(--year-glow));
        }
        @keyframes experienceYearFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes experienceYearShimmer {
          0%, 15% { mask-position: 150% 0; opacity: 0; }
          25%, 65% { opacity: 1; }
          80%, 100% { mask-position: -50% 0; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .parallax-section .year-position,
          .parallax-section .content-side { transition: none; }
          .parallax-section .year-number,
          .parallax-section .year-number::after { animation: none; transition: none; }
          .parallax-section .year-number::after { opacity: 0; }
        }
        @media (max-width: 900px) {
          .parallax-section .exp-block { grid-template-columns: 1fr; }
          .parallax-section .exp-block .year-side,
          .parallax-section .exp-block .content-side { grid-column: auto; grid-row: auto; }
          .parallax-section .year-side { min-height: 140px; font-size: 5rem; }
          .parallax-section .exp-block .content-side { padding: 24px; }
        }
        @media (max-width: 600px) {
          .parallax-section { padding: 60px 20px; }
          .parallax-section .header-area h2 { letter-spacing: -1px; }
          .parallax-section .exp-block { gap: 24px; }
        }
      `}</style>

      <div className="header-area">
        <h2>Professional <span>Experience</span></h2>
      </div>

      <div className="exp-container">
        {EXP_DATA.map((job, index) => (
          <div key={job.year} style={yearColors[job.year]} className={`exp-block ${index % 2 !== 0 ? 'reverse' : ''} ${(selectedYear === job.year) ? 'year-raised' : ''}`}>
            <div className="year-side" aria-hidden="true">
              <span className="year-position">
                <span className="year-number" data-year={job.year}>{job.year}</span>
              </span>
            </div>

            <div
              className="content-side"
              role="button"
              tabIndex={0}
              aria-pressed={Boolean((selectedYear === job.year))}
              aria-label={`${job.company}: ${(selectedYear === job.year) ? 'lower' : 'raise'} year`}
              onClick={() => toggleYear(job.year)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  toggleYear(job.year);
                }
              }}
            >
              <div className="company-tag">
                {job.company}
                <span className="duration-text">• {job.duration}</span>
              </div>
              <h3 className="role-title">{job.role}</h3>
              <ul className="points-list">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
