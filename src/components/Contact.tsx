import React from "react";

const CONTACT_METHODS = [
    {
        label: "Direct Mail",
        value: "tamilselvancinnaiyan@gmail.com",
        href: "mailto:tamilselvancinnaiyan@gmail.com",
        tag: "OFFICIAL",
        color: "#89f7fe", // Sky Cyan
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
    {
        label: "LinkedIn",
        value: "Tamilselvan C",
        href: "https://www.linkedin.com/in/thamizhc/",
        tag: "NETWORK",
        color: "#0077b5", // LinkedIn Blue
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
        label: "GitHub",
        value: "Tamilselvan",
        href: "https://github.com/Tamilselvancinnaiyan",
        tag: "SOURCE",
        color: "#333", // Dark Grey (so white icon is visible on hover)
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    }
];

export default function Contact({ id }: { id: string }) {
    return (
        <section id={id} className="contact-wrap">
            <style>{`
                .contact-wrap { max-width: 1440px; margin: 0 auto; padding: 100px 32px; color: #fff; }
                .contact-wrap .contact-heading { text-align: center; margin-bottom: 48px; }
                .contact-wrap .contact-heading h2 { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 900; letter-spacing: -3px; }
                .contact-wrap .contact-heading span { color: transparent; -webkit-text-stroke: 1px var(--sky-cyan); }
                .contact-wrap .main-portal {
                    position: relative;
                    isolation: isolate;
                    min-height: 260px;
                    width: 100%;
                    margin: 0 auto;
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    text-align: center;
                    background: transparent;
                    border: none;
                }
                .contact-wrap .availability { display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px; border-radius: 100px; background: rgba(0,255,128,0.08); color: #80efb7; font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; line-height: 1.5; margin: 0; max-width: 100%; }
                .contact-wrap .pulse { width: 7px; height: 7px; flex-shrink: 0; background: #80efb7; border-radius: 50%; box-shadow: 0 0 12px rgba(128,239,183,0.4); }
                .contact-wrap .portal-title { font-size: clamp(2rem, 3.2vw, 3rem); line-height: 1.15; font-weight: 800; letter-spacing: -1.5px; margin: 0; max-width: 100%; text-wrap: balance; }
                .contact-wrap .contact-description { color: #aab1bd; line-height: 1.7; font-size: 1.05rem; width: 100%; max-width: 640px; margin: 0; text-wrap: pretty; }
                .contact-wrap .contact-icons { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 4px 0 0; }
                .contact-wrap .contact-icon { width: 52px; height: 52px; display: grid; place-items: center; border: none; background: transparent; color: #dce2e9; transition: transform 0.25s ease, border-color 0.25s ease, color 0.25s ease; }
                .contact-wrap .contact-icon > span { display: flex; align-items: center; justify-content: center; }
                .contact-wrap .contact-icon svg { display: block; width: 26px; height: 26px; }
                .contact-wrap .contact-icon:hover { transform: translateY(-4px); color: var(--sky-cyan); border-color: var(--sky-cyan); }
                .contact-wrap .contact-icon:focus-visible { outline: 2px solid var(--sky-cyan); outline-offset: 5px; }
                .contact-wrap .contact-constellation {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    pointer-events: none;
                    opacity: 0.45;
                }
                .contact-wrap .contact-constellation path {
                    fill: none;
                    stroke: rgba(137,247,254,0.3);
                    stroke-width: 0.6;
                    stroke-dasharray: 4 9;
                }
                .contact-wrap .contact-constellation circle {
                    fill: #bfeeff;
                    transform-box: fill-box;
                    transform-origin: center;
                    animation: contactTwinkle 5s ease-in-out infinite alternate;
                }
                .contact-wrap .contact-constellation circle:nth-of-type(2n) { animation-delay: -2s; }
                .contact-wrap .contact-constellation circle:nth-of-type(3n) { animation-delay: -4s; }
                .contact-wrap .portal-title { animation: contactGlow 6s ease-in-out infinite; }
                .contact-wrap .contact-icon { position: relative; }
                .contact-wrap .contact-icon::before {
                    content: "";
                    position: absolute;
                    inset: -3px;
                    border: 1px dashed rgba(137,247,254,0.65);
                    border-radius: 50%;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                }
                .contact-wrap .contact-icon:hover::before,
                .contact-wrap .contact-icon:focus-visible::before {
                    opacity: 1;
                    animation: contactOrbit 12s linear infinite;
                }
                .contact-wrap .contact-icon:hover svg,
                .contact-wrap .contact-icon:focus-visible svg {
                    filter: drop-shadow(0 0 8px rgba(137,247,254,0.6));
                }
                @keyframes contactTwinkle {
                    from { opacity: 0.25; transform: scale(0.8); }
                    to { opacity: 0.9; transform: scale(1.2); }
                }
                @keyframes contactGlow {
                    0%, 100% { text-shadow: 0 0 0 transparent; }
                    50% { text-shadow: 0 0 24px rgba(137,247,254,0.22); }
                }
                @keyframes contactOrbit { to { transform: rotate(360deg); } }
                @media (max-width: 600px) {
                    .contact-wrap .contact-constellation { opacity: 0.25; }
                    .contact-wrap { padding: 60px 20px 110px; }
                    .contact-wrap .contact-heading h2 { letter-spacing: -1.5px; }
                    .contact-wrap .main-portal { min-height: 260px; padding: 28px 24px; }
                    .contact-wrap .contact-icons { gap: 16px; }
                    .contact-wrap .contact-icon { width: 56px; height: 56px; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .contact-wrap .portal-title,
                    .contact-wrap .contact-constellation circle,
                    .contact-wrap .contact-icon:hover::before,
                    .contact-wrap .contact-icon:focus-visible::before { animation: none; }
 .contact-wrap .contact-icon { transition: none; } .contact-wrap .contact-icon:hover { transform: none; } }
            `}</style>
            <header className="contact-heading"><h2>Get In <span>Touch</span></h2></header>
            <div className="main-portal">
                <svg className="contact-constellation" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
                    <path d="M40 220 L120 80 L240 130 L170 270 M960 70 L1070 130 L1150 40 M1010 270 L1070 130 L1180 240" />
                    <circle cx="40" cy="220" r="2" /><circle cx="120" cy="80" r="2.5" />
                    <circle cx="240" cy="130" r="2" /><circle cx="170" cy="270" r="2" />
                    <circle cx="960" cy="70" r="2" /><circle cx="1070" cy="130" r="3" />
                    <circle cx="1150" cy="40" r="2" /><circle cx="1010" cy="270" r="2" />
                    <circle cx="1180" cy="240" r="2.5" />
                </svg>
                <p className="availability"><span className="pulse" aria-hidden="true" />OPEN TO NEW OPPORTUNITIES</p>
                <h3 className="portal-title">Let&apos;s build something exceptional.</h3>
                <p className="contact-description">Whether you have a question or just want to say hi, my inbox is always open!</p>
                <div className="contact-icons">
                    {CONTACT_METHODS.map((method) => (
                        <a
                            key={method.label}
                            href={method.href}
                            target={method.href.startsWith('mailto:') ? undefined : '_blank'}
                            rel={method.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                            className="contact-icon"
                            aria-label={method.label === 'Direct Mail' ? `Email ${method.value}` : `${method.label} profile (opens in a new tab)`}
                            title={method.label === 'Direct Mail' ? method.value : method.label}
                        >
                            <span aria-hidden="true">{method.icon}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
