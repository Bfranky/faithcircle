"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Departments", href: "#departments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = (e: MediaQueryList | MediaQueryListEvent) => {
      setIsDesktop(e.matches);
      if (e.matches) setOpen(false);
    };
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(11,31,58,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,169,110,0.12)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0D7E6B, #10A88E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              boxShadow: "0 0 18px rgba(13,126,107,0.4)",
              flexShrink: 0,
            }}
          >
            ✚
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                color: "#FAF8F5",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.5px",
                lineHeight: 1.1,
              }}
            >
              FaithCircle
            </div>
            <div
              style={{
                color: "rgba(200,169,110,0.85)",
                fontSize: 9,
                letterSpacing: "3px",
                textTransform: "uppercase",
                lineHeight: 1,
                marginTop: 2,
              }}
            >
              Hospital
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        {isDesktop && (
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  color: "rgba(250,248,245,0.75)",
                  fontSize: 12,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  padding: "8px 14px",
                  borderRadius: 6,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#10A88E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,248,245,0.75)")}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                marginLeft: 12,
                background: "linear-gradient(135deg, #0D7E6B, #10A88E)",
                color: "#FAF8F5",
                padding: "9px 22px",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "1px",
                textDecoration: "none",
                textTransform: "uppercase",
                boxShadow: "0 4px 16px rgba(13,126,107,0.35)",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Emergency: 24/7
            </a>
          </div>
        )}

        {/* Mobile toggle */}
        {!isDesktop && (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              color: "#FAF8F5",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#C8A96E",
                borderRadius: 2,
                transition: "all 0.25s",
                transform: open ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#C8A96E",
                borderRadius: 2,
                transition: "all 0.25s",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#C8A96E",
                borderRadius: 2,
                transition: "all 0.25s",
                transform: open ? "rotate(-45deg) translateY(-7px)" : "none",
              }}
            />
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {open && !isDesktop && (
        <div
          style={{
            background: "rgba(11,31,58,0.99)",
            borderTop: "1px solid rgba(200,169,110,0.1)",
            padding: "12px 24px 28px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                color: "rgba(250,248,245,0.8)",
                fontSize: 13,
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "15px 0",
                borderBottom: "1px solid rgba(200,169,110,0.08)",
                textDecoration: "none",
                minHeight: 52,
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+12245230117"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              marginTop: 20,
              background: "linear-gradient(135deg, #0D7E6B, #10A88E)",
              color: "#FAF8F5",
              padding: 16,
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "1px",
              textDecoration: "none",
            }}
          >
            ✚ Emergency: +1 224-523-0117
          </a>
        </div>
      )}
    </nav>
  );
}
