import Image from "next/image";

const skills = [
  {
    icon: "/Images/education.png",
    alt: "Education",
    title: "Education Background",
    body: [
      "I am currently pursuing Civil Engineering at the Technical University of Kenya.",
      "While my academic path is Civil Engineering, my passion lies in software development, game design, and blockchain technology. My background in engineering has taught me the value of structure and precision, skills that I apply to my coding projects.",
    ],
  },
  {
    icon: "/Images/programming-course.png",
    alt: "Programming",
    title: "Programming",
    body: [
      "I have basic knowledge of various programming languages such as:",
    ],
    list: ["HTML", "CSS", "Golang", "Python"],
  },
  {
    icon: "/Images/3d-television.png",
    alt: "3D model",
    title: "Graphics Design",
    body: [
      "One of my skills is graphics design in various fields, motivated by my goal of becoming a game developer. I have experience in:",
    ],
    list: ["Poster design", "3D design: architectural and product animation"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <section className="hero-section" aria-label="Introduction">
          <div className="intro-text">
            <div className="top-photo">
              <Image
                src="/Images/face.png"
                alt="Richard Ochola"
                width={300}
                height={300}
                priority
              />
            </div>
            <h1>
              Hello, I&apos;m <span>Richard Ochola</span>
            </h1>
            <h3>About Me:</h3>
            <p>
              A dynamic software developer who finds joy in turning ideas into
              reality.
            </p>
            <p>
              I am passionate about game development and also a blockchain
              enthusiast, constantly exploring the intersection between
              immersive virtual worlds and decentralized technologies.
            </p>
            <a
              className="button"
              href="/Images/Cv%20Richard%20Ochola%20Otieno..pdf"
              download="Richard-Ochola-CV"
            >
              Download CV
            </a>
          </div>
        </section>
      </header>

      <section className="services">
        <h2>Background and Skills</h2>
        <div className="service-cards">
          {skills.map((skill) => (
            <article className="card" key={skill.title}>
              <div className="icon">
                <Image src={skill.icon} alt={skill.alt} width={50} height={50} />
              </div>
              <h3>{skill.title}</h3>
              {skill.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {skill.list ? (
                <ul>
                  {skill.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
        <div className="middle-photo">
          <Image
            src="/Images/skill-development.png"
            height={100}
            width={100}
            alt="Skill development"
          />
        </div>
      </section>

      <section className="portfolio">
        <h2>Projects and Interests</h2>
        <div className="portfolio-items">
          <article className="card">
            <h3>Projects</h3>
            <ul>
              <li>
                <h4>Graphics Design</h4>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/">Poster</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">Product animation</a>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Programming</h4>
                <ul>
                  <li>
                    <a href="https://github.com/Reechy254/forage-jpmc-swe-task-2">
                      Open-source repository
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Reechy254/simple_shell">
                      Simple Shell in C
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
          <article className="card">
            <h3>Interests</h3>
            <p>
              I am particularly excited about the evolving landscape of game
              development, from creating compelling stories to designing engaging
              gameplay mechanics.
            </p>
            <p>
              Additionally, blockchain&apos;s potential to revolutionize various
              industries fascinates me, and I am constantly seeking new ways to
              integrate decentralized technology into innovative solutions.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact">
          <h2>Contact Me</h2>
          <form className="contactForm" action="mailto:richard@example.com">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="4" required />
            </div>
            <button className="sub" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Richard Ochola Portfolio</p>
      </footer>
    </main>
  );
}
