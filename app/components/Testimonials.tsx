const testimonials = [
  {
    name: "Mrs. Blessing Adeyemi",
    role: "Maternity Patient",
    text: "I delivered my baby at FaithCircle and it was the most reassuring experience. The midwives were gentle, the doctors attentive, and the facilities impeccably clean. I cannot thank them enough.",
    rating: 5,
  },
  {
    name: "Mr. Rotimi Fashola",
    role: "Emergency Patient",
    text: "I was rushed in at 2 AM with chest pain and the emergency team responded immediately. Professional, calm, and thorough. This hospital truly lives up to its name.",
    rating: 5,
  },
  {
    name: "Alhaja Mariam Suleiman",
    role: "Outpatient",
    text: "The doctors here actually listen. Dr. Okafor took his time explaining my diagnosis and treatment options. I have been coming here for three years and have never been disappointed.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        background: "#F0EDE8",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#0D7E6B",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 600,
              display: "block",
              marginBottom: 16,
            }}
          >
            ✦ Patient Stories ✦
          </span>
          <div className="divider" style={{ margin: "0 auto 20px" }} />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 500,
              color: "var(--color-navy)",
              lineHeight: 1.1,
            }}
          >
            Voices of{" "}
            <em style={{ color: "#0D7E6B", fontStyle: "italic" }}>
              Our Patients
            </em>
          </h2>
        </div>

        <div
          className="testimonials-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "36px 32px",
                border: "1px solid rgba(11,31,58,0.06)",
                boxShadow: "0 4px 20px rgba(11,31,58,0.05)",
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 80,
                  color: "rgba(13,126,107,0.1)",
                  lineHeight: 0.8,
                  position: "absolute",
                  top: 20,
                  left: 24,
                  fontWeight: 700,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} style={{ color: "#C8A96E", fontSize: 14 }}>
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  color: "#3A4A5A",
                  fontSize: "clamp(13px, 1.8vw, 15px)",
                  lineHeight: 1.9,
                  marginBottom: 28,
                  fontStyle: "italic",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  borderTop: "1px solid rgba(11,31,58,0.06)",
                  paddingTop: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0D7E6B, #10A88E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FAF8F5",
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-navy)",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      color: "var(--color-muted)",
                      fontSize: 11,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid { grid-template-columns: 1fr !important; }
        @media(min-width: 768px) { .testimonials-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
