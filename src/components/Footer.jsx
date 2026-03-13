import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      padding: '4rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      background: '#030712'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        textAlign: 'center'
      }}>
        {/* Logo/Name */}
        <div>
          <a href="#" style={{ 
            fontSize: '1.8rem', fontWeight: '900', color: '#fff', textDecoration: 'none',
            letterSpacing: '-0.05em'
          }}>
            ZS<span style={{ color: '#6366f1' }}>.</span>
          </a>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '500' }}>
            Building the future of education with AI.
          </p>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[
            { icon: <FiGithub />, href: "https://github.com/zainab786-shaikh" },
            { icon: <FiLinkedin />, href: "https://linkedin.com/in/shaikhzainab" },
            { icon: <FiMail />, href: "mailto:shaikh.zainab.arif@gmail.com" },
          ].map((social, i) => (
            <a key={i} href={social.href} style={{
              fontSize: '1.5rem', color: '#94a3b8', transition: '0.3s'
            }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
               onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ color: '#475569', fontSize: '0.85rem', fontWeight: '600' }}>
          © {currentYear} Zainab Shaikh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
