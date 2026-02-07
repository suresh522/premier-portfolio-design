import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Clock, Truck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional packers and movers loading truck"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
      </div>

      {/* Decorative elements */}
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6 font-display text-4xl font-black leading-tight text-primary-foreground sm:text-5xl lg:text-7xl"
          >
            Your Trusted{" "}
            <span className="text-gradient">Packers &amp; Movers</span>{" "}
            Partner
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75 sm:text-xl"
          >
            Professional household &amp; office goods packing, moving, and
            relocation services — available 24/7 across Guntur and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="tel:9700067784"
              className="group flex items-center justify-center gap-2 rounded-full gradient-orange px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-glow-orange transition-all hover:scale-105 hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call: 97000 67784
            </a>
            <a
              href="#services"
              className="group flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-display text-base font-bold text-primary-foreground backdrop-blur-sm transition-all hover:border-secondary hover:bg-secondary/10"
            >
              Our Services
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Quick stats */}
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
                <div className="font-display text-xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-10 w-6 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
