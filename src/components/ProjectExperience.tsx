"use client";

import React, { useState } from "react";
import styles from "./ProjectExperience.module.css";


const PROFESSIONAL_PROJECTS = [
    {
        id: "p1",
        company: "DaivTech",
        role: "Software Engineer",
        duration: "Jan 2025 — Present",
        projects: [
            {
                title: "Healthcare Booking & Scheduling Platform",
                desc: "Developed backend services for hospital appointment scheduling, availability management, and concurrent booking workflows.",
                impact: [
                    "Designed configurable appointment slots, availability rules, and booking lifecycle management.",
                    "Implemented Redis-based temporary slot reservations to manage concurrent booking requests.",
                    "Used PostgreSQL transactions to maintain booking consistency and prevent conflicting reservations."
                ],
                tech: [
                    "NestJS",
                    "TypeScript",
                    "PostgreSQL",
                    "Redis",
                    "AWS"
                ]
            },
            {
                title: "Payment Processing & Integration",
                desc: "Built payment workflows integrating Stripe and Razorpay for healthcare transactions and payment lifecycle management.",
                impact: [
                    "Integrated Stripe payment flows and Razorpay payment links for transaction processing.",
                    "Implemented webhook handlers to process payment success, failure, and refund events.",
                    "Managed payment status synchronization between external providers and internal booking records."
                ],
                tech: [
                    "NestJS",
                    "Stripe",
                    "Razorpay",
                    "Webhooks",
                    "PostgreSQL"
                ]
            },
            {
                title: "Healthcare Interoperability",
                desc: "Implemented healthcare data exchange workflows to support communication between clinical systems.",
                impact: [
                    "Developed HL7 integrations for exchanging patient and clinical information.",
                    "Worked with HL7 message segments including MSH, PID, ORC, and OBR.",
                    "Built backend workflows for processing and integrating clinical data with application services."
                ],
                tech: [
                    "NestJS",
                    "HL7",
                    "TypeScript",
                    "PostgreSQL"
                ]
            },
            {
                title: "Email & Communication Integrations",
                desc: "Integrated Google and Microsoft communication services into healthcare application workflows.",
                impact: [
                    "Implemented Gmail API and Microsoft Graph API integrations using OAuth 2.0.",
                    "Developed authentication and token management workflows for connected accounts.",
                    "Built backend services for accessing email and supporting application communication workflows."
                ],
                tech: [
                    "NestJS",
                    "Gmail API",
                    "Microsoft Graph",
                    "OAuth 2.0"
                ]
            },
            {
                title: "Multi-Tenant Investor Relations Platform",
                desc: "Developed a SaaS platform supporting tenant-specific investor relations pages and cloud-hosted public websites.",
                impact: [
                    "Built tenant-specific public pages using Next.js and backend services.",
                    "Implemented subdomain-based routing for individual tenant websites.",
                    "Configured AWS-based hosting and routing using EC2, Route 53, CloudFront, and Nginx."
                ],
                tech: [
                    "Next.js",
                    "NestJS",
                    "PostgreSQL",
                    "AWS",
                    "Nginx"
                ]
            }
        ]
    },
    {
        id: "p2",
        company: "Iamneo",
        role: "Software Engineer",
        duration: "May 2022 — Jan 2025",
        projects: [
            {
                title: "Automated Code Evaluation Platform",
                desc: "Developed and maintained backend functionality for an online coding assessment platform with containerized code execution.",
                impact: [
                    "Built Docker-isolated environments supporting multiple programming languages and development stacks.",
                    "Investigated and resolved critical code evaluation failures to improve execution reliability.",
                    "Deployed and maintained containerized services using Kubernetes and cloud infrastructure."
                ],
                tech: [
                    "Docker",
                    "Kubernetes",
                    "Python",
                    "Java",
                    "Cloud"
                ]
            },
            {
                title: "Online Assessment Security",
                desc: "Developed monitoring and authentication capabilities for online examination workflows.",
                impact: [
                    "Built a Chrome extension for real-time examination activity monitoring.",
                    "Implemented face liveness detection and facial recognition integrations.",
                    "Supported authentication and monitoring workflows for online assessments."
                ],
                tech: [
                    "JavaScript",
                    "Chrome Extensions",
                    "Face Recognition",
                    "REST APIs"
                ]
            }
        ]
    }
];
export default function ProjectExperience({ id }: { id: string }) {
    const [expanded, setExpanded] = useState<Record<string, number | null>>({ p1: 0, p2: 0 });

    return (
        <section id={id} className={styles.section}>
            <header className={styles.heading}>
                <p className={styles.eyebrow}>Selected engineering work</p>
                <h2>Project <span>Experience</span></h2>
            </header>
            {PROFESSIONAL_PROJECTS.map((company) => (
                <div key={company.id} className={styles.company}>
                    <header className={styles.companyHeader}>
                        <h3>{company.company}</h3>
                        <p>{company.role}<span>{company.duration}</span></p>
                    </header>
                    <div className={styles.timeline}>
                        {company.projects.map((project, index) => {
                            const isExpanded = expanded[company.id] === index;
                            const panelId = `${id}-${company.id}-${index}`;
                            return (
                                <article key={project.title} className={`${styles.project} ${isExpanded ? styles.expanded : ''}`}>
                                    <h4>
                                        <button
                                            type="button"
                                            className={styles.projectButton}
                                            aria-expanded={isExpanded}
                                            aria-controls={panelId}
                                            id={`${panelId}-heading`}
                                            onClick={() => setExpanded((previous) => ({ ...previous, [company.id]: isExpanded ? null : index }))}
                                        >
                                            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                                            <span className={styles.title}>{project.title}</span>
                                            <span className={styles.preview}>{project.tech.slice(0, 3).join(' / ')}</span>
                                            <span className={styles.toggle} aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                                        </button>
                                    </h4>
                                    <div className={styles.reveal} inert={!isExpanded} aria-hidden={!isExpanded}>
                                        <div className={styles.revealInner}>
                                            <div id={panelId} role="region" aria-labelledby={`${panelId}-heading`} className={styles.details}>
                                                <div>
                                                    <p className={styles.label}>Overview</p>
                                                    <p className={styles.description}>{project.desc}</p>
                                                    <div className={styles.tools}>
                                                        {project.tech.map((tool) => <span key={tool}>{tool}</span>)}
                                                    </div>
                                                </div>
                                                <div className={styles.contributions}>
                                                    <p className={styles.label}>Key contributions</p>
                                                    <ul>{project.impact.map((point) => <li key={point}>{point}</li>)}</ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            ))}
        </section>
    );
}
