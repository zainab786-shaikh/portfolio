import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Blobs */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px',
        background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px',
        background: 'rgba(34, 211, 238, 0.08)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1
      }} />

      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '2rem'
          }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Exploring AI & Education Technology
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: '900', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.1' }}
        >
          I'm <span style={{
            background: 'linear-gradient(90deg, #6366f1, #a855f7, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Zainab Shaikh</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ minHeight: '3rem', marginBottom: '2rem' }}
        >
          <TypeAnimation
            sequence={[
              "Student Developer", 2000,
              "Future AI Systems Builder", 2000,
              "Education Technology Enthusiast", 2000,
              "Building Intelligent Platforms", 2000,
              "Learning • Building • Innovating", 2000,
              "Member @ ZY Innovators", 2000,
            ]}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: 'clamp(1.2rem, 4vw, 2.2rem)', color: '#94a3b8', fontWeight: '500' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ fontSize: '1.15rem', color: '#64748b', maxWidth: '650px', margin: '0 auto 3rem auto', lineHeight: '1.7' }}
        >
          Building intelligent systems that make learning smarter, simpler, and more accessible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn-premium">View Work</a>
          <a href="#contact" style={{
            padding: '0.8rem 2rem', borderRadius: '12px', color: '#fff', fontWeight: '700',
            textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent',
            transition: '0.3s'
          }} onMouseOver={(e) => e.currentTarget.style.borderColor = '#6366f1'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;