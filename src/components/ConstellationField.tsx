import type { CSSProperties } from "react";
import styles from "./ConstellationField.module.css";

type Props = { seed: number };

// Stable, section-specific geometry keeps server and browser output identical.
export default function ConstellationField({ seed }: Props) {
    const random = (index: number) => {
        const mixed = Math.imul(seed ^ (index + 1), 0x45d9f3b);
        const hashed = Math.imul(mixed ^ (mixed >>> 16), 0x45d9f3b);
        return ((hashed ^ (hashed >>> 16)) >>> 0) / 4294967296;
    };

    return (
        <div className={styles.field} aria-hidden="true">
            {Array.from({ length: 3 }, (_, cluster) => {
                const count = 5 + Math.floor(random(cluster * 100) * 4);
                const points = Array.from({ length: count }, (_, index) => ({
                    x: 25 + (index / (count - 1)) * 250,
                    y: 20 + random(cluster * 100 + index * 3 + 1) * 180,
                    radius: 1.3 + random(cluster * 100 + index * 3 + 2) * 1.2,
                }));
                const edges = points.slice(1).map((point, index) => {
                    const parent = points[Math.floor(random(cluster * 100 + index * 3 + 3) * (index + 1))];
                    return `M${parent.x},${parent.y} L${point.x},${point.y}`;
                });
                const angle = -35 + random(cluster * 100 + 40) * 70;
                return (
                    <svg
                        key={cluster}
                        className={`${styles.cluster} ${styles[`placement${cluster}`]}`}
                        viewBox="0 0 300 220"
                        focusable="false"
                        style={{ '--angle': `${angle}deg`, '--delay': `${-random(cluster * 100 + 41) * 6}s` } as CSSProperties}
                    >
                        <path d={edges.join(' ')} />
                        {points.map((point, index) => (
                            <circle key={index} cx={point.x} cy={point.y} r={point.radius} />
                        ))}
                    </svg>
                );
            })}
        </div>
    );
}
