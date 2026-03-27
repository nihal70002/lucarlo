import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

const contactDetails = [
  {
    label: "Location",
    value: "Manjeri & Mukkam",
    sub: "Kerala, India",
    icon: "◎",
  },
  {
    label: "Phone",
    value: "+91 9539955073",
    sub: "Call / WhatsApp Available",
    icon: "◎",
  },
  {
    label: "Instagram",
    value: "@manifest_fashion.in",
    sub: "Follow for latest arrivals",
    icon: "◎",
  },
  {
    label: "Service",
    value: "We Deliver All India",
    sub: "Fast dispatch available",
    icon: "◎",
  },
  {
    label: "Policy",
    value: "No Exchange / No Refund",
    sub: "Please confirm before ordering",
    icon: "◎",
  },
];

export default function Contact() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [formRef, formVisible] = useInView(0.1);
  const [infoRef, infoVisible] = useInView(0.1);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => setSent(false), 4000);

    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#f7f3ee] py-32" id="contact">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div
          ref={headerRef}
          className={`mb-20 transition ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-3">
            Contact Us
          </p>

          <h2 className="text-5xl font-light text-black">
            Visit <em className="text-gray-500">manifest</em>
          </h2>

          <p className="text-gray-500 max-w-md mt-6">
            Discover premium shirts, T-shirts, denim, and modern menswear
            collections at manifest. Visit our store or contact us for latest
            arrivals and availability across India.
          </p>
        </div>

        {/* LAYOUT */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* FORM */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`transition ${
              formVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState((s) => ({
                  ...s,
                  name: e.target.value,
                }))
              }
              className="w-full mb-6 border-b border-gray-400 bg-transparent pb-3 outline-none"
            />

            <input
              type="email"
              placeholder="Your email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState((s) => ({
                  ...s,
                  email: e.target.value,
                }))
              }
              className="w-full mb-6 border-b border-gray-400 bg-transparent pb-3 outline-none"
            />

            <textarea
              placeholder="Message"
              required
              value={formState.message}
              onChange={(e) =>
                setFormState((s) => ({
                  ...s,
                  message: e.target.value,
                }))
              }
              className="w-full mb-6 border-b border-gray-400 bg-transparent pb-3 outline-none"
            />

            {sent ? (
              <p className="text-gray-600 text-sm">
                Message received — we'll contact you soon
              </p>
            ) : (
              <button className="bg-black text-white px-8 py-3 text-sm tracking-widest uppercase">
                Send Message
              </button>
            )}
          </form>

          {/* INFO */}
          <div ref={infoRef}>
            {contactDetails.map((item, i) => (
              <div
                key={item.label}
                className={`mb-10 transition ${
                  infoVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className="text-xs tracking-widest uppercase text-gray-500">
                  {item.label}
                </p>

                <p className="text-2xl font-light text-black">
                  {item.value}
                </p>

                <p className="text-gray-500 text-sm">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* FOOTER BAND */}
        <div className="mt-24 flex flex-wrap justify-between items-center gap-6 border-t pt-8">
          <span className="tracking-widest text-lg">
            manifest
          </span>

          <nav className="flex gap-6 text-sm">
            <a href="#collections">Collections</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <span className="text-gray-500 text-xs">
            © {new Date().getFullYear()} manifest — Kozhikode, Kerala
          </span>
        </div>

      </div>
    </section>
  );
}