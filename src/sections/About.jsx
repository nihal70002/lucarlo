import { useEffect, useRef, useState } from "react";
import shirtImg from "../assets/images/shirt.jpg";

import jeansImg from "../assets/images/jeans.jpg";

const pillars = [
  { label: "Premium Comfort", icon: "◈" },
  { label: "Modern Fits", icon: "◈" },
  { label: "Everyday Versatility", icon: "◈" },
  { label: "Timeless Style", icon: "◈" },
];

const products = [
  { name: "Premium Shirts", img: shirtImg },
  
  { name: "Denim & Jeans", img: jeansImg },
];

function useInView(threshold = 0.2) {
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
  const [secRef, secVisible] = useInView(0.1);
  const [imgRef, imgVisible] = useInView(0.15);
  const [textRef, textVisible] = useInView(0.15);

  return (
    <>
      <section
        className="bg-black text-white py-32"
        id="about"
        ref={secRef}
      >
        <div className="max-w-6xl mx-auto px-6">

          {/* TOP LABEL */}
          <div
            className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
              secVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-xs tracking-[0.4em] uppercase text-gray-400">
              Our Story
            </span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* IMAGE COLUMN */}
            <div
              ref={imgRef}
              className={`relative h-[500px] transition-all duration-700 ${
                imgVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={products[0].img}
                className="absolute top-0 left-0 w-[65%] h-[70%] object-cover shadow-xl"
              />

              

              <img
                src={products[1].img}
                className="absolute bottom-[30%] right-[10%] w-[35%] h-[35%] object-cover opacity-90"
              />
            </div>

            {/* TEXT COLUMN */}
            <div ref={textRef}>
              <h2
                className={`text-5xl font-light mb-6 leading-tight transition-all duration-700 ${
                  textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Style built for the <br />
                <span className="italic text-gray-400">modern man</span> <br />
                every day.
              </h2>

              <div className="w-16 h-px bg-gray-600 mb-8"></div>

              <p
                className={`text-gray-400 leading-8 mb-10 transition-all duration-700 ${
                  textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Lucarlo is a contemporary menswear destination created for men who
                value comfort, confidence, and effortless everyday style. From
                premium shirts to modern T-shirts and versatile denim, our
                collections are designed to fit seamlessly into both workdays and
                weekends.
                <br />
                <br />
                Every piece reflects our belief that great clothing should feel
                right, look refined, and move naturally with your lifestyle.
                Lucarlo brings together timeless essentials and modern fits to
                help you dress with confidence wherever you go.
              </p>

              {/* PILLARS */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="text-xs tracking-widest uppercase text-gray-400 flex gap-2"
                  >
                    <span className="text-gray-600">{p.icon}</span>
                    {p.label}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#collections"
                className="text-xs tracking-[0.4em] uppercase border-b border-gray-600 pb-2 hover:border-white transition"
              >
                Explore Collection →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}