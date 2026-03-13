import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";

function Resume() {
  return (
    <section id="resume" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '4rem 2rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
            borderRadius: '40px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative icons in background */}
          <FiFileText style={{
            position: 'absolute', top: '-20px', right: '-20px',
            fontSize: '12rem', color: 'rgba(255,255,255,0.02)',
            transform: 'rotate(-15deg)'
          }} />

          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: '#fff' }}>
            My <span style={{ color: '#6366f1' }}>Resume</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.7', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            Interested in my professional background and detailed academic history? You can download my full resume below.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href="/Zainab_Shaikh_Resume.pdf"
              download
              className="btn-premium"
              style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}
            >
              Download PDF <FiDownload />
            </a>

            <a
              href="/Zainab_Shaikh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1.2rem 2.5rem', borderRadius: '12px', color: '#fff',
                fontWeight: '700', textDecoration: 'none',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                transition: '0.3s', display: 'flex', alignItems: 'center', gap: '0.8rem'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              View Full PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
