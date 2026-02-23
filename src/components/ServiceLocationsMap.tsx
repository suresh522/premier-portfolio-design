import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import indiaMap from "@/assets/india-map.jpg";

const locations = [
  { name: "Guntur (HQ)", top: "62%", left: "44%", primary: true },
  { name: "Hyderabad", top: "55%", left: "42%", primary: false },
  { name: "Vijayawada", top: "60%", left: "47%", primary: false },
  { name: "Bangalore", top: "72%", left: "40%", primary: false },
  { name: "Chennai", top: "72%", left: "48%", primary: false },
  { name: "Mumbai", top: "48%", left: "22%", primary: false },
  { name: "Delhi", top: "22%", left: "38%", primary: false },
  { name: "Kolkata", top: "40%", left: "65%", primary: false },
  { name: "Pune", top: "52%", left: "26%", primary: false },
  { name: "Visakhapatnam", top: "56%", left: "52%", primary: false },
  { name: "Tirupati", top: "68%", left: "45%", primary: false },
  { name: "Rajahmundry", top: "58%", left: "50%", primary: false },
  { name: "Warangal", top: "53%", left: "45%", primary: false },
  { name: "Kurnool", top: "60%", left: "38%", primary: false },
  { name: "Nellore", top: "66%", left: "46%", primary: false },
];

const ServiceLocationsMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Our Reach
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Service <span className="text-gradient">Locations</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We provide relocation services across all major cities in India with Guntur as our headquarters.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="relative rounded-3xl bg-card p-6 sm:p-10 shadow-premium overflow-hidden border border-border">
            {/* India Map Image */}
            <div className="relative">
              <img
                src={indiaMap}
                alt="India Map showing Best Packers and Movers service locations"
                className="w-full h-auto rounded-2xl"
              />

              {/* Location markers overlay */}
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  className="absolute group"
                  style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                >
                  {/* Ping animation for HQ */}
                  {loc.primary && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="absolute h-6 w-6 rounded-full bg-secondary/40 animate-ping" />
                    </span>
                  )}

                  {/* Marker dot */}
                  <div
                    className={`relative z-10 rounded-full border-2 shadow-lg cursor-pointer ${
                      loc.primary
                        ? "h-5 w-5 bg-secondary border-secondary shadow-glow-orange"
                        : "h-3 w-3 bg-primary border-primary/80"
                    }`}
                  />

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div
                      className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold shadow-lg ${
                        loc.primary
                          ? "gradient-orange text-primary-foreground"
                          : "gradient-navy text-primary-foreground"
                      }`}
                    >
                      {loc.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Location chips */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.04 }}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ${
                  loc.primary
                    ? "gradient-orange text-primary-foreground shadow-glow-orange"
                    : "bg-card text-foreground border border-border shadow-sm"
                }`}
              >
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {loc.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceLocationsMap;
