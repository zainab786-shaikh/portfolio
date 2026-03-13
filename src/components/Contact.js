import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";

function Contact() {
  const contactInfo = [
    { icon: <FiMail />, label: "Email", value: "shaikh.zainab.arif@gmail.com" },
    { icon: <FiMapPin />, label: "Location", value: "Mumbai, India" },
    { icon: <FiLinkedin />, label: "LinkedIn", value: "linkedin.com/in/shaikhzainab" },
  ];

  return (
    <section id="contact" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
              Let's <span style={{ color: '#6366f1' }}>Connect</span>
            </h2>
            <div className="title-underline" style={{ margin: '0 0 2rem 0' }} />
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', maxWidth: '400px' }}>
              Interested in collaboration or have a question? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {contactInfo.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{
                    width: '60px', height: '60px', background: 'rgba(99, 102, 241, 0.1)',
                    borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#818cf8', fontSize: '1.5rem', border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{item.label}</p>
                    <p style={{ color: '#fff', fontWeight: '600' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'rgba(15, 23, 42, 0.4)', padding: '3rem', borderRadius: '32px',
              border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)'
            }}
          >
            <form action="https://formspree.io/f/yourFormId" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#94a3b8', marginLeft: '0.5rem' }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px', padding: '1.1rem 1.5rem', color: '#fff', outline: 'none',
                      transition: '0.3s'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#6366f1'; e.target.style.background = 'rgba(99, 102, 241, 0.02)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.target.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#94a3b8', marginLeft: '0.5rem' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@email.com"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px', padding: '1.1rem 1.5rem', color: '#fff', outline: 'none',
                      transition: '0.3s'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#6366f1'; e.target.style.background = 'rgba(99, 102, 241, 0.02)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.target.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#94a3b8', marginLeft: '0.5rem' }}>Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px', padding: '1.1rem 1.5rem', color: '#fff', outline: 'none',
                    transition: '0.3s', resize: 'none'
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#6366f1'; e.target.style.background = 'rgba(99, 102, 241, 0.02)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.target.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                ></textarea>
              </div>

              <a
                href="mailto:shaikh.zainab.arif@gmail.com?subject=Portfolio Inquiry&body=Hello Zainab,"
                className="btn-premium"
                style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Send Message <FiSend />
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
