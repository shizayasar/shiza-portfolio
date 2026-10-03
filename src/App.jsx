import { motion } from "framer-motion"
import "./App.css"

const projects = [
  {
    number: "01",
    title: "3D-Printed Robotic Arm",
    category: "Robotics + Computer Vision",
    description:
      "A computer-vision controlled robotic arm designed to mirror human hand and finger movements through real-time webcam tracking.",
    tools: ["Python", "Computer Vision", "Servo Motors", "3D Printing"],
    className: "robot-project",
    visual: "✦",
  },
  {
    number: "02",
    title: "Gyroscope Boxing Game",
    category: "Game Development",
    description:
      "A motion-controlled boxing game built in Unity that translates real-world player movement into responsive in-game actions.",
    tools: ["Unity 3D", "C#", "Gyroscope Sensors", "Game Design"],
    className: "boxing-project",
    visual: "🥊",
  },
]

const skills = [
  "C++",
  "C#",
  "Python",
  "JavaScript",
  "React",
  "Unity 3D",
  "UI Design",
  "Game Design",
  "Arduino",
  "3D Printing",
  "Computer Vision",
  "Robotics",
]

function App() {
  return (
    <div className="portfolio">
      <div className="background-grid" />

      {/* Navigation */}
      <nav className="navbar">
        <motion.a
          href="#home"
          className="logo"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SY<span>.</span>
        </motion.a>

        <motion.div
          className="nav-links"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </motion.div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <motion.div
          className="pink-orb orb-one"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pink-orb orb-two"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        

        <div className="hero-content">
          <motion.p
            className="hero-label"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Computer Science • Game Development • Creative Tech
          </motion.p>
          

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span>Shiza.</span>
            <br />
            I build things that
            <br />
            <em>move, play & interact.</em>
          </motion.h1>
          

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            I combine code, game development, robotics, and design to create
            interactive experiences that feel as good as they function.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#work" className="button pink-button">
              Explore my work ↓
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

          <motion.p
      className="location"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      Based in Los Angeles, CA
    </motion.p>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          scroll
          <span>↓</span>
        </motion.div>
      </section>

      {/* Moving skills bar */}
      <section className="ticker-section">
        <div className="ticker">
          <div className="ticker-content">
            {[...skills, ...skills].map((skill, index) => (
              <span key={index}>
                {skill}
                <b>✦</b>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="work-section">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>Selected Work</p>
          <h2>
            Things I've <span>built.</span>
          </h2>
        </motion.div>

        <div className="projects">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project ${project.className}`}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-visual">
                <motion.div
                  className="visual-circle"
                  whileHover={{
                    rotate: 10,
                    scale: 1.08,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {project.visual}
                </motion.div>

                <span className="project-number">{project.number}</span>

                <motion.div
                  className="floating-dot dot-one"
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: index,
                  }}
                />

                <motion.div
                  className="floating-dot dot-two"
                  animate={{ y: [0, 14, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    delay: index * 0.5,
                  }}
                />
              </div>

              <div className="project-info">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tool-list">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <button className="project-link">
                  View project <span>↗</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <motion.div
          className="about-title"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>About me</p>

          <h2>
            Code meets creativity.
            <br />
            <span>creativity.</span>
          </h2>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I’m a Computer Science student at the University of La Verne, creating interactive games, robotics projects, and digital experiences. I like combining code and design to build things that are playful, intuitive, and fun to use.
          </p>

          <p>
            From motion-controlled games to computer-vision robotics, I enjoy
            taking ideas and turning them into experiences people can actually
            interact with.
          </p>

          <div className="mini-skills">
            {skills.slice(0, 8).map((skill, index) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.08,
                  rotate: index % 2 === 0 ? 2 : -2,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Fun statement */}
      <motion.section
        className="statement-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>
          I'm interested in building things that are
          <span> useful, playful, and a little unexpected.</span>
        </p>
      </motion.section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="contact-small">Have something interesting in mind?</p>

          <h2>
            Let's build
            <br />
            something <span>cool.</span>
          </h2>

          <a
            className="email"
            href="mailto:shiza.yasar@gmail.com"
          >
            shiza.yasar@gmail.com ↗
          </a>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/shizayasar/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/shizayasar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      <footer>
        <p>Designed & built by Shiza Yasar ✦</p>
        <p>2026</p>
      </footer>
    </div>
  )
}

export default App