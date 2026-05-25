"use client";
export default function EmergencyBanner() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0D7E6B 0%, #0B1F3A 100%)",
        padding: "64px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: "-40%", right: "-5%", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60%", left: "10%", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(200,169,110,0.08)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="emergency-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32, textAlign: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#C8A96E", display: "inline-block", animation: "pulse-dot 1.5s infinite" }} />
              <span style={{ color: "rgba(200,169,110,0.9)", fontSize: 9, letterSpacing: "4px", textTransform: "uppercase", fontWeight: 600 }}>
                Emergency Services Active
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", color: "#FAF8F5", fontSize: "clamp(28px,5vw,48px)", fontWeight: 500, lineHeight: 1.1, marginBottom: 12 }}>
              Medical Emergency?
            </h2>
            <p style={{ color: "rgba(250,248,245,0.65)", fontSize: "clamp(13px,2vw,15px)", lineHeight: 1.8, maxWidth: 440, margin: "0 auto" }}>
              Our emergency team is available 24 hours a day, 7 days a week. Do not wait — call us immediately or come directly to our facility.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a
              href="tel:+12245230117"
              style={{ display: "flex", alignItems: "center", gap: 10, background: "#FAF8F5", color: "var(--color-navy)", padding: "16px 36px", borderRadius: 8, fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 28px rgba(0,0,0,0.2)", transition: "opacity 0.2s", letterSpacing: "0.3px", fontFamily: "var(--font-display)" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{ fontSize: 20 }}>📞</span>
              +1 224-523-0117
            </a>
            <a
              href="#contact"
              style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", color: "#FAF8F5", padding: "16px 32px", borderRadius: 8, fontSize: 12, fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", letterSpacing: "1.5px", textTransform: "uppercase" }}
            >
              Book Appointment
            </a>
          </div>
          <p style={{ color: "rgba(250,248,245,0.4)", fontSize: 11, letterSpacing: "1px" }}>
            📍 7 Mudashiru Amolegbe Close, Olorunsogo, Abeokuta, Ogun State
          </p>
        </div>
      </div>

      <style>{`
        @media(min-width: 768px) {
          .emergency-inner { flex-direction: row !important; text-align: left !important; justify-content: space-between !important; }
          .emergency-inner > div:first-child p { margin: 0 !important; }
        }
      `}</style>
    </section>
  );
}
