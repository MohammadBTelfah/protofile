"use client";

import { useState } from "react";
import type { PointerEvent } from "react";

const techPaths = [
  {
    id: "left",
    d: "M -100 100 Q 300 520 650 280",
    text: "Redux — React Query — Zustand — Next.js — Node.js — Express.js — Prisma — Circle CI — ",
    duration: "32s",
  },
  {
    id: "center",
    d: "M 250 480 Q 750 -100 1250 480",
    text: "GitHub Actions — Git — NPM — Yarn — JavaScript — TypeScript — Java — HTML — CSS — ",
    duration: "40s",
  },
  {
    id: "right",
    d: "M 850 280 Q 1200 520 1600 100",
    text: "Next.js — React.js — Svelte — Tailwind CSS — Framer Motion — Bootstrap — Material UI — ",
    duration: "36s",
  },
];

function JordanFlag() {
  return (
    <div className="jordan-flag-wrap" aria-label="علم الأردن">
      <svg
        className="jordan-flag"
        viewBox="0 0 120 80"
        role="img"
        aria-label="Jordanian flag"
      >
        <defs>
          <clipPath id="flag-shape">
            <path d="M2 3 Q60 -2 118 8 L118 72 Q60 78 2 77 Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#flag-shape)">
          <rect width="120" height="27" fill="#000000" />
          <rect y="27" width="120" height="27" fill="#ffffff" />
          <rect y="54" width="120" height="26" fill="#007A3D" />
          <path d="M2 3 L53 40 L2 77 Z" fill="#CE1126" />
          <polygon
            points="17,31 19,36 24,36 20,39 22,44 17,41 13,44 14,39 10,36 15,36"
            fill="#ffffff"
          />
        </g>
      </svg>
    </div>
  );
}

function HoverLetters({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((letter, index) => (
        <span key={`${letter}-${index}`} className="hero-letter">
          {letter}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  function handleNameMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    // نحسب موقع الماوس بالنسبة لمركز الاسم
    const mouseX =
      (e.clientX - rect.left) / rect.width - 0.5;

    const mouseY =
      (e.clientY - rect.top) / rect.height - 0.5;

    // دوران خفيف بحد أقصى 7 درجات
    setRotation({
      x: -mouseY * 14,
      y: mouseX * 14,
    });
  }

  function resetName() {
    setRotation({ x: 0, y: 0 });
  }

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <svg
          className="hero-orbit-text"
          viewBox="0 0 1500 700"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            {techPaths.map((item) => (
              <path key={item.id} id={`orbit-${item.id}`} d={item.d} />
            ))}
          </defs>

          {techPaths.map((item) => (
            <text key={item.id} className="orbit-label">
              <textPath href={`#orbit-${item.id}`}>
                {item.text}
                <animate
                  attributeName="startOffset"
                  from="0%"
                  to="-100%"
                  dur={item.duration}
                  repeatCount="indefinite"
                />
              </textPath>
            </text>
          ))}
        </svg>
      </div>

      <div className="hero-center">
        <div className="hero-sound">
          <JordanFlag />
        </div>

        <div
          className="hero-name-group"
          onPointerMove={handleNameMove}
          onPointerLeave={resetName}
          style={{
            transform: `
              perspective(1000px)
              rotateX(${rotation.x}deg)
              rotateY(${rotation.y}deg)
            `,
          }}
        >
          <h1 className="hero-name" aria-label="Mohammad">
            <HoverLetters text="MOHAMMAD" />
          </h1>

          <h2 className="hero-surname" aria-label="Telfah">
            <HoverLetters text="TELFAH" />
          </h2>
        </div>
      </div>
    </section>
  );
}