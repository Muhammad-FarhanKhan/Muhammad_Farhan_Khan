import React from 'react';
import styles from './RightContent.module.css';

const RightContent: React.FC = () => {
  return (
    <div className={styles.container}>
      
      {/* 1. ABOUT ME */}
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionHeading}>About Me</h2>
        <p className={styles.bodyText}>
          I am a passionate, self-driven <strong className={styles.highlight}>Full-Stack Developer</strong> who thrives on transforming complex concepts into high-performance digital products. My engineering journey began in 2023, teaching myself languages like C, C++, C#, and JavaScript before specializing in modern web architectures. Over the years, I have successfully executed industry-grade internships and built a strong track record as an independent freelance engineer.
        </p>
        <p className={styles.bodyText}>
          My core philosophy centers on absolute client satisfaction and operational excellence. When architecting systems, I focus deeply on <strong className={styles.highlight}>architectural scalability</strong>, <strong className={styles.highlight}>high-concurrency optimization</strong> (ensuring platforms easily handle massive multi-user traffic), and bulletproof performance. I design layouts with absolute empathy for the user—creating clean, intuitive interfaces that make interaction seamless. I am fully open to global remote roles and long-term production partnerships.
        </p>
      </section>

      {/* 2. SKILLS */}
      <section id="skills" className={styles.section}>
        <h2 className={styles.sectionHeading}>Skills</h2>
        <p className={styles.bodyText}>
          My comprehensive technical stack and engineering proficiencies across modern web development ecosystem.
        </p>
        <div className={styles.badgeContainer + " pt-2"}>
          <code>React.js</code>
          <code>Laravel</code>
          <code>PHP</code>
          <code>Python</code>
          <code>MySQL</code>
          <code>Node.js</code>
          <code>C#</code>
          <code>C / C++</code>
          <code>Full-Stack Architecture</code>
          <code>REST APIs</code>
          <code>Tailwind CSS</code>
          <code>HTML5 / CSS3</code>
          <code>SceneBuilder</code>
          <code>Cloud Hosting & Deployment</code>
        </div>
      </section>

      {/* 3. EXPERIENCE */}
      <section id="experience" className={styles.section}>
        <h2 className={styles.sectionHeading}>Experience</h2>
        <div className={styles.timelineContainer}>
          <div className="space-y-2">
            <span className={styles.timelineDate}>2023 — Present</span>
            <h3 className={styles.itemHeading}>Freelance Full-Stack Engineer — <span className={styles.companyName}>Remote / Global</span></h3>
            <p className={styles.bodyText}>
              Architecting and launching robust, end-to-end software applications for global clients. I completely own the product lifecycle—from database schemas and UI wireframes to live cloud deployment and domain configurations.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-[var(--text)] font-light pl-2 opacity-90">
              <li className="leading-relaxed">Engineered high-scale <strong className={styles.highlight}>Educational Platforms & Quiz Engines</strong> modeled after complex data systems like PakMCQs.</li>
              <li className="leading-relaxed">Developed feature-rich, multi-vendor <strong className={styles.highlight}>E-commerce Solutions</strong> engineered for low-latency checkouts and instant data-fetching.</li>
              <li className="leading-relaxed">Designed secure, data-dense <strong className={styles.highlight}>Admin Dashboards & Portals</strong> giving operational teams full data control and custom analytics workflows.</li>
              <li className="leading-relaxed">Shipped production-ready <strong className={styles.highlight}>Employee Management Suites</strong> and optimized <strong className={styles.highlight}>Streaming Analytics Platforms</strong> to live environments.</li>
            </ul>
            <div className={styles.badgeContainer}>
              <code>React</code>
              <code>Laravel</code>
              <code>PHP</code>
              <code>MySQL</code>
              <code>C#</code>
              <code>SceneBuilder</code>
              <code>Full-Stack Architecture</code>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionHeading}>Projects</h2>
        <p className={styles.bodyText}>
          I have engineered and deployed <strong className={styles.highlight}>11 major digital solutions</strong>, ranging from targeted business utilities to highly scalable web platforms. I am currently cataloging the portfolio to display granular code breakdowns. Stay tuned—these deep-dives will go live right here very soon!
        </p>
      </section>

      {/* 5. INTERNSHIPS */}
      <section id="internships" className={styles.section}>
        <h2 className={styles.sectionHeading}>Internships</h2>
        <div className="space-y-8 w-full">
          
          {/* Internship 1: Full-Stack */}
          <div className={styles.timelineContainer}>
            <div className="space-y-1">
              <span className={styles.timelineDate}>Recent</span>
              <h3 className={styles.itemHeading}>Full-Stack Developer Intern — <span className={styles.companyName}>Digital Sphere</span></h3>
              <p className={styles.bodyText}>
                Immersed myself in an intensive enterprise application tract. Spearheaded robust backend logic, built relational database architectures, developed secure RESTful APIs, and mastered modern full-stack development life cycles.
              </p>
              <div className={styles.badgeContainer}>
                <code>Laravel</code>
                <code>PHP</code>
                <code>MySQL</code>
                <code>REST APIs</code>
                <code>Backend Systems</code>
              </div>
            </div>
          </div>

          {/* Internship 2: Frontend */}
          <div className={styles.timelineContainer}>
            <div className="space-y-1">
              <span className={styles.timelineDate}>Earlier</span>
              <h3 className={styles.itemHeading}>Frontend Developer Intern — <span className={styles.companyName}>Digital Sphere</span></h3>
              <p className={styles.bodyText}>
                Successfully converted intricate design layouts into responsive, interactive, and pixel-perfect web interfaces using industry best practices.
              </p>
              <div className={styles.badgeContainer}>
                <code>HTML5</code>
                <code>CSS3</code>
                <code>JavaScript (ES6+)</code>
                <code>React.js</code>
                <code>Responsive UI</code>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. EDUCATION */}
      <section id="education" className={styles.section}>
        <h2 className={styles.sectionHeading}>Education</h2>
        <div className={styles.timelineContainer}>
          <div className="space-y-1">
            <h3 className={styles.itemHeading}>Bachelor of Science in Computer Science (BSCS)</h3>
            <span className={styles.companyName}>Virtual University of Pakistan</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RightContent;
