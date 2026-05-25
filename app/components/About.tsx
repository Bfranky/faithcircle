"use client";
export default function About() {
  const values = [
    {
      icon: "🩺",
      title: "Expert Medical Team",
      desc: "Our board-certified physicians and specialists bring decades of combined experience.",
    },
    {
      icon: "🔬",
      title: "Advanced Diagnostics",
      desc: "State-of-the-art laboratory and imaging equipment for accurate, rapid diagnosis.",
    },
    {
      icon: "💛",
      title: "Patient-Centred Care",
      desc: "Every patient is treated with dignity, compassion, and individualised attention.",
    },
    {
      icon: "🛡️",
      title: "Accredited & Safe",
      desc: "Operating under full Nigerian medical regulatory standards with rigorous safety protocols.",
    },
  ];

  return (
    <section id="about" style={{ background: "var(--color-cream)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 72 }}>
          <span
            style={{
              color: "#0D7E6B",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            ✦ Our Story ✦
          </span>
          <div className="divider" style={{ marginBottom: 20 }} />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 500,
              color: "var(--color-navy)",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Healthcare Built on{" "}
            <em style={{ color: "#0D7E6B", fontStyle: "italic" }}>Faith & Trust</em>
          </h2>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "clamp(14px, 2vw, 16px)",
              lineHeight: 1.9,
              maxWidth: 640,
            }}
          >
            Situated in the heart of Olorunsogo, Abeokuta, FaithCircle Hospital
            was founded on a singular conviction: that every Nigerian deserves
            healthcare that is both excellent and humane. From routine check-ups
            to complex surgical procedures, we bring global medical standards to
            your doorstep.
          </p>
        </div>

        {/* Two-col layout */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 48,
            alignItems: "center",
            marginBottom: 80,
          }}
        >
          {/* Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                paddingBottom: "68%",
                position: "relative",
                boxShadow: "0 24px 64px rgba(11,31,58,0.14)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=85&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -12,
                background: "linear-gradient(135deg, #0D7E6B, #10A88E)",
                borderRadius: 12,
                padding: "20px 24px",
                textAlign: "center",
                boxShadow: "0 12px 36px rgba(13,126,107,0.35)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#FAF8F5",
                  fontSize: 28,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                24/7
              </div>
              <div
                style={{
                  color: "rgba(250,248,245,0.8)",
                  fontSize: 9,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                Always Open
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p
              style={{
                color: "#3A4A5A",
                fontSize: "clamp(14px, 1.8vw, 15px)",
                lineHeight: 1.95,
                marginBottom: 24,
              }}
            >
              We believe health is the foundation of every thriving community. At
              FaithCircle Hospital, we combine cutting-edge medical technology
              with the warmth of local community care. Our multidisciplinary team
              of specialists works collaboratively to ensure you and your family
              receive the finest, most personalised treatment available in Ogun
              State.
            </p>
            <p
              style={{
                color: "#3A4A5A",
                fontSize: "clamp(14px, 1.8vw, 15px)",
                lineHeight: 1.95,
                marginBottom: 36,
              }}
            >
              Whether you arrive for a routine consultation or an emergency,
              every member of our staff greets you with the same promise: you
              will be seen, heard, and cared for with excellence.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                background: "var(--color-navy)",
                color: "#FAF8F5",
                padding: "13px 30px",
                borderRadius: 8,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#0D7E6B")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--color-navy)")
              }
            >
              Get In Touch →
            </a>
          </div>
        </div>

        {/* Values grid */}
        <div
          className="values-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "28px 24px",
                border: "1px solid rgba(11,31,58,0.07)",
                boxShadow: "0 4px 16px rgba(11,31,58,0.05)",
                transition: "box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(13,126,107,0.12)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(13,126,107,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 16px rgba(11,31,58,0.05)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(11,31,58,0.07)";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{v.icon}</div>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy)",
                  fontSize: "clamp(16px, 2.5vw, 19px)",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {v.title}
              </h4>
              <p
                style={{
                  color: "var(--color-muted)",
                  fontSize: 13,
                  lineHeight: 1.7,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr !important; }
        .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
        @media(min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
          .values-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
