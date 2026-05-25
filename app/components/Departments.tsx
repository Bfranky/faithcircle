"use client";
const departments = [
  {
    name: "General Medicine",
    head: "Dr. Adebayo Okafor",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&fit=crop&crop=face",
    desc: "Primary and specialist adult medicine, managing chronic conditions, infections, and complex medical cases.",
    color: "#0D7E6B",
  },
  {
    name: "Surgery",
    head: "Dr. Chiamaka Nwosu",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&fit=crop&crop=face",
    desc: "General and laparoscopic surgery, hernia repair, appendectomy, and elective surgical procedures.",
    color: "#0B1F3A",
  },
  {
    name: "Obstetrics & Gynaecology",
    head: "Dr. Funmilayo Adesegun",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop&crop=face",
    desc: "Full reproductive health services — antenatal care, safe delivery, postnatal follow-up, and gynaecological consultations.",
    color: "#BE185D",
  },
  {
    name: "Paediatrics",
    head: "Dr. Emmanuel Eze",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&fit=crop&crop=face",
    desc: "Child health from newborn care through adolescence — vaccines, growth, nutrition, and paediatric illnesses.",
    color: "#0D7E6B",
  },
];

export default function Departments() {
  return (
    <section
      id="departments"
      style={{ background: "var(--color-navy)", padding: "96px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "radial-gradient(circle, rgba(200,169,110,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#C8A96E",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 16,
              display: "block",
            }}
          >
            ✦ Departments ✦
          </span>
          <div className="divider" style={{ margin: "0 auto 20px" }} />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 500,
              color: "#FAF8F5",
              lineHeight: 1.1,
            }}
          >
            Our Medical{" "}
            <em style={{ color: "#C8A96E", fontStyle: "italic" }}>
              Departments
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="dept-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 20,
          }}
        >
          {departments.map((d) => (
            <div
              key={d.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 16,
                border: "1px solid rgba(200,169,110,0.1)",
                overflow: "hidden",
                transition: "border-color 0.25s, background 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(200,169,110,0.3)";
                el.style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(200,169,110,0.1)";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {/* Coloured header bar */}
              <div
                style={{
                  height: 4,
                  background: `linear-gradient(90deg, ${d.color}, ${d.color}88)`,
                }}
              />
              <div style={{ padding: "28px 24px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                {/* Doctor photo */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "2px solid rgba(200,169,110,0.2)",
                  }}
                >
                  <img
                    src={d.photo}
                    alt={d.head}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#FAF8F5",
                      fontSize: "clamp(18px, 2.5vw, 22px)",
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {d.name}
                  </h3>
                  <p
                    style={{
                      color: "rgba(200,169,110,0.8)",
                      fontSize: 11,
                      letterSpacing: "0.5px",
                      marginBottom: 12,
                    }}
                  >
                    Head: {d.head}
                  </p>
                  <p
                    style={{
                      color: "rgba(250,248,245,0.55)",
                      fontSize: 13,
                      lineHeight: 1.75,
                    }}
                  >
                    {d.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dept-grid { grid-template-columns: 1fr !important; }
        @media(min-width: 768px) { .dept-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
