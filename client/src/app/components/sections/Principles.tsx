import {
  Crown,
  PanelsTopLeft,
  Shapes,
  Rocket,
  BadgeCheck,
} from "lucide-react";

const principles = [
  {
    title: "Latest Tech",
    description:
      "Stay ahead with cutting-edge frameworks and libraries for a modern web experience.",
    icon: Crown,
    className: "principle-tech",
  },
  {
    title: "Responsiveness",
    description:
      "Seamless adaptation across devices for a flawless user experience everywhere.",
    icon: PanelsTopLeft,
    className: "principle-responsive",
  },
  {
    title: "Beautiful UX",
    description:
      "Aesthetic designs that blend style with usability for a polished interface.",
    icon: Shapes,
    className: "principle-ux",
  },
  {
    title: "Performance",
    description:
      "Crafting intuitive and enjoyable interactions that keep users engaged.",
    icon: Rocket,
    className: "principle-performance",
  },
  {
    title: "Beautiful UI",
    description:
      "Optimized for speed and efficiency, delivering lightning-fast digital experiences.",
    icon: BadgeCheck,
    className: "principle-ui",
  },
];

export default function Principles() {
  return (
    <section className="principles-section" id="principles">
      <div className="principles-container">
        <h2 className="principles-title">Principles</h2>

        <div className="principles-grid">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className={`principle-card ${principle.className}`}
              >
                <Icon className="principle-icon" strokeWidth={2} />

                <div className="principle-content">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}