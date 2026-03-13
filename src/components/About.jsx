import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

function About() {
  return (
    <section id="about" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Blobs */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%', width: '300px', height: '300px',
        background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
              {/* Glow Effect */}
              <div style={{
                position: 'absolute', inset: '-10px', background: 'linear-gradient(45deg, #6366f1, #06b6d4)',
                borderRadius: '24px', filter: 'blur(15px)', opacity: '0.3'
              }} />
              
              {/* Card Container */}
              <div style={{
                position: 'relative', background: '#0f172a', borderRadius: '24px', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
              }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/profile.png`}
                  alt="Zainab Shaikh"
                  style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Overlay Tag */}
                <div style={{
                  position: 'absolute', bottom: '0', left: '0', right: '0', padding: '2rem',
                  background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)'
                }}>
                  <div style={{ width: '40px', height: '4px', background: '#6366f1', borderRadius: '2px', marginBottom: '0.5rem' }} />
                  <p style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', color: '#818cf8', textTransform: 'uppercase' }}>
                    Student & Aspiring Engineer
                  </p>
                </div>
              </div>

              {/* Small Floating Icon */}
              <div style={{
                position: 'absolute', top: '-15px', right: '-15px', width: '50px', height: '50px',
                background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: '15px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)',
                animation: 'float 4s ease-in-out infinite'
              }}>
                <FiCheckCircle style={{ color: '#22d3ee', fontSize: '1.5rem' }} />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: '#fff' }}>
              About <span style={{ color: '#6366f1' }}>Me</span>
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p>
                My name is <strong style={{ color: '#fff' }}>Zainab Shaikh</strong>. I am a 
                <span style={{ color: '#818cf8' }}> student and aspiring software engineer</span> who is passionate about technology and continuous learning.
              </p>

              <p>
                I am continuously strengthening my foundation in 
                <span style={{ color: '#fff', borderBottom: '2px solid rgba(99,102,241,0.3)' }}> programming, problem solving, and software development</span>, while exploring innovative ideas.
              </p>

              {/* Interests Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                {['Artificial Intelligence', 'Software Dev', 'Automation', 'EdTech'].map((item) => (
                  <div key={item} style={{
                    padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.05)', color: '#cbd5e1', fontSize: '0.9rem',
                    display: 'flex', alignItems: 'center', gap: '0.75rem'
                  }}>
                    <div style={{ width: '6px', height: '6px', background: '#6366f1', borderRadius: '50%' }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* ZY Innovators Card */}
              <div style={{
                marginTop: '1.5rem', padding: '2rem', background: 'rgba(99,102,241,0.05)', borderRadius: '24px',
                border: '1px solid rgba(99,102,241,0.15)', position: 'relative', overflow: 'hidden'
              }}>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>ZY Innovators</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Focused on improving <span style={{ color: '#22d3ee' }}>education for children through technology</span>. Shaping my interest in building platforms that make learning smarter.
                </p>
                <a
                  href="https://zy-innovators.github.io/ZYInnovators-Website/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium"
                >
                  Visit ZY Innovators <FiArrowRight />
                </a>
              </div>

              <p style={{ fontStyle: 'italic', color: '#e2e8f0', fontSize: '1.2rem', marginTop: '1rem' }}>
                "Building impactful technology platforms to create meaningful change through innovation."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
