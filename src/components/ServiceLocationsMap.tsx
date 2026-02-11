import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Guntur", top: "58%", left: "38%", primary: true },
  { name: "Hyderabad", top: "48%", left: "36%" },
  { name: "Vijayawada", top: "55%", left: "40%" },
  { name: "Bangalore", top: "68%", left: "35%" },
  { name: "Chennai", top: "65%", left: "42%" },
  { name: "Mumbai", top: "45%", left: "22%" },
  { name: "Delhi", top: "22%", left: "32%" },
  { name: "Kolkata", top: "38%", left: "55%" },
  { name: "Pune", top: "48%", left: "24%" },
  { name: "Visakhapatnam", top: "50%", left: "43%" },
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
          className="relative mx-auto max-w-4xl"
        >
          {/* India map outline SVG */}
          <div className="relative aspect-[4/5] rounded-3xl gradient-navy p-8 shadow-premium overflow-hidden">
            {/* Simplified India map shape */}
            <svg viewBox="0 0 400 500" fill="none" className="h-full w-full text-primary-foreground/20">
              <path d="M180,30 L220,25 L260,40 L280,60 L300,50 L320,70 L310,100 L330,120 L340,150 L350,180 L340,200 L350,230 L340,260 L320,280 L300,310 L280,340 L260,370 L230,400 L200,420 L180,440 L160,430 L140,400 L120,370 L100,340 L90,300 L80,260 L70,230 L80,200 L70,170 L80,140 L100,120 L120,100 L140,80 L160,50 Z" fill="hsl(var(--primary-foreground))" fillOpacity="0.05" stroke="hsl(var(--primary-foreground))" strokeOpacity="0.15" strokeWidth="2"/>
            </svg>

            {/* Location pins */}
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="absolute group"
                style={{ top: loc.top, left: loc.left }}
              >
                {loc.primary && (
                  <span className="absolute -inset-3 animate-ping rounded-full bg-secondary/30" />
                )}
                <div className={`relative flex items-center justify-center rounded-full ${
                  loc.primary ? "h-6 w-6 gradient-orange shadow-glow-orange" : "h-4 w-4 bg-secondary/80"
                }`}>
                  <MapPin className={`${loc.primary ? "h-3.5 w-3.5" : "h-2.5 w-2.5"} text-primary-foreground`} />
                </div>
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-card px-3 py-1 text-xs font-bold text-foreground shadow-lg opacity-0 transition-opacity group-hover:opacity-100">
                  {loc.name}
                  {loc.primary && <span className="text-secondary ml-1">(HQ)</span>}
                </div>
              </motion.div>
            ))}

            {/* Connection lines from Guntur */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {locations.filter(l => !l.primary).map((loc, i) => (
                <motion.line
                  key={loc.name}
                  x1="38" y1="58"
                  x2={loc.left.replace('%', '')} y2={loc.top.replace('%', '')}
                  stroke="hsl(var(--secondary))"
                  strokeOpacity="0.2"
                  strokeWidth="0.3"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                />
              ))}
            </svg>
          </div>

          {/* Location list below map */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
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
