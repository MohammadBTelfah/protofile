"use client";

import { useState } from "react";

export default function Navbar() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [sectionName, setSectionName] = useState("");

  const handleNavigation = (id: string, label: string) => {
    if (isNavigating) return;

    const section = document.getElementById(id);

    // إذا لم يكن القسم موجودًا، لا نبدأ الـ animation
    if (!section) return;

    setSectionName(label.toUpperCase());
    setIsNavigating(true);

    // نبدأ حركة تغطية الشاشة
    requestAnimationFrame(() => {
      setIsLeaving(true);
    });

    // بعد اكتمال تغطية الشاشة ننتقل للقسم
    setTimeout(() => {
      section.scrollIntoView({
        behavior: "instant",
        block: "start",
      });

      // نبدأ كشف الصفحة الجديدة
      setTimeout(() => {
        setIsLeaving(false);
      }, 150);

      // إزالة الـ overlay بالكامل بعد انتهاء الحركة
      setTimeout(() => {
        setIsNavigating(false);
      }, 850);
    }, 550);
  };

  return (
    <>
      <nav className="floating-navbar">
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

        <button
          className="navbar-talk"
          onClick={() => handleNavigation("contact", "Contact")}
        >
          Let&apos;s talk
          <span>→</span>
        </button>
      </nav>

      {isNavigating && (
        <div
          className={`navigation-overlay ${
            isLeaving ? "is-covering" : "is-revealing"
          }`}
          aria-hidden="true"
        >
          <div className="navigation-overlay-content">
            <span className="navigation-eyebrow">NAVIGATING TO</span>
            <h1>{sectionName}</h1>
          </div>
        </div>
      )}
    </>
  );
}