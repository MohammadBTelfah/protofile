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
              💻 Clean Code
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}