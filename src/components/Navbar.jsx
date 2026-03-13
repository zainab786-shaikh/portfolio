import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const glassStyle = {
    background: scrolled ? "rgba(15, 23, 42, 0.8)" : "rgba(15, 23, 42, 0.4)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "20px",
    transition: "all 0.4s ease",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "1000",
        padding: scrolled ? "1rem 1.5rem" : "1.5rem 1.5rem",
        transition: "all 0.4s ease",
      }}
    >
      <div className="container" style={{ ...glassStyle, padding: "0.8rem 2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "1.5rem",
              fontWeight: "900",
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "-0.05em",
            }}
          >
            ZS<span style={{ color: "#6366f1" }}>.</span>
          </a>

          {/* Desktop Links */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
            className="nav-desktop"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: "absolute",
                top: "100%",
                left: "1.5rem",
                right: "1.5rem",
                marginTop: "1rem",
                padding: "2rem",
                ...glassStyle,
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;