import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Premium Fabric Comfort",
    desc: "Our collections are selected with a focus on comfort, softness, and durability so you feel confident throughout your day.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Comfort",
  },
  {
    number: "02",
    title: "Modern Everyday Fits",
    desc: "From casual outings to office-ready looks, Manifest offers versatile styles designed for modern lifestyles.",
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&q=80",
    tag: "Style",
  },
  {
    number: "03",
    title: "Complete Menswear Range",
    desc: "Shirts, T-shirts, denim, and essentials—all carefully chosen to help you build a complete wardrobe in one place.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tag: "Collection",
  },
  {
    number: "04",
    title: "Reliable Quality Selection",
    desc: "Every piece available at Manifest is selected to meet consistent quality expectations you can rely on.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    tag: "Quality",
  },
  {
    number: "05",
    title: "Affordable Premium Style",
    desc: "We believe great style should be accessible—our collections balance quality, comfort, and value.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    tag: "Value",
  },
];

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  const isLarge = index === 0;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isLarge ? "span 2" : "span 1",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.8s ease ${index * 120}ms, transform 0.8s ease ${index * 120}ms`,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        background: "#0e0e0c",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${feature.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.9s ease",
          filter: "saturate(0.5) contrast(1.1)",
          opacity: hovered ? 0.55 : 0.35,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(14,14,12,0.5), rgba(14,14,12,0.92))",
        }}
      />

      <div
        style={{
          position: "relative",
          padding: isLarge ? "3.5rem" : "2.8rem",
          height: isLarge ? "380px" : "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span
            style={{
              fontSize: "4rem",
              color: "rgba(245,240,232,0.15)",
            }}
          >
            {feature.number}
          </span>

          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.4)",
            }}
          >
            {feature.tag}
          </span>
        </div>

        <div>
          <div
            style={{
              width: hovered ? "100%" : "2.5rem",
              height: "1px",
              background: "rgba(245,240,232,0.3)",
              marginBottom: "1.4rem",
              transition: "width 0.6s ease",
            }}
          />

          <h3
            style={{
              fontSize: isLarge ? "2rem" : "1.5rem",
              color: "#f5f0e8",
              marginBottom: "1rem",
            }}
          >
            {feature.title}
          </h3>

          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(245,240,232,0.6)",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {feature.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const headerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f7f3ee] py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div
          ref={headerRef}
          className={`mb-20 transition ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-3">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-light text-black">
            Why <em className="text-gray-500">Manifest</em><br />
            stands apart
          </h2>

          <p className="text-gray-500 max-w-md mt-6">
            At Manifest, we focus on offering comfortable fabrics, modern styles,
            and reliable quality so every customer can find clothing that fits
            both their lifestyle and confidence.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}