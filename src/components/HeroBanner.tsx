import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Shield, Clock, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import serviceRes from "@/assets/service-residential.jpg";
import serviceOffice from "@/assets/service-office.jpg";

const slides = [
  {
    image: heroBg,
    title: "Your Trusted",
    highlight: "Packers & Movers",
    subtitle: "Partner",
    description: "Professional household & office goods packing, moving, and relocation services — available 24/7 across Guntur and beyond.",
  },
  {
    image: serviceRes,
    title: "Safe & Secure",
    highlight: "Residential",
    subtitle: "Moving",
    description: "Complete household shifting with multi-layer packing, insurance coverage, and doorstep delivery. Your belongings are our responsibility.",
  },
  {
    image: serviceOffice,
    title: "Expert",
    highlight: "Office",
    subtitle: "Relocation",
    description: "Seamless office shifting with minimal downtime. IT equipment, furniture, and documents handled with professional care.",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => setCurrent(i);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].highlight}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-secondary/5 blur-2xl" />

      <div className="container relative z-10 mx-auto px-4 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 backdrop-blur-sm"
          >
            <Shield className="h-4 w-4 text-secondary" />
            <span className="font-display text-xs font-semibold tracking-wider text-secondary uppercase">
              Trusted Since Years • Guntur, AP
            </span>
          </motion.div>

          {/* Heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 font-display text-4xl font-black leading-tight text-primary-foreground sm:text-5xl lg:text-7xl">
                {slides[current].title}{" "}
                <span className="text-gradient">{slides[current].highlight}</span>{" "}
                {slides[current].subtitle}
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75 sm:text-xl">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="tel:9700067784"
              className="group flex items-center justify-center gap-2 rounded-full gradient-orange px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-glow-orange transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call: 97000 67784
            </a>
            <Link
              to="/services"
              className="group flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-display text-base font-bold text-primary-foreground backdrop-blur-sm transition-all hover:border-secondary hover:bg-secondary/10"
            >
              Our Services
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { icon: Clock, label: "24/7 Service", value: "Always" },
              { icon: Truck, label: "Moves Done", value: "500+" },
              { icon: Shield, label: "Safe Delivery", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-secondary" />
                <div className="font-display text-xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-xs text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slider controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-primary-foreground/10 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20" aria-label="Previous slide">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-primary-foreground/10 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20" aria-label="Next slide">
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-secondary" : "w-2.5 bg-primary-foreground/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
