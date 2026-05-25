"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#080F1E", borderTop: "1px solid rgba(200,169,110,0.1)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 32px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#0D7E6B,#10A88E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: "0 0 16px rgba(13,126,107,0.35)" }}>
                ✚
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", color: "#FAF8F5", fontSize: 18, fontWeight: 600 }}>FaithCircle</div>
                <div style={{ color: "rgba(200,169,110,0.75)", fontSize: 8, letterSpacing: "3px", textTransform: "uppercase", marginTop: 1 }}>Hospital</div>
              </div>
            </div>
            <p style={{ color: "rgba(250,248,245,0.4)", fontSize: 13, lineHeight: 1.8, marginBottom: 20, maxWidth: 280 }}>
              Delivering compassionate, world-class healthcare to the people of Olorunsogo, Abeokuta and Ogun State.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["Facebook", "Twitter", "Instagram"].map((s) => (
                <a key={s} href="#" style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(250,248,245,0.5)", fontSize: 12, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(13,126,107,0.2)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(13,126,107,0.4)"; (e.currentTarget as HTMLAnchorElement).style.color = "#10A88E"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.5)"; }}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ color: "#C8A96E", fontSize: 8, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 20, fontWeight: 600 }}>Quick Links</div>
            {[["Home","#home"],["About Us","#about"],["Services","#services"],["Departments","#departments"],["Our Doctors","#doctors"],["Contact","#contact"]].map(([label, href]) => (
              <a key={label} href={href} style={{ display: "block", color: "rgba(250,248,245,0.45)", fontSize: 13, padding: "5px 0", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#10A88E")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.45)")}
              >{label}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ color: "#C8A96E", fontSize: 8, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 20, fontWeight: 600 }}>Our Services</div>
            {["Emergency Care","Maternity Care","Surgery","Paediatrics","Cardiology","Laboratory","Radiology","Mental Health"].map((s) => (
              <div key={s} style={{ color: "rgba(250,248,245,0.45)", fontSize: 13, padding: "5px 0" }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "#C8A96E", fontSize: 8, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 20, fontWeight: 600 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "📍", text: "7 Mudashiru Amolegbe Close,\nOlorunsogo, Abeokuta 111101,\nOgun State" },
                { icon: "📞", text: "+1 224-523-0117", href: "tel:+12245230117" },
                { icon: "🕐", text: "Open 24 Hours · 7 Days a Week" },
                { icon: "✉️", text: "info@faithcirclehospital.ng", href: "mailto:info@faithcirclehospital.ng" },
              ].map((item, i) => (
                <a key={i} href={item.href || undefined} style={{ display: "flex", gap: 10, color: "rgba(250,248,245,0.45)", fontSize: 13, alignItems: "flex-start", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => item.href && ((e.currentTarget as HTMLAnchorElement).style.color = "#10A88E")}
                  onMouseLeave={(e) => item.href && ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.45)")}
                >
                  <span style={{ marginTop: 1, flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ whiteSpace: "pre-line" }}>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.15), transparent)", marginBottom: 24 }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ color: "rgba(250,248,245,0.2)", fontSize: 11 }}>
            © {year} FaithCircle Hospital. All rights reserved.
          </div>
          <div style={{ color: "rgba(200,169,110,0.25)", fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase" }}>
            ✦ Olorunsogo · Abeokuta · Ogun State ✦
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 1fr !important; }
        @media(min-width: 640px) { .footer-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(min-width: 1024px) { .footer-grid { grid-template-columns: 1.8fr 1fr 1fr 1.4fr !important; } }
      `}</style>
    </footer>
  );
}
