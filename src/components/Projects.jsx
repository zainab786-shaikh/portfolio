import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      title: "LearnZy",
      description:
        "LearnZy is an AI-powered personalized learning platform designed to help students learn topics step-by-step with explanations, quizzes, and progress tracking. It focuses on improving understanding through interactive lessons and intelligent assistance.",
      tech: ["Angular", "Node.js", "PostgreSQL", "Mistral LLM", "Speech Recognition", "Text-to-Speech"],
      link: "https://zy-innovators.github.io/ZYInnovators-Website/#/",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="projects" style={{ padding: "8rem 0" }}>
      <div className="container">
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem" }}>
            Featured <span style={{ color: "#6366f1" }}>Project</span>
          </h2>
          <div className="title-underline" style={{ margin: "0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                borderRadius: "30px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "220px", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.7s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              <div
                style={{
                  padding: "2rem",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        padding: "0.4rem 0.8rem",
                        background: "rgba(99, 102, 241, 0.1)",
                        color: "#818cf8",
                        borderRadius: "8px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontSize: "1.4rem",
                    color: "#fff",
                    marginBottom: "1rem",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "2rem",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ marginTop: "auto" }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#fff",
                      fontWeight: "600",
                      textDecoration: "none",
                      padding: "0.6rem 1rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Visit Project <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;