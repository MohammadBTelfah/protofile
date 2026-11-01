"use client";

import { useState, type CSSProperties } from "react";
import { ArrowUpRight, Box, ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: 1,
    icon: "🧭",
    title: "Masar AI",
    shortDescription: "AI-powered personalized learning roadmaps.",
    description:
      "Masar AI helps you create a complete learning roadmap for any topic. For example, if you want to learn Python, you can describe your goal and receive a structured learning path to help guide your journey.",
    link: "https://github.com/MohammadBTelfah/Masar-AI",
  },
  {
    id: 2,
    icon: "🏠",
    title: "Damanah",
    shortDescription: "AI-powered construction analysis platform.",
    description:
      "My graduation project. Damanah allows users to upload a house plan, then uses AI to analyze the file and estimate the quantities needed for the house. It can also help users find suitable contractors to work with.",
    link: "https://github.com/MohammadBTelfah/Damanah",
  },
  {
    id: 3,
    icon: "🍽️",
    title: "Restaurant Website",
    shortDescription: "A modern website designed for a restaurant.",
    description:
      "A restaurant website project designed to present the restaurant, its menu, and its services in a clean and user-friendly way.",
    link: "https://github.com/MohammadBTelfah/resturant-website",
  },
  {
    id: 4,
    icon: "📢",
    title: "Majara",
    shortDescription: "A platform for posting and discovering service requests.",
    description:
      "Majara is a platform where users can post requests for services. For example, if you need someone to design a website, you can publish your request and connect with people who can help.",
    link: "https://github.com/MohammadBTelfah/Majara",
  },
  {
    id: 5,
    icon: "🛍️",
    title: "Talafha Store",
    shortDescription: "An e-commerce website.",
    description:
      "Talafha Store is an e-commerce project focused on creating a modern online shopping experience with products and a clean user interface.",
    link: "https://github.com/MohammadBTelfah/TalafhaStore",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-grid-background" />

      <div className="projects-content">
        <div className="projects-heading">
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className="project-card"
              onClick={() => setSelectedProject(project)}
              style={{ "--card-index": index } as CSSProperties}
            >
              <div className="project-number">
                {String(project.id).padStart(2, "0")}
              </div>

              <div className="project-icon">{project.icon}</div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>

              <div className="project-arrow">
                <ArrowUpRight size={19} strokeWidth={1.8} />
              </div>
            </button>
          ))}
        </div>

        <a
          href="https://github.com/MohammadBTelfah"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-github-link"
        >
          Visit GitHub to see More
          <ExternalLink size={20} strokeWidth={1.8} />
        </a>
      </div>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="project-modal-handle" />

            <div className="project-modal-store">
              <Box size={26} strokeWidth={1.8} />
              <span>Mohammad Telfah&apos;s Projects</span>

              <button
                type="button"
                className="project-modal-close"
                onClick={closeModal}
                aria-label="Close project details"
              >
                <X size={28} strokeWidth={1.8} />
              </button>
            </div>

            <div className="project-modal-project">
              <div className="project-modal-icon">
                {selectedProject.icon}
              </div>

              <div>
                <h3 id="project-modal-title">
                  {selectedProject.title}
                </h3>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-url"
                >
                  github.com/MohammadBTelfah
                </a>
              </div>
            </div>

            <div className="project-modal-preview">
              <div className="project-preview-placeholder">
                <span>{selectedProject.icon}</span>
                <p>{selectedProject.title}</p>
              </div>
            </div>

            <p className="project-modal-description">
              {selectedProject.description}
            </p>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-visit"
            >
              <ExternalLink size={19} />
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
}