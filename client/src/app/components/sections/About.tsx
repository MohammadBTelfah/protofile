
"use client";

import {
  Gauge,
  Smartphone,
  PanelsTopLeft,
  Code2,
} from "lucide-react";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <p className="about-intro">
          <span className="about-wave">👋</span>
          Hey, I&apos;m Mohammad Telfah, building web and mobile experiences
          and always learning more...
        </p>

        <h2 className="about-title">
          Full-Stack Developer focused on building modern digital experiences,
        </h2>

        <div className="about-description-wrapper">
          <p className="about-description">
            specializing in creating responsive, user-friendly web and mobile
            applications that prioritize clean code, performance, and great
            user experiences.
          </p>

          <div className="about-tags" aria-label="Development skills">
            <span className="about-tag tag-performance">
              <span className="about-tag-icon">
                <Gauge size={16} />
              </span>
              Performance
            </span>

            <span className="about-tag tag-mobile">
              <span className="about-tag-icon">
                <Smartphone size={16} />
              </span>
              Mobile Development
            </span>

            <span className="about-tag tag-ui">
              <span className="about-tag-icon">
                <PanelsTopLeft size={16} />
              </span>
              UI / UX
            </span>

            <span className="about-tag tag-code">
              <span className="about-tag-icon">
                <Code2 size={16} />
              </span>
              Clean Code
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
