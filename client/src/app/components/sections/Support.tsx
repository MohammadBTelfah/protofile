
"use client";

import type { CSSProperties } from "react";
import {
  Coffee,
  MessageCircle,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const supporters = [
  {
    id: 1,
    name: "ernest",
    coffees: 2,
    time: "5m ago",
    message:
      "Really nice project the readme files, congratulations and keep the amazing work",
    className: "supporter-pink",
  },
  {
    id: 2,
    name: "kunalstwt",
    coffees: 5,
    time: "10m ago",
    message: "Good to see you making amazing products mate.",
    className: "supporter-yellow",
  },
  {
    id: 3,
    name: "Alex",
    coffees: 25,
    time: "15m ago",
    message: "Thanks for this awesome tool.",
    className: "supporter-green",
  },
];

const coffeeUrl = "https://www.buymeacoffee.com/YOUR_USERNAME";

export default function Support() {
  return (
    <section className="support-section" id="support">
      <div className="support-content">

        {/* Support Heading */}
        <div className="support-heading">
          <span className="support-label">
            SUPPORT
          </span>

          <h2>
            Enjoying my content?
          </h2>

          <p>
            Consider buying me a coffee to support my work!
            Your support helps me continue building,
            learning, and creating better projects.
          </p>

          <a
            href={coffeeUrl}
            className="coffee-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy me a coffee"
          >
            <Coffee size={20} strokeWidth={2} />

            <span>Buy me a coffee</span>

            <ArrowUpRight
              size={17}
              className="coffee-arrow"
            />
          </a>
        </div>

        {/* Supporters */}
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
              {/* Avatar */}
              <div
                className={`supporter-avatar ${supporter.className}`}
                aria-hidden="true"
              >
                {supporter.name.charAt(0).toUpperCase()}
              </div>

              {/* Information */}
              <div className="supporter-info">
                <div className="supporter-meta">
                  <strong>
                    {supporter.name}
                  </strong>

                  <span className="supporter-bought">
                    <Coffee size={14} />
                    {supporter.coffees}{" "}
                    {supporter.coffees === 1
                      ? "coffee"
                      : "coffees"}
                  </span>

                  <span className="supporter-time">
                    {supporter.time}
                  </span>
                </div>

                <div className="supporter-message">
                  <MessageCircle
                    size={15}
                    className="supporter-message-icon"
                  />

                  <p>{supporter.message}</p>
                </div>
              </div>

              {/* Appreciation */}
              <Heart
                size={17}
                className="supporter-heart"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
