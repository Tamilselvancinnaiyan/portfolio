"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.scrollY + 200; // Offset for navbar

            let current = "";

            // Explicit check for top of page to default to Home
            if (window.scrollY < 100) {
                current = "home";
            } else {
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        current = section.getAttribute("id") || "";
                    }
                });
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const closeOutside = (event: PointerEvent) => {
            if (event.target instanceof Node && !navRef.current?.contains(event.target)) setIsOpen(false);
        };
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        document.addEventListener('pointerdown', closeOutside);
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('pointerdown', closeOutside);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [isOpen]);

    return (
        <nav ref={navRef} className={styles.navbar} aria-label="Main navigation">
            <div className={styles.navContainer}>
                <ul className={styles.links}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`${styles.link} ${activeSection === item.href.substring(1) ? styles.active : ""}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    ref={menuButtonRef}
                    type="button"
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    <span aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
                    <span>{isOpen ? "Close" : "Menu"}</span>
                </button>
            </div>

            <div id="mobile-navigation" inert={!isOpen} aria-hidden={!isOpen} className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`${styles.mobileLink} ${activeSection === item.href.substring(1) ? styles.active : ""}`}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
