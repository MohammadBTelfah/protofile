
"use client";

import { useEffect, useRef, useState } from "react";
import { Moon } from "lucide-react";

const quote =
  "Perfection may not be attainable, but if we chase perfection, we can catch excellence.";

const getLoginTime = () => {
  const now = new Date();

  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return `${formattedDate} ${formattedTime}`;
};

export default function Terminal() {
  const [displayedText, setDisplayedText] = useState("");
  const [loginTime, setLoginTime] = useState("Loading...");
  const [hasEntered, setHasEntered] = useState(false);

  const terminalRef = useRef(null);

  // تحديث وقت الدخول بعد تحميل الصفحة
  useEffect(() => {
    setLoginTime(getLoginTime());
  }, []);

  // مراقبة ظهور التيرمنال على الشاشة
  useEffect(() => {
    const terminal = terminalRef.current;

    if (!terminal) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(terminal);

    return () => observer.disconnect();
  }, []);

  // بدء الكتابة عند الوصول للتيرمنال
  useEffect(() => {
    if (!hasEntered) return;

    let index = 0;

    const typing = setInterval(() => {
      index++;

      setDisplayedText(quote.slice(0, index));

      if (index >= quote.length) {
        clearInterval(typing);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [hasEntered]);

  return (
    <section className="terminal-section">
      <div className="terminal-grid" />
      <div className="terminal-glow" />

      <div className="terminal-window" ref={terminalRef}>
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
          </div>

          <span className="terminal-title">Terminal</span>

          <Moon size={18} className="terminal-moon" />
        </div>

        <div className="terminal-body">
          <p className="terminal-login">
            Last login: {loginTime} on website
          </p>

          <p className="terminal-command">
            <span className="terminal-user">
              user@machine:~$
            </span>{" "}
            <span className="terminal-fortune">
              fortune MohammadTelfah.fortune
            </span>
          </p>

          <p className="terminal-output">
            <span className="terminal-bot">
              bot@gpt:~$
            </span>{" "}
            {displayedText}

            {hasEntered && displayedText.length < quote.length && (
              <span className="terminal-cursor" />
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
