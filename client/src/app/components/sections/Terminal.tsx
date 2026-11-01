"use client";

import { useEffect, useState } from "react";
import { Moon } from "lucide-react";

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

  const [loginTime] = useState(() => {
    // أثناء الـ SSR نرجع قيمة ثابتة لتجنب Hydration Error
    if (typeof window === "undefined") {
      return "Loading...";
    }

    // يتم حساب الوقت الحقيقي في المتصفح
    return getLoginTime();
  });

  const quote =
    "Perfection may not be attainable, but if we chase perfection, we can catch excellence.";

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayedText(quote.slice(0, index + 1));
      index++;

      if (index >= quote.length) {
        clearInterval(typing);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [quote]);

  return (
    <section className="terminal-section">
      <div className="terminal-grid" />
      <div className="terminal-glow" />

      <div className="terminal-window">
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
            <span className="terminal-user">user@machine:~$</span>{" "}
            <span className="terminal-fortune">
              fortune MohammadTelfah.fortune
            </span>
          </p>

          <p className="terminal-output">
            <span className="terminal-bot">bot@gpt:~$</span>{" "}
            {displayedText}
            <span className="terminal-cursor" />
          </p>
        </div>
      </div>
    </section>
  );
}