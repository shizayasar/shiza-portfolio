import { motion, useReducedMotion } from "framer-motion"
import "./App.css"

// Add a `link` to a project (GitHub repo, demo video, itch.io page...)
// and a "View project" link will appear on its card. Add `play` for a
// playable demo: the card then opens the demo when clicked.
const projects = [
  {
    title: "3D-Printed Robotic Arm",
    category: "Robotics and computer vision",
    description:
      "A robotic arm that copies your hand's movements in real time. A webcam tracks the hand with OpenCV and MediaPipe, Python turns each finger's position into servo angles, and an Arduino drives the servos in the 3D-printed arm.",
    tools: ["Python", "OpenCV", "MediaPipe", "Arduino", "3D Printing"],
    visual: "arm",
    link: "https://github.com/shizayasar/cv-robotic-arm",
  },
  {
    title: "Dusk Catchers",
    category: "Game development, in progress",
    description:
      "A cozy, no-fail co-op game for two players on one keyboard. Two tiny critters carry fireflies home along a glowing string to light up a sleeping village's lanterns. Built in C++ with raylib, with a focus on game feel and local co-op.",
    tools: ["C++17", "raylib", "CMake", "Game Design"],
    visual: "dusk",
    link: "https://github.com/shizayasar/dusk-catchers",
    play: "/play/dusk-catchers/index.html",
  },
]

const toolkit = [
  { group: "Languages", items: ["C++", "C#", "Python", "JavaScript"] },
  { group: "Games", items: ["Unity 3D", "Game Design", "UI Design"] },
  { group: "Hardware", items: ["Arduino", "3D Printing", "Computer Vision", "Robotics"] },
  { group: "Web", items: ["React"] },
]

const allSkills = toolkit.flatMap(({ items }) => items)

const SPARKLE =
  "M0,-12 C1.6,-3 3,-1.6 12,0 C3,1.6 1.6,3 0,12 C-1.6,3 -3,1.6 -12,0 C-3,-1.6 -1.6,-3 0,-12Z"

function OrbitArt() {
  return (
    <svg
      className="orbit-art"
      viewBox="0 0 400 400"
      role="img"
      aria-label="A small rose-colored planet with a ring, an orbiting moon and twinkling stars"
    >
      <defs>
        <radialGradient id="planet" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#F3C6D1" />
          <stop offset="55%" stopColor="#D9798F" />
          <stop offset="100%" stopColor="#A9465F" />
        </radialGradient>
        <clipPath id="planet-clip">
          <circle cx="200" cy="200" r="92" />
        </clipPath>
      </defs>

      {/* outer orbit with a moon */}
      <circle className="orbit-path" cx="200" cy="200" r="172" />
      <g className="moon-orbit">
        <circle className="moon" cx="200" cy="28" r="11" />
      </g>

      {/* back half of the ring */}
      <g transform="rotate(-16 200 200)">
        <path className="ring ring-back" d="M42,200 A158,40 0 0 1 358,200" />
      </g>

      {/* planet */}
      <circle cx="200" cy="200" r="92" fill="url(#planet)" />
      <g clipPath="url(#planet-clip)" className="planet-bands">
        <path d="M100,170 C160,150 240,185 300,160" />
        <path d="M100,232 C170,215 230,250 300,228" />
      </g>

      {/* front half of the ring */}
      <g transform="rotate(-16 200 200)">
        <path className="ring ring-front" d="M42,200 A158,40 0 0 0 358,200" />
      </g>

      {/* stars */}
      <g className="sparkles">
        <path d={SPARKLE} transform="translate(318 84) scale(1.6)" style={{ animationDelay: "0s" }} />
        <path d={SPARKLE} transform="translate(276 54) scale(0.7)" style={{ animationDelay: "1.1s" }} />
        <path d={SPARKLE} transform="translate(72 300) scale(1.1)" style={{ animationDelay: "0.6s" }} />
        <path d={SPARKLE} transform="translate(350 296) scale(0.8)" style={{ animationDelay: "1.8s" }} />
        <path d={SPARKLE} transform="translate(196 196) scale(0.9)" className="core-sparkle" style={{ animationDelay: "2.3s" }} />
      </g>
      <circle className="star-dot" cx="96" cy="96" r="4" />
      <circle className="star-dot" cx="300" cy="350" r="3" />
    </svg>
  )
}

function ArmArt() {
  return (
    <svg className="project-art" viewBox="0 0 240 200" aria-hidden="true">
      <rect x="40" y="168" width="80" height="14" rx="7" className="art-fill" />
      <path d="M80,168 L96,108 L160,70" className="art-line" />
      <path d="M160,70 L188,56 M160,70 L190,84" className="art-line thin" />
      <circle cx="80" cy="166" r="9" className="art-joint" />
      <circle cx="96" cy="108" r="9" className="art-joint" />
      <circle cx="160" cy="70" r="8" className="art-joint" />
      <path d={SPARKLE} transform="translate(206 40) scale(0.8)" className="art-spark" />
    </svg>
  )
}

function DuskArt() {
  return (
    <svg className="project-art" viewBox="0 0 240 200" aria-hidden="true">
      {/* lantern */}
      <path d="M196,34 L196,52" className="dusk-cord" />
      <rect x="182" y="52" width="28" height="36" rx="8" className="dusk-lantern" />
      <circle cx="196" cy="70" r="22" className="dusk-glow" />
      {/* glowing string between the two critters */}
      <path d="M52,150 C92,108 132,176 176,138" className="dusk-string" />
      {/* fireflies */}
      <circle cx="84" cy="128" r="4.5" className="dusk-firefly" />
      <circle cx="118" cy="146" r="4" className="dusk-firefly" />
      <circle cx="148" cy="148" r="4.5" className="dusk-firefly" />
      <circle cx="132" cy="98" r="3" className="dusk-firefly" />
      <circle cx="58" cy="92" r="3" className="dusk-firefly" />
      {/* critters */}
      <ellipse cx="44" cy="162" rx="20" ry="16" className="dusk-critter" />
      <circle cx="38" cy="158" r="2.5" className="dusk-eye" />
      <circle cx="50" cy="158" r="2.5" className="dusk-eye" />
      <ellipse cx="186" cy="150" rx="20" ry="16" className="dusk-critter alt" />
      <circle cx="180" cy="146" r="2.5" className="dusk-eye" />
      <circle cx="192" cy="146" r="2.5" className="dusk-eye" />
    </svg>
  )
}

function App() {
  const reduceMotion = useReducedMotion()
  const rise = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="brand">
          <img src="/logo.png" alt="" width="36" height="36" />
          Shiza Yasar
        </a>

        <div className="nav-links">
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero-text">
          <motion.h1 {...rise(0.04)}>
            Hi, I'm Shiza. I make games, robots, and the code that connects
            them.
          </motion.h1>

          <motion.p className="hero-description" {...rise(0.16)}>
            I study computer science at the University of La Verne and build
            interactive projects, from a cozy co-op game written in C++ to a
            robotic arm that copies your hand in real time.
          </motion.p>

          <motion.div className="hero-buttons" {...rise(0.24)}>
            <a href="#work" className="button primary-button">
              See my projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="button outline-button"
            >
              View resume
            </a>
          </motion.div>

          <motion.p className="location" {...rise(0.32)}>
            Based in Los Angeles, CA
          </motion.p>
        </div>

        <motion.div
          className="hero-art"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrbitArt />
        </motion.div>
      </header>

      {/* Moving skills bar */}
      <section className="ticker" aria-label="Skills">
        <ul className="ticker-track">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <li key={index} aria-hidden={index >= allSkills.length}>
              {skill}
              <svg viewBox="-14 -14 28 28" aria-hidden="true">
                <path d={SPARKLE} />
              </svg>
            </li>
          ))}
        </ul>
      </section>

      <main>
        <section id="work" className="work-section">
          <h2 className="section-title">Projects</h2>

          <div className="projects">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`project${project.play || project.link ? " has-link" : ""}`}
              >
                <div className={`project-visual visual-${project.visual}`}>
                  {project.visual === "arm" ? <ArmArt /> : <DuskArt />}
                </div>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <ul className="tool-list" aria-label="Tools used">
                    {project.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>

                  {project.play && (
                    <a
                      className="button primary-button play-link stretched"
                      href={project.play}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Play in browser
                    </a>
                  )}

                  {project.play && (
                    <p className="desktop-note">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="12" rx="2" />
                        <path d="M8 20h8M12 16v4" />
                      </svg>
                      Playable web version available on desktop
                    </p>
                  )}

                  {project.link && (
                    <a
                      className={`project-link${project.play ? "" : " stretched"}`}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.link.includes("github.com")
                        ? "View on GitHub"
                        : "View project"}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <h2 className="section-title">About</h2>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a computer science student at the University of La Verne
                who likes building things people can pick up and play with. I
                enjoy the whole process: writing the code, designing how it
                feels to use, and wiring up the hardware when a project needs
                it.
              </p>
              <p>
                I'm working toward a career in the games industry, and I'm
                most at home where code meets design, whether that's a co-op
                game about fireflies or a robot that copies your hand.
              </p>

              <div className="currently">
                <svg viewBox="-14 -14 28 28" aria-hidden="true">
                  <path d={SPARKLE} />
                </svg>
                <p>
                  <strong>Currently building:</strong> Dusk Catchers, a cozy
                  two-player co-op game in C++.
                </p>
              </div>
            </div>

            <div className="about-side">
              <div className="portrait">
                <img
                  src="/professional-pic.webp"
                  alt="Shiza Yasar"
                  width="720"
                  height="720"
                  loading="lazy"
                />
                <svg viewBox="-14 -14 28 28" aria-hidden="true">
                  <path d={SPARKLE} />
                </svg>
              </div>

              <dl className="toolkit">
                {toolkit.map(({ group, items }) => (
                  <div key={group} className="toolkit-row">
                    <dt>{group}</dt>
                    <dd>
                      {items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="contact-section">
        <div className="night-sky" aria-hidden="true">
          {[
            [8, 22], [18, 70], [31, 38], [47, 82], [62, 18],
            [74, 58], [86, 30], [93, 76], [55, 48], [24, 12],
          ].map(([x, y], i) => (
            <span key={i} style={{ left: `${x}%`, top: `${y}%` }} />
          ))}
        </div>

        <div className="contact-inner">
          <h2>Want to work together?</h2>
          <p className="contact-text">
            I'm always happy to talk about games, internships, or a project
            you're working on.
          </p>

          <a className="email" href="mailto:shiza.yasar@gmail.com">
            shiza.yasar@gmail.com
          </a>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/shizayasar/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/shizayasar" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>Designed and built by Shiza Yasar</p>
        <p>© 2026</p>
      </footer>
    </div>
  )
}

export default App
