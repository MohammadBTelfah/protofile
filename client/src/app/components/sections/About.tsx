
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

          <div className="about-tags" aria-hidden="true">
            <span className="about-tag tag-performance">
              🚀 Performance
            </span>

            <span className="about-tag tag-mobile">
              📱 Mobile Development
            </span>

            <span className="about-tag tag-ui">
              ✦ UI / UX
            </span>

            <span className="about-tag tag-code">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-monitor-cog preview-icon"><path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/></svg> Clean Code
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}