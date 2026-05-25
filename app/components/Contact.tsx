"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", department: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ background: "var(--color-cream)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ color: "#0D7E6B", fontSize: 9, letterSpacing: "4px", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: 16 }}>
            ✦ Reach Us ✦
          </span>
          <div className="divider" style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,6vw,56px)", fontWeight: 500, color: "var(--color-navy)", lineHeight: 1.1, marginBottom: 16 }}>
            Visit or{" "}
            <em style={{ color: "#0D7E6B", fontStyle: "italic" }}>Contact Us</em>
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "clamp(13px,2vw,15px)", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Whether you need to book an appointment, ask a question, or arrive for emergency care — we are here for you.
          </p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
          {/* Info column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Map placeholder */}
            <div style={{ borderRadius: 14, overflow: "hidden", height: 220, position: "relative", boxShadow: "0 8px 32px rgba(11,31,58,0.1)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.351!3d7.161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDknNDMuNiJOIDPCsDIxJzAzLjYiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FaithCircle Hospital Location"
              />
            </div>

            {/* Info cards */}
            {[
              {
                icon: "📍",
                label: "Address",
                value: "7 Mudashiru Amolegbe Close",
                sub: "Olorunsogo, Abeokuta 111101, Ogun State",
                bg: "var(--color-navy)",
                light: false,
              },
              {
                icon: "📞",
                label: "Phone",
                value: "+1 224-523-0117",
                sub: "Available 24 hours, 7 days a week",
                bg: "#fff",
                light: true,
                href: "tel:+12245230117",
              },
              {
                icon: "🕐",
                label: "Hours",
                value: "Open 24 Hours",
                sub: "Emergency services always available",
                bg: "#fff",
                light: true,
              },
              {
                icon: "✉️",
                label: "Email",
                value: "info@faithcirclehospital.ng",
                sub: "We respond within 24 hours",
                bg: "#fff",
                light: true,
                href: "mailto:info@faithcirclehospital.ng",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href || undefined}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  background: item.bg,
                  borderRadius: 12,
                  padding: "18px 20px",
                  border: item.light ? "1px solid rgba(11,31,58,0.07)" : "none",
                  boxShadow: item.light ? "0 2px 10px rgba(11,31,58,0.04)" : "0 4px 20px rgba(11,31,58,0.18)",
                  textDecoration: "none",
                  transition: "transform 0.2s",
                  cursor: item.href ? "pointer" : "default",
                }}
                onMouseEnter={(e) => item.href && ((e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)")}
                onMouseLeave={(e) => item.href && ((e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)")}
              >
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: item.light ? "rgba(13,126,107,0.08)" : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: item.light ? "var(--color-muted)" : "rgba(200,169,110,0.7)", fontSize: 8, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 4, fontWeight: 600 }}>
                    {item.label}
                  </div>
                  <div style={{ color: item.light ? "var(--color-navy)" : "#FAF8F5", fontSize: 15, fontWeight: 600, fontFamily: "var(--font-display)" }}>
                    {item.value}
                  </div>
                  <div style={{ color: item.light ? "var(--color-muted)" : "rgba(250,248,245,0.5)", fontSize: 12, marginTop: 2 }}>
                    {item.sub}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form column */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "clamp(24px,5vw,44px)", border: "1px solid rgba(11,31,58,0.07)", boxShadow: "0 8px 40px rgba(11,31,58,0.07)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: 28, fontWeight: 600, marginBottom: 12 }}>
                  Message Received
                </h3>
                <p style={{ color: "var(--color-muted)", fontSize: 14, lineHeight: 1.8, maxWidth: 360, margin: "0 auto 28px" }}>
                  Thank you for contacting FaithCircle Hospital. A member of our team will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ background: "linear-gradient(135deg,#0D7E6B,#10A88E)", color: "#FAF8F5", border: "none", padding: "12px 28px", borderRadius: 8, fontSize: 11, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", cursor: "pointer" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: "clamp(22px,4vw,28px)", fontWeight: 600, marginBottom: 6 }}>
                  Book an Appointment
                </h3>
                <p style={{ color: "var(--color-muted)", fontSize: 13, marginBottom: 32, lineHeight: 1.7 }}>
                  Fill in your details and we will confirm your appointment promptly.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { key: "phone", label: "Phone Number", type: "tel", placeholder: "Your phone number" },
                    { key: "email", label: "Email Address", type: "email", placeholder: "Your email address" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={{ display: "block", color: "var(--color-muted)", fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: 7 }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: "100%", boxSizing: "border-box", padding: "12px 16px", border: "1px solid rgba(11,31,58,0.15)", borderRadius: 8, fontSize: 14, color: "var(--color-navy)", background: "var(--color-cream)", outline: "none", transition: "border-color 0.2s" }}
                        onFocus={(e) => (e.target.style.borderColor = "#0D7E6B")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(11,31,58,0.15)")}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: "block", color: "var(--color-muted)", fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: 7 }}>
                      Department / Service
                    </label>
                    <select
                      required
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      style={{ width: "100%", boxSizing: "border-box", padding: "12px 16px", border: "1px solid rgba(11,31,58,0.15)", borderRadius: 8, fontSize: 14, color: "var(--color-navy)", background: "var(--color-cream)", outline: "none", cursor: "pointer" }}
                    >
                      <option value="">Select a department</option>
                      {["General Medicine","Surgery","Obstetrics & Gynaecology","Paediatrics","Cardiology","Mental Health","Dental Care","Laboratory","Radiology","Emergency"].map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", color: "var(--color-muted)", fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginBottom: 7 }}>
                      Message / Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your concern or preferred appointment time..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ width: "100%", boxSizing: "border-box", padding: "12px 16px", border: "1px solid rgba(11,31,58,0.15)", borderRadius: 8, fontSize: 14, color: "var(--color-navy)", background: "var(--color-cream)", outline: "none", resize: "vertical", fontFamily: "var(--font-body)", transition: "border-color 0.2s" }}
                      onFocus={(e) => (e.target.style.borderColor = "#0D7E6B")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(11,31,58,0.15)")}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ width: "100%", background: "linear-gradient(135deg, #0B1F3A, #132744)", color: "#FAF8F5", border: "none", padding: 15, borderRadius: 8, fontSize: 11, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", transition: "opacity 0.2s", marginTop: 4 }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.87")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Send Appointment Request ✚
                  </button>

                  <p style={{ color: "var(--color-muted)", fontSize: 12, textAlign: "center" }}>
                    Or call us directly:{" "}
                    <a href="tel:+12245230117" style={{ color: "#0D7E6B", fontWeight: 600, textDecoration: "none" }}>
                      +1 224-523-0117
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr !important; }
        @media(min-width: 1024px) { .contact-grid { grid-template-columns: 1fr 1fr !important; gap: 56px !important; } }
      `}</style>
    </section>
  );
}
