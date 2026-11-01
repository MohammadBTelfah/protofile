
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

import LiveClock from "../ui/LiveClock";
import SpotifyPlayer from "../ui/SpotifyPlayer";

const socials = [
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/m7mdte",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/MohammadBTelfah",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-telfah-3ba1a7261/",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/962772572078",
  },
];

export default function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="hello">
        <span className="hello-hand">👋</span>

        <span className="hello-text">
          <span className="hello-default">Hello!</span>
          <span className="hello-hover">Helloooooooo!</span>
        </span>
      </a>

      <div className="header-right">
        <div className="social-links">
          <SpotifyPlayer />

          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className={`social-link social-${label.toLowerCase()}`}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={25} />

              <svg
                className="social-hover-line"
                viewBox="0 0 40 26"
                aria-hidden="true"
              >
                <path d="M2 13 C8 24 24 25 30 14 C36 3 23 0 16 5 C8 11 15 20 24 17 C30 16 35 11 38 7" />
              </svg>
            </a>
          ))}
        </div>

        <LiveClock />
      </div>
    </header>
  );
}
