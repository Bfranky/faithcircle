"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80);
    return () => clearTimeout(t);
  }, []);

  const a = (d = 0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${d}ms, transform 0.7s ease ${d}ms`,
  });

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=85&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(11,31,58,0.93) 0%, rgba(11,31,58,0.78) 50%, rgba(11,31,58,0.5) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to top, #FAF8F5, transparent)",
        }}
      />

      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(13,126,107,0.15)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "0%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          border: "1px solid rgba(200,169,110,0.1)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 24px 120px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            ...a(0),
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(13,126,107,0.15)",
            border: "1px solid rgba(13,126,107,0.35)",
            borderRadius: 50,
            padding: "6px 18px",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#10A88E",
              display: "inline-block",
              animation: "pulse-dot 2s infinite",
            }}
          />
          <span
            style={{
              color: "#10A88E",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
            }}
          >
            Open 24 Hours · Emergency Care Available
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            ...a(100),
            fontFamily: "var(--font-display)",
            fontSize: "clamp(42px, 8vw, 86px)",
            fontWeight: 600,
            lineHeight: 1.0,
            color: "#FAF8F5",
            marginBottom: 8,
          }}
        >
          Compassionate
        </h1>
        <h1
          style={{
            ...a(160),
            fontFamily: "var(--font-display)",
            fontSize: "clamp(42px, 8vw, 86px)",
            fontWeight: 300,
            lineHeight: 1.0,
            color: "rgba(200,169,110,0.92)",
            fontStyle: "italic",
            marginBottom: 24,
          }}
        >
          Healthcare
        </h1>

        <p
          style={{
            ...a(220),
            color: "rgba(250,248,245,0.7)",
            fontSize: "clamp(14px, 2.5vw, 17px)",
            lineHeight: 1.8,
            maxWidth: 520,
            marginBottom: 40,
          }}
        >
          FaithCircle Hospital delivers world-class medical care with warmth and
          dignity. Serving Olorunsogo, Abeokuta and all of Ogun State — every
          day, around the clock.
        </p>

        {/* Info pills */}
        <div
          style={{
            ...a(280),
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {[
            ["📍", "7 Mudashiru Amolegbe Close, Olorunsogo, Abeokuta"],
            ["📞", "+1 224-523-0117"],
            ["🕐", "Open 24 Hours, 7 Days"],
          ].map(([icon, text]) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "rgba(250,248,245,0.65)",
                fontSize: 12,
                background: "rgba(255,255,255,0.05)",
                padding: "7px 14px",
                borderRadius: 50,
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          style={{
            ...a(340),
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <a
            href="#contact"
            style={{
              background: "linear-gradient(135deg, #0D7E6B, #10A88E)",
              color: "#FAF8F5",
              padding: "15px 36px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(13,126,107,0.4)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.87")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Book Appointment
          </a>
          <a
            href="#services"
            style={{
              background: "rgba(255,255,255,0.07)",
              color: "#FAF8F5",
              padding: "15px 36px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.13)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
            }
          >
            Our Services
          </a>
          <a
            href="tel:+12245230117"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(200,169,110,0.12)",
              color: "#C8A96E",
              padding: "15px 28px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "1px",
              textDecoration: "none",
              border: "1px solid rgba(200,169,110,0.25)",
            }}
          >
            <span>✆</span> Emergency
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: vis ? 0.5 : 0,
          transition: "opacity 1s ease 1.2s",
          zIndex: 2,
          animation: vis ? "none" : undefined,
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, transparent, #C8A96E)",
            animation: "fadeIn 2s ease infinite alternate",
          }}
        />
        <span
          style={{
            color: "#C8A96E",
            fontSize: 8,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
