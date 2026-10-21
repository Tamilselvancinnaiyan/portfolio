"use client";

import React from "react";

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
  return (
    <section id={id} className="parallax-section">
      <style>{`
        .parallax-section {
          padding: 100px 32px;
          max-width: 1440px;
          margin: 0 auto;
          color: #fff;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Updated Header Area to match Contact component structure */
        .parallax-section .header-area {
            text-align: center;
            margin-bottom: 100px;
        }

        .parallax-section .header-area h2 {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 900;
            letter-spacing: -3px;
            margin: 0;
        }

        .parallax-section .header-area span {
            color: transparent;
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.65);
        }

        /* End of Header update */

        .parallax-section .exp-container {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        .parallax-section .exp-block {
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
        }

        .parallax-section .year-side {
          font-size: clamp(5rem, 12vw, 9rem);
          font-weight: 900;
          line-height: 0.8;
          flex: 1;
          user-select: none;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          position: relative;
          transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), -webkit-text-stroke 0.5s ease;
        }

        .parallax-section .year-side::after {
          content: attr(data-year);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          color: transparent;
          -webkit-text-stroke: 1px rgba(133, 6, 6, 0.65);
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 50%,
            transparent 100%
          );
          mask-size: 200% 100%;
          mask-repeat: no-repeat;
          mask-position: -150% 0;
          transition: mask-position 0s;
          pointer-events: none;
        }

        .parallax-section .exp-block:hover .year-side {
          transform: translateX(30px) scale(1.05);
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }

        .parallax-section .exp-block:hover .year-side::after {
          animation: passingLight 2.5s linear infinite;
        }

        @keyframes passingLight {
          from { mask-position: -150% 0; }
          to { mask-position: 150% 0; }
        }

        .parallax-section .content-side {
          flex: 1.2;
        }

        .parallax-section .company-tag {
          color: var(--sky-cyan);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .parallax-section .role-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0 0 20px 0;
          letter-spacing: -1px;
        }

        .parallax-section .points-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 14px;
        }

        .parallax-section .points-list li {
          color: #909296ff;
          line-height: 1.6;
          font-size: 1rem;
          margin: 0;
          position: relative;
          padding-left: 24px;
        }

        .parallax-section .points-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          width: 12px;
          height: 1px;
          background: var(--sky-cyan);
        }

        .parallax-section .duration-text {
          font-family: monospace;
          color: #a0a7b3;
          font-weight: 600;
          letter-spacing: 0;
          text-transform: none;
        }

        .parallax-section .reverse {
          flex-direction: row-reverse;
          text-align: right;
        }

        .parallax-section .reverse .company-tag {
          justify-content: flex-end;
        }

        .parallax-section .reverse:hover .year-side {
          transform: translateX(-30px) scale(1.05);
        }

        .parallax-section .reverse .points-list li {
          padding-left: 0;
          padding-right: 24px;
        }

        .parallax-section .reverse .points-list li::before {
          left: auto;
          right: 0;
        }

        @media (max-width: 600px) {
          .parallax-section { padding-inline: 20px; }
        }

        @media (max-width: 900px) {
          .parallax-section .exp-block, .parallax-section .reverse {
            flex-direction: column;
            text-align: left;
            gap: 20px;
          }
          .parallax-section .reverse .company-tag { justify-content: flex-start; }
          .parallax-section .exp-block:hover .year-side, .parallax-section .reverse:hover .year-side {
            transform: translateY(-10px);
          }
          .parallax-section .year-side { font-size: 5rem; }
          .parallax-section .role-title { font-size: 1.8rem; }
          .parallax-section .reverse .points-list li { padding-right: 0; padding-left: 24px; text-align: left; }
          .parallax-section .reverse .points-list li::before { right: auto; left: 0; }
        }
      `}</style>

      <div className="header-area">
        <h2>Professional <span>Experience</span></h2>
      </div>

      <div className="exp-container">
        {EXP_DATA.map((job, index) => (
          <div key={index} className={`exp-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="year-side" data-year={job.year}>{job.year}</div>

            <div className="content-side">
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
