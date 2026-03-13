import { motion } from "framer-motion";
import { FiCode, FiLayers, FiDatabase, FiCpu } from "react-icons/fi";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode />,
      skills: ["C", "C++", "Java", "PHP", "JavaScript"],
      color: "#6366f1"
    },
    {
      title: "Web Technologies",
      icon: <FiLayers />,
      skills: ["HTML", "CSS", "Angular", "TypeScript"],
      color: "#06b6d4"
    },
    {
      title: "Database & Tools",
      icon: <FiDatabase />,
      skills: ["MySQL", "Git", "GitHub", "VS Code", "Android Studio"],
      color: "#22c55e"
    },
    {
      title: "Core Computer Science",
      icon: <FiCpu />,
      skills: ["Data Structures", "Object-Oriented Programming", "DBMS", "Operating Systems"],
      color: "#a855f7"
    }
  ];

  return (
    <section id="skills" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
            Technical <span style={{ color: '#6366f1' }}>Skills</span>
          </h2>
          <div className="title-underline" />
          <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '1.5rem' }}>
            Technologies and concepts I use to build software and solve problems.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '2.5rem',
                background: 'rgba(15, 23, 42, 0.4)',
                borderRadius: '32px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                transition: '0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = cat.color + '44';
                e.currentTarget.style.boxShadow = `0 20px 40px -20px ${cat.color}66`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '50px', height: '50px', background: `${cat.color}15`,
                borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: cat.color, fontSize: '1.5rem', marginBottom: '1.5rem'
              }}>
                {cat.icon}
              </div>

              <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1.2rem' }}>
                {cat.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {cat.skills.map((s) => (
                  <div key={s} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#94a3b8',
                    fontSize: '0.95rem'
                  }}>
                    <div style={{
                      width: '5px',
                      height: '5px',
                      background: cat.color,
                      borderRadius: '50%'
                    }} />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;