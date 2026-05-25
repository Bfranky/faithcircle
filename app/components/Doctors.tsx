"use client";
const doctors = [
  {
    name: "Dr. Adebayo Okafor",
    specialty: "General & Internal Medicine",
    qualification: "MBBS, FMCP",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&fit=crop&crop=face",
    available: true,
  },
  {
    name: "Dr. Chiamaka Nwosu",
    specialty: "General Surgery",
    qualification: "MBBS, FWACS",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&fit=crop&crop=face",
    available: true,
  },
  {
    name: "Dr. Funmilayo Adesegun",
    specialty: "Obstetrics & Gynaecology",
    qualification: "MBBS, FWACS",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop&crop=face",
    available: false,
  },
  {
    name: "Dr. Emmanuel Eze",
    specialty: "Paediatrics",
    qualification: "MBBS, FWACP",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&fit=crop&crop=face",
    available: true,
  },
  {
    name: "Dr. Taiwo Balogun",
    specialty: "Cardiology",
    qualification: "MBBS, FMCP, Dip.Card",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80&fit=crop&crop=face",
    available: true,
  },
  {
    name: "Dr. Ngozi Ihejirika",
    specialty: "Mental Health & Psychiatry",
    qualification: "MBBS, FMCPsych",
    photo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80&fit=crop&crop=face",
    available: false,
  },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
      style={{ background: "var(--color-cream)", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#0D7E6B",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 16,
              display: "block",
            }}
          >
            ✦ Our Team ✦
          </span>
          <div className="divider" style={{ margin: "0 auto 20px" }} />
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
            Meet Our{" "}
            <em style={{ color: "#0D7E6B", fontStyle: "italic" }}>
              Specialists
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "clamp(13px, 2vw, 15px)",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Our team of dedicated, board-certified physicians brings experience,
            compassion, and clinical excellence to every patient encounter.
          </p>
        </div>

        {/* Grid */}
        <div
          className="doctors-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}
        >
          {doctors.map((d) => (
            <div
              key={d.name}
              style={{
                background: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(11,31,58,0.07)",
                boxShadow: "0 4px 20px rgba(11,31,58,0.05)",
                transition: "all 0.25s",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 16px 40px rgba(13,126,107,0.13)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px rgba(11,31,58,0.05)";
              }}
            >
              {/* Photo */}
              <div
                style={{
                  height: 200,
                  overflow: "hidden",
                  position: "relative",
                  background: "#E8F4F1",
                }}
              >
                <img
                  src={d.photo}
                  alt={d.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
                {/* Availability badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: d.available
                      ? "rgba(13,126,107,0.9)"
                      : "rgba(107,114,128,0.85)",
                    color: "#fff",
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    padding: "4px 10px",
                    borderRadius: 50,
                    textTransform: "uppercase",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {d.available ? "● Available" : "● On Leave"}
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: "22px 20px 28px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-navy)",
                    fontSize: "clamp(17px, 2.5vw, 20px)",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {d.name}
                </h3>
                <p
                  style={{
                    color: "#0D7E6B",
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  {d.specialty}
                </p>
                <p
                  style={{
                    color: "var(--color-muted)",
                    fontSize: 11,
                    letterSpacing: "0.5px",
                    marginBottom: 18,
                  }}
                >
                  {d.qualification}
                </p>
                <a
                  href="#contact"
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, #0D7E6B, #10A88E)",
                    color: "#FAF8F5",
                    padding: "9px 22px",
                    borderRadius: 6,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  Book Appointment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .doctors-grid { grid-template-columns: 1fr !important; }
        @media(min-width: 560px) { .doctors-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(min-width: 1024px) { .doctors-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
