import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/MohammadBTelfah",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mohammad-telfah-3ba1a7261/",
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    link: "https://x.com/m7mdte",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/m0_tf/?hl=en",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/962772572078",
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <p>Connect with me on:</p>

        <div className="footer-socials">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`social-link social-${social.name.toLowerCase()}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-marquee">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>Thanks for visiting my portfolio!</span>
            <span>|</span>
            <span>Thanks for visiting my portfolio!</span>
            <span>|</span>
            <span>Thanks for visiting my portfolio!</span>
            <span>|</span>
            <span>Thanks for visiting my portfolio!</span>
            <span>|</span>
          </div>

          <div className="marquee-content" aria-hidden="true">
            <span>Thanks for visiting my portfolio!</span>
            <span>|</span>
            <span>Thanks for visiting my portfolio!</span>
            <span>|</span>
            <span>Thanks for visiting my portfolio!</span>
            <span>|</span>
            <span>Thanks for visiting my portfolio!</span>
            <span>|</span>
          </div>
        </div>
      </div>

      <div className="footer-marquee footer-marquee-reverse">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>Code &amp; Crafted with ❤️ by Mohammad Telfah</span>
            <span>|</span>
            <span>Code &amp; Crafted with ❤️ by Mohammad Telfah</span>
            <span>|</span>
            <span>Code &amp; Crafted with ❤️ by Mohammad Telfah</span>
            <span>|</span>
          </div>

          <div className="marquee-content" aria-hidden="true">
            <span>Code &amp; Crafted with ❤️ by Mohammad Telfah</span>
            <span>|</span>
            <span>Code &amp; Crafted with ❤️ by Mohammad Telfah</span>
            <span>|</span>
            <span>Code &amp; Crafted with ❤️ by Mohammad Telfah</span>
            <span>|</span>
          </div>
        </div>
      </div>
    </footer>
  );
}