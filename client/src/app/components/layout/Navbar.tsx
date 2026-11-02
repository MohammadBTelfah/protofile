
"use client";

import { useEffect, useState } from "react";

const EMAIL = "Telfahmohammad2003@gmail.com";

export default function Navbar() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [sectionName, setSectionName] = useState("");

  const [isTalkOpen, setIsTalkOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Navigation
  const handleNavigation = (id: string, label: string) => {
    if (isNavigating) return;

    const section = document.getElementById(id);

    if (!section) return;

    setSectionName(label.toUpperCase());
    setIsNavigating(true);

    requestAnimationFrame(() => {
      setIsLeaving(true);
    });

    setTimeout(() => {
      section.scrollIntoView({
        behavior: "instant",
        block: "start",
      });

      setTimeout(() => {
        setIsLeaving(false);
      }, 150);

      setTimeout(() => {
        setIsNavigating(false);
      }, 850);
    }, 550);
  };

  // Close modal using Escape
  useEffect(() => {
    if (!isTalkOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsTalkOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isTalkOpen]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isTalkOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isTalkOpen]);

  // Copy email
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Fallback for browsers without Clipboard API
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";

      document.body.appendChild(textarea);
      textarea.select();

      const copied = document.execCommand("copy");
      textarea.remove();

      if (!copied) {
        window.prompt("Copy this email:", EMAIL);
        return;
      }
    }

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <>
      <nav className="floating-navbar">
        <button
          type="button"
          className="navbar-home"
          onClick={() => handleNavigation("home", "Home")}
          aria-label="Go to home"
        >
          ⌂
        </button>

        <div className="navbar-links">
          <button
            type="button"
            onClick={() => handleNavigation("projects", "Projects")}
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => handleNavigation("experience", "Experience")}
          >
            Experience
          </button>

          <button
            type="button"
            onClick={() => handleNavigation("principles", "Principles")}
          >
            Principles
          </button>

          <button
            type="button"
            onClick={() => handleNavigation("support", "Buy Coffee")}
          >
            Buy Coffee
          </button>
        </div>

        {/* Let's Talk */}
        <button
          type="button"
          className="navbar-talk"
          onClick={() => {
            setIsCopied(false);
            setIsTalkOpen(true);
          }}
        >
          Let&apos;s talk
          <span>→</span>
        </button>
      </nav>

      {/* Navigation Overlay */}
      {isNavigating && (
        <div
          className={`navigation-overlay ${
            isLeaving ? "is-covering" : "is-revealing"
          }`}
          aria-hidden="true"
        >
          <div className="navigation-overlay-content">
            <span className="navigation-eyebrow">
              NAVIGATING TO
            </span>

            <h1>{sectionName}</h1>
          </div>
        </div>
      )}

      {/* Let's Talk Modal */}
      {isTalkOpen && (
        <div
          className="talk-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsTalkOpen(false);
            }
          }}
          onTouchStart={(event) => {
            if (event.target === event.currentTarget) {
              setIsTalkOpen(false);
            }
          }}
        >
          <div
            className="talk-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="talk-modal-title"
          >
            <div className="talk-modal-handle" />

            <button
              type="button"
              className="talk-modal-close"
              onClick={() => setIsTalkOpen(false)}
              aria-label="Close dialog"
            >
              ×
            </button>

            <div className="talk-modal-content">
              <h2 id="talk-modal-title">Let&apos;s Talk</h2>

              <p className="talk-modal-description">
                Please use emailing only regarding services, works,
                potential offers or professional talk. Kindly use
                other social media handles for other queries or
                chatting. Thanks!
              </p>

              <div className="talk-modal-actions">
                <a
                  className="talk-email-button"
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    "Professional Inquiry"
                  )}`}
                >
                  Yes, I&apos;ll send an email
                </a>

                <button
                  type="button"
                  className={`talk-copy-button ${
                    isCopied ? "is-copied" : ""
                  }`}
                  onClick={handleCopyEmail}
                >
                  {isCopied ? (
                    <>
                      <span>✓</span> Email copied!
                    </>
                  ) : (
                    "Let me copy the email"
                  )}
                </button>
              </div>

              <p className="talk-modal-footer">
                I also don&apos;t like mailto links but I had to use it
                here to avoid spam bots. Sorry!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
