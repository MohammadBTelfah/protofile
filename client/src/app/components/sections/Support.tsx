"use client";

import type { CSSProperties } from "react";

const supporters = [
  {
    id: 1,
    name: "ernest",
    coffees: 2,
    time: "5m ago",
    message:
      "Really nice project the readme files, congratulations and keep the amazing work",
    emoji: "💬",
    className: "supporter-pink",
  },
  {
    id: 2,
    name: "kunalstwt",
    coffees: 5,
    time: "10m ago",
    message: "Good to see you making amazing products mate.",
    emoji: "👤",
    className: "supporter-yellow",
  },
  {
    id: 3,
    name: "Alex",
    coffees: 25,
    time: "15m ago",
    message: "Thanks for this awesome tool.",
    emoji: "💸",
    className: "supporter-green",
  },
];

export default function Support() {
  return (
    <section className="support-section" id="support">
      <div className="support-content">
        <div className="support-heading">
          <span className="support-label">SUPPORT</span>

          <h2>Enjoying my content?</h2>

          <p>
            Consider buying me a coffee to support my work! Your support helps
            me continue building, learning, and creating better projects.
          </p>

          <a
            href="#"
            className="coffee-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="coffee-icon">☕</span>
            <span>Buy me a coffee</span>
          </a>
        </div>

        <div className="supporters-list">
          {supporters.map((supporter, index) => (
            <div
              className="supporter-card"
              key={supporter.id}
              style={
                {
                  "--supporter-index": index,
                } as CSSProperties
              }
            >
              <div
                className={`supporter-avatar ${supporter.className}`}
              >
                {supporter.emoji}
              </div>

              <div className="supporter-info">
                <div className="supporter-meta">
                  <strong>
                    {supporter.name} bought {supporter.coffees}{" "}
                    {supporter.coffees === 1 ? "coffee" : "coffees"}
                  </strong>

                  <span>•</span>

                  <time>{supporter.time}</time>
                </div>

                <p>{supporter.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}