"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Layers,
  Award,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "SDK",
    companyName: "SDK Solutions",
    title: "MERN Full-Stack Course",
    description:
      "A comprehensive 212-hour program covering the MERN stack and full-stack web development.",
    date: "16 Oct 2024 – 14 Jul 2025",
    detail: "212 Hours",
    logo: "/images/sdk-logo.png",
    type: "Certified",
    icon: "clock",
    theme: "sdk",
  },
  {
    id: 2,
    company: "The Hope International",
    companyName: "The Hope International",
    title: "Flutter Development Course",
    description:
      "A complete course focused on building cross-platform mobile applications using Flutter.",
    date: "Completed in 2023",
    detail: "Mobile Development (Flutter)",
    logo: "/images/hope-logo.png",
    type: "Completed",
    icon: "layers",
    theme: "hope",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === experiences.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-heading">Experience</h2>

        <div className="experience-slider-wrapper">
          <button
            className="experience-nav experience-nav-left"
            onClick={goToPrevious}
            aria-label="Previous experience"
          >
            <ArrowLeft size={30} />
          </button>

          <div className="experience-slider">
            <div
              className="experience-track"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {experiences.map((experience) => (
                <div className="experience-slide" key={experience.id}>
                  <article
                    className={`experience-card ${experience.theme}`}
                  >
                    {/* الخلفية: الشعار */}
                    <div className="experience-watermark">
                      <img
                        src={experience.logo}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>

                    {/* المحتوى */}
                    <div className="experience-card-content">
                      <div className="experience-company">
                        <img
                          src={experience.logo}
                          alt={`${experience.companyName} logo`}
                          className="experience-logo"
                        />

                        <div className="experience-company-divider" />

                        <span>{experience.companyName}</span>
                      </div>

                      <div className="experience-main">
                        <h3>{experience.title}</h3>

                        <p>{experience.description}</p>
                      </div>

                      <div className="experience-footer">
                        <div className="experience-meta">
                          <CalendarDays size={25} />
                          <span>{experience.date}</span>
                        </div>

                        <div className="experience-meta">
                          {experience.icon === "clock" ? (
                            <Clock size={25} />
                          ) : (
                            <Layers size={25} />
                          )}

                          <span>{experience.detail}</span>
                        </div>

                        <div className="experience-badge">
                          <Award size={23} />
                          <span>{experience.type}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="experience-nav experience-nav-right"
            onClick={goToNext}
            aria-label="Next experience"
          >
            <ArrowRight size={30} />
          </button>
        </div>

        {/* نقاط التنقل */}
        <div className="experience-dots">
          {experiences.map((experience, index) => (
            <button
              key={experience.id}
              className={`experience-dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}