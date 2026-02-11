import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Guntur", cx: 222, cy: 340, primary: true },
  { name: "Hyderabad", cx: 210, cy: 300, primary: false },
  { name: "Vijayawada", cx: 230, cy: 330, primary: false },
  { name: "Bangalore", cx: 200, cy: 380, primary: false },
  { name: "Chennai", cx: 240, cy: 370, primary: false },
  { name: "Mumbai", cx: 145, cy: 260, primary: false },
  { name: "Delhi", cx: 195, cy: 130, primary: false },
  { name: "Kolkata", cx: 310, cy: 225, primary: false },
  { name: "Pune", cx: 155, cy: 280, primary: false },
  { name: "Visakhapatnam", cx: 250, cy: 305, primary: false },
];

// Simplified but recognizable India map path
const INDIA_PATH = `M195,52 L210,48 L225,55 L240,50 L258,58 L275,52 L290,60 L305,55 L318,65 L325,58 L335,70 L328,82 L340,90 L335,98 L345,108 L338,118 L345,130 L335,140 L340,155 L330,165 L335,178 L325,188 L330,200 L320,210 L325,222 L315,230 L320,240 L308,248 L300,260 L290,270 L280,282 L268,295 L258,310 L248,325 L238,340 L225,358 L218,370 L208,385 L198,398 L188,408 L178,415 L168,410 L155,400 L145,388 L135,372 L125,355 L118,338 L110,318 L105,298 L100,278 L98,258 L100,238 L95,218 L100,198 L108,178 L118,160 L125,142 L135,125 L148,110 L160,95 L170,82 L182,68 L195,52Z`;

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
          className="relative mx-auto max-w-3xl"
        >
          <div className="relative rounded-3xl gradient-navy p-6 sm:p-10 shadow-premium overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />

            <svg
              viewBox="60 30 320 410"
              className="relative z-10 w-full h-auto"
              fill="none"
            >
              {/* India outline */}
              <motion.path
                d={INDIA_PATH}
                fill="hsl(var(--primary-foreground) / 0.06)"
                stroke="hsl(var(--primary-foreground) / 0.2)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Connection lines from Guntur HQ */}
              {locations
                .filter((l) => !l.primary)
                .map((loc, i) => (
                  <motion.line
                    key={`line-${loc.name}`}
                    x1={222}
                    y1={340}
                    x2={loc.cx}
                    y2={loc.cy}
                    stroke="hsl(var(--secondary) / 0.25)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                  />
                ))}

              {/* Location dots */}
              {locations.map((loc, i) => (
                <g key={loc.name}>
                  {/* Ping ring for HQ */}
                  {loc.primary && (
                    <circle
                      cx={loc.cx}
                      cy={loc.cy}
                      r="12"
                      fill="none"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="1.5"
                      opacity="0.4"
                      className="animate-ping origin-center"
                      style={{ transformOrigin: `${loc.cx}px ${loc.cy}px` }}
                    />
                  )}

                  {/* Outer glow */}
                  <motion.circle
                    cx={loc.cx}
                    cy={loc.cy}
                    r={loc.primary ? 10 : 6}
                    fill={loc.primary ? "hsl(var(--secondary) / 0.2)" : "hsl(var(--secondary) / 0.1)"}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  />

                  {/* Inner dot */}
                  <motion.circle
                    cx={loc.cx}
                    cy={loc.cy}
                    r={loc.primary ? 5 : 3}
                    fill={loc.primary ? "hsl(var(--secondary))" : "hsl(var(--primary-foreground))"}
                    stroke={loc.primary ? "hsl(var(--secondary))" : "hsl(var(--primary-foreground) / 0.6)"}
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                    className="drop-shadow-md"
                  />

                  {/* City label */}
                  <motion.text
                    x={loc.cx + (loc.primary ? 9 : 7)}
                    y={loc.cy + 4}
                    fill="hsl(var(--primary-foreground))"
                    fontSize={loc.primary ? "9" : "7"}
                    fontWeight={loc.primary ? "700" : "500"}
                    opacity={loc.primary ? 1 : 0.75}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: loc.primary ? 1 : 0.75 } : {}}
                    transition={{ duration: 0.3, delay: 0.9 + i * 0.08 }}
                  >
                    {loc.name}
                    {loc.primary ? " (HQ)" : ""}
                  </motion.text>
                </g>
              ))}
            </svg>
          </div>

          {/* Location chips */}
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
