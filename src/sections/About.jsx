import { useEffect, useRef, useState } from "react";
import shirtImg from "../assets/images/shirt.jpg";
import jeansImg from "../assets/images/jeans.jpg";

const pillars = [
  { label: "Premium Comfort", number: "01" },
  { label: "Modern Fits", number: "02" },
  { label: "Everyday Versatility", number: "03" },
  { label: "Timeless Style", number: "04" },
];

const products = [
  { name: "Premium Shirts", img: shirtImg },
  { name: "Denim & Jeans", img: jeansImg },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

export default function About() {
  const [secRef, secVisible] = useInView(0.05);
  const [imgRef, imgVisible] = useInView(0.1);
  const [textRef, textVisible] = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        #about {
          font-family: 'DM Sans', sans-serif;
        }

        #about .display-font {
          font-family: 'Cormorant Garamond', serif;
        }

        #about .grain-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        #about .img-frame {
          position: relative;
          overflow: hidden;
        }

        #about .img-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 60%, rgba(0,0,0,0.4));
        }

        #about .img-main {
          transition: transform 8s ease;
        }
        #about .img-main:hover {
          transform: scale(1.04);
        }

        #about .img-secondary {
          transition: transform 8s ease;
        }
        #about .img-secondary:hover {
          transform: scale(1.04);
        }

        #about .pillar-item {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 1rem;
          transition: border-color 0.3s ease;
        }
        #about .pillar-item:hover {
          border-color: rgba(255,255,255,0.3);
        }

        #about .cta-link {
          position: relative;
          display: inline-block;
          letter-spacing: 0.3em;
          font-size: 0.7rem;
          text-transform: uppercase;
          color: white;
          text-decoration: none;
          padding-bottom: 6px;
        }
        #about .cta-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background: white;
          transition: width 0.4s ease;
        }
        #about .cta-link:hover::after {
          width: 100%;
        }

        #about .year-stamp {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.25em;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
        }

        .stagger-1 { transition-delay: 0ms; }
        .stagger-2 { transition-delay: 80ms; }
        .stagger-3 { transition-delay: 160ms; }
        .stagger-4 { transition-delay: 240ms; }
      `}</style>

      <section
        className="relative bg-[#0c0c0c] text-white py-36 overflow-hidden"
        id="about"
        ref={secRef}
      >
        {/* Grain overlay */}
        <div className="grain-overlay" />

        {/* Subtle ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "5%",
            width: "40%",
            height: "50%",
            background: "radial-gradient(ellipse, rgba(200,180,140,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* TOP SECTION HEADER */}
          <div
            className={`flex items-center justify-between mb-24 transition-all duration-1000 ${
              secVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-6">
              <div style={{ width: "2px", height: "40px", background: "rgba(200,180,140,0.6)" }} />
              <div>
                <p className="text-[0.6rem] tracking-[0.5em] uppercase text-[rgba(200,180,140,0.7)] mb-1">
                  Chapter One
                </p>
                <p className="text-[0.6rem] tracking-[0.4em] uppercase text-gray-600">
                  Our Story
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <span className="text-[0.55rem] tracking-[0.4em] uppercase text-gray-700">Est.</span>
              <span className="display-font text-2xl font-light text-gray-700 italic">2024</span>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* IMAGE COLUMN */}
            <div
              ref={imgRef}
              className={`relative transition-all duration-1000 ${
                imgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ height: "580px" }}
            >

              {/* Main image — large, left-anchored */}
              <div
                className="img-frame absolute"
                style={{
                  top: 0,
                  left: 0,
                  width: "72%",
                  height: "78%",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={products[0].img}
                  alt={products[0].name}
                  className="img-main w-full h-full object-cover"
                />
              </div>

              {/* Decorative frame border */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  width: "72%",
                  height: "78%",
                  border: "1px solid rgba(200,180,140,0.2)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />

              {/* Secondary image — bottom right, overlapping */}
              <div
                className="img-frame absolute"
                style={{
                  bottom: "30px",
                  right: 0,
                  width: "42%",
                  height: "44%",
                  boxShadow: "0 24px 50px rgba(0,0,0,0.7)",
                  zIndex: 3,
                }}
              >
                <img
                  src={products[1].img}
                  alt={products[1].name}
                  className="img-secondary w-full h-full object-cover"
                />
              </div>

              {/* Floating label on secondary image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "8px",
                  background: "rgba(0,0,0,0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "8px 14px",
                  zIndex: 5,
                }}
              >
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(200,180,140,0.8)" }}>
                  Denim & Jeans
                </p>
              </div>

              {/* Vertical year stamp */}
              <div
                className="year-stamp absolute"
                style={{ bottom: "60px", left: "-24px" }}
              >
                Manifest — 2024
              </div>

            </div>

            {/* TEXT COLUMN */}
            <div
              ref={textRef}
              className={`pt-4 md:pt-12 transition-all duration-1000 ${
                textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >

              {/* Heading */}
              <h2 className="display-font font-light leading-[1.1] mb-8" style={{ fontSize: "clamp(2.6rem, 4vw, 3.6rem)" }}>
                Style built for<br />
                the{" "}
                <em style={{ color: "rgba(200,180,140,0.85)", fontStyle: "italic" }}>
                  modern man,
                </em>
                <br />
                every day.
              </h2>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
                <div style={{ width: "40px", height: "1px", background: "rgba(200,180,140,0.5)" }} />
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(200,180,140,0.3)" }} />
              </div>

              {/* Body copy */}
              <p
                className="leading-[1.9] mb-10"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", fontWeight: 300 }}
              >
                Manifest is a contemporary menswear destination created for men
                who value comfort, confidence, and effortless everyday style.
                From premium shirts to modern T-shirts and versatile denim, our
                collections are designed to fit seamlessly into both workdays and
                weekends.
              </p>

              <p
                className="leading-[1.9] mb-12"
                style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", fontWeight: 300 }}
              >
                Every piece reflects our belief that great clothing should feel
                right, look refined, and move naturally with your lifestyle.
                Manifest brings together timeless essentials and modern fits.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-2 gap-0 mb-12">
                {pillars.map((p, i) => (
                  <div
                    key={p.label}
                    className={`pillar-item stagger-${i + 1}`}
                    style={{ paddingBottom: "1rem", paddingRight: "1rem" }}
                  >
                    <span
                      className="display-font italic"
                      style={{ fontSize: "0.7rem", color: "rgba(200,180,140,0.5)", display: "block", marginBottom: "4px" }}
                    >
                      {p.number}
                    </span>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 400,
                      }}
                    >
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <a href="#collections" className="cta-link">
                  Explore Collection →
                </a>
                <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
                <a
                  href="#about"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.7)"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
                >
                  Our Values
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}