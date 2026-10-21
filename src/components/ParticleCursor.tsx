"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticleCursor.module.css";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
};

export default function ParticleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)");
    let particles: Particle[] = [];
    let frame = 0;
    let lastTime = 0;
    let lastSpawn = 0;
    let previous: { x: number; y: number } | null = null;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = [];
      previous = null;
    };

    const draw = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000 || 0.016, 0.04);
      lastTime = time;
      context.clearRect(0, 0, width, height);
      particles = particles.filter((particle) => particle.life > 0);
      for (const particle of particles) {
        particle.life -= delta * 1.4;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.vy += 8 * delta;
        context.globalAlpha = Math.max(0, particle.life) * 0.8;
        context.fillStyle = `hsl(${particle.hue} 90% 83%)`;
        context.shadowColor = `hsl(${particle.hue} 90% 70%)`;
        context.shadowBlur = 7;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size * Math.max(0, particle.life), 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
      if (particles.length) frame = requestAnimationFrame(draw);
      else frame = 0;
    };

    const move = (event: PointerEvent) => {
      if (preference.matches || event.pointerType === "touch" || document.hidden) return;
      const time = performance.now();
      if (time - lastSpawn < 16) return;
      lastSpawn = time;
      const origin = previous ?? { x: event.clientX, y: event.clientY };
      const distance = Math.hypot(event.clientX - origin.x, event.clientY - origin.y);
      const count = Math.min(8, Math.max(2, Math.ceil(distance / 8)));
      for (let index = 0; index < count; index++) {
        const fraction = (index + 1) / count;
        particles.push({
          x: origin.x + (event.clientX - origin.x) * fraction,
          y: origin.y + (event.clientY - origin.y) * fraction,
          vx: (Math.random() - 0.5) * 28,
          vy: (Math.random() - 0.5) * 28,
          life: 0.65 + Math.random() * 0.35,
          size: 0.8 + Math.random() * 1.5,
          hue: 185 + Math.random() * 35,
        });
      }
      particles = particles.slice(-100);
      previous = { x: event.clientX, y: event.clientY };
      if (!frame) {
        lastTime = time;
        frame = requestAnimationFrame(draw);
      }
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      particles = [];
      previous = null;
      context.clearRect(0, 0, width, height);
    };
    const leave = () => { previous = null; };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", reset);
    preference.addEventListener("change", reset);
    return () => {
      reset();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", reset);
      preference.removeEventListener("change", reset);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
