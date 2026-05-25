"use client";
const services = [
  {
    icon: "🚑",
    title: "Emergency & Trauma Care",
    desc: "Round-the-clock emergency services with rapid triage, trauma care, and resuscitation capabilities.",
    tag: "24/7",
    tagColor: "#DC2626",
  },
  {
    icon: "🤱",
    title: "Maternity & Obstetrics",
    desc: "Comprehensive antenatal, delivery and postnatal care in a safe, supportive environment.",
    tag: "Specialist",
    tagColor: "#0D7E6B",
  },
  {
    icon: "🔬",
    title: "Laboratory & Diagnostics",
    desc: "Full-service laboratory with haematology, biochemistry, microbiology and rapid diagnostic testing.",
    tag: "In-House",
    tagColor: "#0B1F3A",
  },
  {
    icon: "🩻",
    title: "Radiology & Imaging",
    desc: "Digital X-ray, ultrasound and other imaging services for accurate, prompt diagnosis.",
    tag: "Advanced",
    tagColor: "#6B21A8",
  },
  {
    icon: "💊",
    title: "Pharmacy",
    desc: "Fully stocked in-house pharmacy dispensing quality medications with expert pharmacist guidance.",
    tag: "On-Site",
    tagColor: "#0D7E6B",
  },
  {
    icon: "🫀",
    title: "Cardiology",
    desc: "ECG, echocardiography, and expert cardiological consultations for heart health management.",
    tag: "Specialist",
    tagColor: "#DC2626",
  },
  {
    icon: "🧒",
    title: "Paediatrics",
    desc: "Dedicated child healthcare covering immunisation, growth monitoring, and paediatric emergencies.",
    tag: "Family",
    tagColor: "#0D7E6B",
  },
  {
    icon: "🦷",
    title: "Dental Care",
    desc: "Preventive and restorative dental services for the whole family, handled by qualified dentists.",
    tag: "Routine",
    tagColor: "#0B1F3A",
  },
  {
    icon: "🧠",
    title: "Mental Health",
    desc: "Counselling, psychiatric assessment and holistic mental wellness support for patients and families.",
    tag: "Holistic",
    tagColor: "#9333EA",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#F5F2EE",
        padding: "96px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 64,
          }}
        >
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
            ✦ Medical Services ✦
          </span>
          <div className="divider" style={{ marginBottom: 20 }} />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 500,
              color: "var(--color-navy)",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Comprehensive Care,{" "}
            <em style={{ color: "#0D7E6B", fontStyle: "italic" }}>
              Under One Roof
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "clamp(13px, 2vw, 15px)",
              maxWidth: 520,
              lineHeight: 1.8,
            }}
          >
            From emergency response to specialist consultations, FaithCircle
            Hospital offers a wide spectrum of medical services to meet every
            healthcare need.
          </p>
        </div>

        {/* Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 18,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "28px 24px",
                border: "1px solid rgba(11,31,58,0.06)",
                boxShadow: "0 2px 12px rgba(11,31,58,0.04)",
                transition: "all 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 36px rgba(13,126,107,0.12)";
                el.style.borderColor = "rgba(13,126,107,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 12px rgba(11,31,58,0.04)";
                el.style.borderColor = "rgba(11,31,58,0.06)";
              }}
            >
              {/* Tag */}
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: s.tagColor,
                  color: "#fff",
                  fontSize: 8,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 50,
                }}
              >
                {s.tag}
              </span>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{s.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy)",
                  fontSize: "clamp(17px, 2.5vw, 20px)",
                  fontWeight: 600,
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: "var(--color-muted)",
                  fontSize: 13,
                  lineHeight: 1.75,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #0D7E6B, #10A88E)",
              color: "#FAF8F5",
              padding: "14px 36px",
              borderRadius: 8,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(13,126,107,0.3)",
            }}
          >
            Book a Consultation →
          </a>
        </div>
      </div>

      <style>{`
        .services-grid { grid-template-columns: 1fr !important; }
        @media(min-width: 640px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(min-width: 1024px) { .services-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
