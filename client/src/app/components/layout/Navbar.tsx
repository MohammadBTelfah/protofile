"use client";

import { useState } from "react";

export default function Navbar() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [sectionName, setSectionName] = useState("");

  const handleNavigation = (id: string, label: string) => {
    // منع الضغط المتكرر أثناء الانتقال
    if (isNavigating) return;

    // إظهار شاشة اسم القسم
    setSectionName(label.toUpperCase());
    setIsNavigating(true);

    // نترك الشاشة ظاهرة قليلًا
    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // إخفاء الشاشة بعد انتهاء الانتقال
      setTimeout(() => {
        setIsNavigating(false);
      }, 800);
    }, 600);
  };

  return (
    <>
      <nav className="floating-navbar">
        {/* Home */}
        <button
          className="navbar-home"
          onClick={() => handleNavigation("home", "Home")}
          aria-label="Go to home"
        >
          ⌂
        </button>

        <div className="navbar-links">
          <button onClick={() => handleNavigation("projects", "Projects")}>
            Projects
          </button>

          <button
            onClick={() => handleNavigation("experience", "Experience")}
          >
            Experience
          </button>

          <button
            onClick={() => handleNavigation("principles", "Principles")}
          >
            Principles
          </button>

          <button onClick={() => handleNavigation("support", "Buy Coffee")}>
            Buy Coffee
          </button>
        </div>

        {/* Contact */}
        <button
          className="navbar-talk"
          onClick={() => handleNavigation("contact", "Contact")}
        >
          Let&apos;s talk
          <span>→</span>
        </button>
      </nav>

      {/* Navigation transition */}
      {isNavigating && (
        <div className="navigation-overlay">
          <h1>{sectionName}</h1>
        </div>
      )}
    </>
  );
}