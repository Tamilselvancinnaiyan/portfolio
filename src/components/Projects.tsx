"use client";

import React, { useState } from "react";

const PROJECT_DATA = [
    {
        id: "01",
        category: "Backend Architecture",
        title: "Evaluation Engine",
        desc: "A high-performance processing engine for real-time code evaluation, featuring automated grading logic and isolated execution environments.",
        tech: ["Node.js", "Docker", "Redis", "K8s"],
        github: "https://github.com",
        live: "https://demo.com"
    },
    {
        id: "02",
        category: "Computer Vision",
        title: "Face Liveness AI",
        desc: "Biometric security module developed to prevent identity spoofing in remote proctoring environments using real-time facial analysis.",
        tech: ["Python", "OpenCV", "Azure", "TensorFlow"],
        github: "https://github.com",
        live: "https://demo.com"
    }
];

type CaseStudy = {
    title: string;
    synopsis: string;
    url: string;
    topics?: string[];
};

// Add published studies here. The URL can be a full external URL or a local page path.
const CASE_STUDIES: CaseStudy[] = [
    {
        title: "Stock Management App",
        synopsis: "A closer look at the Stock Management App. Explore the full project write-up on Notion.",
        url: "https://app.notion.com/p/road-map-12-weeks-393732e646a68005a6b3f7255c9aef98?source=copy_link",
    },
    {
        title: "Stock Management App",
        synopsis: "A closer look at the Stock Management App. Explore the full project write-up on Notion.",
        url: "https://app.notion.com/p/road-map-12-weeks-393732e646a68005a6b3f7255c9aef98?source=copy_link",
    },
    {
        title: "Stock Management App",
        synopsis: "A closer look at the Stock Management App. Explore the full project write-up on Notion.",
        url: "https://app.notion.com/p/road-map-12-weeks-393732e646a68005a6b3f7255c9aef98?source=copy_link",
    },
    {
        title: "Stock Management App",
        synopsis: "A closer look at the Stock Management App. Explore the full project write-up on Notion.",
        url: "https://app.notion.com/p/road-map-12-weeks-393732e646a68005a6b3f7255c9aef98?source=copy_link",
    },
    {
        title: "Stock Management App",
        synopsis: "A closer look at the Stock Management App. Explore the full project write-up on Notion.",
        url: "https://app.notion.com/p/road-map-12-weeks-393732e646a68005a6b3f7255c9aef98?source=copy_link",
    },
    {
        title: "Stock Management App",
        synopsis: "A closer look at the Stock Management App. Explore the full project write-up on Notion.",
        url: "https://app.notion.com/p/road-map-12-weeks-393732e646a68005a6b3f7255c9aef98?source=copy_link",
    },
];

export default function Projects({ id }: { id: string }) {
    const [showAllStudies, setShowAllStudies] = useState(false);
    const visibleStudies = showAllStudies ? CASE_STUDIES : CASE_STUDIES.slice(0, 5);
    return (
        <section id={id} className="projects-wrapper">
            <style>{`
                .projects-wrapper {
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 100px 32px;
                    color: #fff;
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .header-centered {
                    text-align: center;
                    margin-bottom: 100px;
                }

                .header-centered h2 {
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 900;
                    letter-spacing: -3px;
                    margin: 0;
                }

                .header-centered span {
                    color: transparent;
                    -webkit-text-stroke: 1px var(--sky-cyan);
                }

                .projects-column {
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                }

                .floating-card {
                    display: grid;
                    grid-template-columns: 1fr 350px;
                    gap: 0;
                    position: relative;
                    transition: all 0.5s ease;
                }

                /* Obsidian Glass Effect (Black Glass) */
                .main-tile {
                    background: rgba(0, 0, 0, 0.4); /* Dark transparency */
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08); /* Light edge to define shape */
                    padding: 60px;
                    border-radius: 40px;
                    position: relative;
                    z-index: 2;
                    transition: all 0.4s ease;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
                }

                .floating-card:hover .main-tile {
                    border-color: var(--sky-cyan);
                    background: rgba(0, 0, 0, 0.6);
                    transform: translateY(-5px);
                }

                /* Dark Glass Side Panel */
                .side-panel {
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transform: translateX(-40px);
                    background: rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 40px;
                    margin: 40px 0;
                    z-index: 1;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .floating-card:hover .side-panel {
                    transform: translateX(20px);
                    border-color: var(--sky-cyan);
                    background: rgba(0, 0, 0, 0.5);
                }

                .p-id {
                    font-family: monospace;
                    color: var(--sky-cyan);
                    font-weight: bold;
                    display: block;
                    margin-bottom: 10px;
                }

                .p-title {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    margin-bottom: 20px;
                    letter-spacing: -2px;
                    /* Subtle glow on title */
                    text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
                }

                .p-desc {
                    color: rgba(255, 255, 255, 0.5);
                    line-height: 1.7;
                    font-size: 1.1rem;
                    max-width: 90%;
                }

                .tech-cloud {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .tech-item {
                    font-size: 0.7rem;
                    background: rgba(255, 255, 255, 0.03);
                    padding: 5px 12px;
                    border-radius: 6px;
                    color: rgba(255, 255, 255, 0.4);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border: 1px solid rgba(255, 255, 255, 0.03);
                }

                .link-group {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .link-item {
                    text-decoration: none;
                    color: #fff;
                    font-weight: 700;
                    font-size: 0.8rem;
                    letter-spacing: 1px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s;
                }

                .link-item:hover {
                    color: var(--sky-cyan);
                    text-shadow: 0 0 10px var(--accent-glow);
                }

                .arrow-icon {
                    width: 14px;
                    height: 14px;
                    transition: transform 0.3s;
                }

                .link-item:hover .arrow-icon {
                    transform: translate(3px, -3px);
                }

                .projects-wrapper .case-studies { margin-top: 72px; }
                .projects-wrapper .case-studies-heading { margin-bottom: 28px; }
                .projects-wrapper .case-studies-heading h3 { font-size: clamp(2rem, 4vw, 3.5rem); letter-spacing: -2px; font-weight: 900; }
                .projects-wrapper .case-studies-heading h3 span { color: transparent; -webkit-text-stroke: 1px var(--sky-cyan); }
                @media (max-width: 600px) { .projects-wrapper .case-studies-heading h3 { letter-spacing: -1px; } }
                .projects-wrapper .case-studies-heading p { color: #aab1bd; margin-top: 10px; line-height: 1.6; }
                .projects-wrapper .study-bento { display: flex; flex-wrap: wrap; align-items: stretch; gap: 24px; }
                .projects-wrapper .study-card {
                    flex: 1 1 300px;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 20px;
                    padding: clamp(24px, 3vw, 36px);
                    background: rgba(0,0,0,0.4);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 28px;
                    transition: transform 0.3s ease, border-color 0.3s ease;
                }
                .projects-wrapper .study-card:nth-child(5n + 1) { flex: 2 1 480px; }
                .projects-wrapper .study-card:hover { transform: translateY(-5px); border-color: rgba(137,247,254,0.5); }
                .projects-wrapper .study-index { font: 0.75rem monospace; letter-spacing: 2px; color: var(--sky-cyan); }
                .projects-wrapper .study-card h4 { font-size: clamp(1.35rem, 2vw, 1.8rem); line-height: 1.3; letter-spacing: -0.5px; overflow-wrap: anywhere; }
                .projects-wrapper .study-card:nth-child(5n + 1) h4 { font-size: clamp(1.6rem, 3vw, 2.5rem); }
                .projects-wrapper .study-synopsis { color: #b8bec8; line-height: 1.7; overflow-wrap: anywhere; }
                .projects-wrapper .study-topics { display: flex; flex-wrap: wrap; gap: 8px; }
                .projects-wrapper .study-topics span { padding: 6px 10px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #aab1bd; font-size: 0.75rem; }
                .projects-wrapper .study-link { margin-top: auto; padding-top: 12px; color: var(--sky-cyan); font-size: 0.9rem; font-weight: 600; }
                .projects-wrapper .study-link:hover { text-decoration: underline; text-underline-offset: 5px; }
                .projects-wrapper .study-more { display: block; margin: 28px auto 0; padding: 12px 24px; min-height: 48px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.18); border-radius: 50px; color: #fff; font: inherit; font-size: 0.9rem; cursor: pointer; }
                .projects-wrapper .study-more:hover { border-color: var(--sky-cyan); }
                .projects-wrapper .study-link:focus-visible, .projects-wrapper .study-more:focus-visible { outline: 2px solid var(--sky-cyan); outline-offset: 5px; }
                .projects-wrapper .study-empty { padding: 28px; color: #aab1bd; }
                @media (max-width: 1100px) {
                    .projects-wrapper .study-card, .projects-wrapper .study-card:nth-child(5n + 1) { flex: 1 1 300px; }
                }
                @media (max-width: 600px) {
                    .projects-wrapper .study-card, .projects-wrapper .study-card:nth-child(5n + 1) { flex-basis: 100%; }
                }
                @media (prefers-reduced-motion: reduce) { .projects-wrapper .study-card { transition: none; } .projects-wrapper .study-card:hover { transform: none; } }
                @media (max-width: 600px) {
                    .projects-wrapper { padding-inline: 20px; }
                }

                @media (max-width: 1000px) {
                    .floating-card { grid-template-columns: 1fr; }
                    .side-panel { transform: none; margin: -20px 20px 0 20px; }
                    .floating-card:hover .side-panel { transform: translateY(10px); }
                    .main-tile { padding: 40px; }
                }
            `}</style>

            <div className="header-centered">
                <h2>Personal <span>Projects</span></h2>
            </div>

            <div className="projects-column">
                {PROJECT_DATA.map((proj) => (
                    <div key={proj.id} className="floating-card">
                        <div className="main-tile">
                            <span className="p-id">ID {proj.id}</span>
                            <h3 className="p-title">{proj.title}</h3>
                            <p className="p-desc">{proj.desc}</p>
                        </div>

                        <div className="side-panel">
                            <div className="tech-cloud">
                                {proj.tech.map(t => (
                                    <span key={t} className="tech-item">{t}</span>
                                ))}
                            </div>

                            <div className="link-group">
                                <a
                                    href={proj.github}
                                    className="link-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    SOURCE CODE
                                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                                <a
                                    href={proj.live}
                                    className="link-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LIVE PREVIEW
                                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <section className="case-studies" aria-labelledby={`${id}-case-studies`}>
                <header className="case-studies-heading">
                    <h3 id={`${id}-case-studies`}>Case <span>Studies</span></h3>
                    <p>A closer look at the thinking behind the work.</p>
                </header>
                {CASE_STUDIES.length > 0 ? (
                    <>
                        <div className="study-bento" id={`${id}-study-list`}>
                            {visibleStudies.map((study, index) => (
                                <article key={`${study.url}-${index}`} className="study-card">
                                    <span className="study-index">CASE STUDY / {String(index + 1).padStart(2, '0')}</span>
                                    <h4>{study.title}</h4>
                                    <p className="study-synopsis">{study.synopsis}</p>
                                    {study.topics && (
                                        <div className="study-topics">
                                            {study.topics.map((topic) => <span key={topic}>{topic}</span>)}
                                        </div>
                                    )}
                                    <a href={study.url} target="_blank" rel="noopener noreferrer" className="study-link" aria-label={`Read full case study: ${study.title} (opens in a new tab)`}>
                                        Read full case study <span aria-hidden="true">↗</span>
                                    </a>
                                </article>
                            ))}
                        </div>
                        {CASE_STUDIES.length > 5 && (
                            <button type="button" className="study-more" aria-expanded={showAllStudies} aria-controls={`${id}-study-list`} onClick={() => setShowAllStudies((previous) => !previous)}>
                                {showAllStudies ? 'Show less' : `See more (${CASE_STUDIES.length - 5})`}
                            </button>
                        )}
                    </>
                ) : (
                    <p className="study-empty">Case studies coming soon.</p>
                )}
            </section>
        </section>
    );
}
