export default function Stats() {
  const stats = [
    { value: "24/7", label: "Emergency Care", icon: "🚑" },
    { value: "15+", label: "Medical Specialists", icon: "👨‍⚕️" },
    { value: "10+", label: "Departments", icon: "🏥" },
    { value: "5.0★", label: "Patient Satisfaction", icon: "⭐" },
  ];

  return (
    <section
      style={{
        background: "var(--color-navy)",
        padding: "0",
        borderBottom: "1px solid rgba(200,169,110,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "36px 24px",
              textAlign: "center",
              borderRight: i % 2 === 0 ? "1px solid rgba(200,169,110,0.08)" : "none",
              borderBottom: i < 2 ? "1px solid rgba(200,169,110,0.08)" : "none",
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                color: "#C8A96E",
                fontSize: "clamp(24px, 5vw, 36px)",
                fontWeight: 600,
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                color: "rgba(250,248,245,0.5)",
                fontSize: 11,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media(min-width: 768px) {
          div[style*="repeat(2, 1fr)"] { grid-template-columns: repeat(4, 1fr) !important; }
          div[style*="repeat(2, 1fr)"] > div { border-bottom: none !important; }
          div[style*="repeat(2, 1fr)"] > div:not(:last-child) { border-right: 1px solid rgba(200,169,110,0.08) !important; }
        }
      `}</style>
    </section>
  );
}
