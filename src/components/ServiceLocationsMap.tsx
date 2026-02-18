import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Guntur", cx: 79.5, cy: 16.3, primary: true },
  { name: "Hyderabad", cx: 78.5, cy: 17.4, primary: false },
  { name: "Vijayawada", cx: 80.6, cy: 16.5, primary: false },
  { name: "Bangalore", cx: 77.6, cy: 13.0, primary: false },
  { name: "Chennai", cx: 80.3, cy: 13.1, primary: false },
  { name: "Mumbai", cx: 72.9, cy: 19.1, primary: false },
  { name: "Delhi", cx: 77.2, cy: 28.6, primary: false },
  { name: "Kolkata", cx: 88.4, cy: 22.6, primary: false },
  { name: "Pune", cx: 73.9, cy: 18.5, primary: false },
  { name: "Visakhapatnam", cx: 83.3, cy: 17.7, primary: false },
  { name: "Tirupati", cx: 79.4, cy: 13.6, primary: false },
  { name: "Rajahmundry", cx: 81.8, cy: 17.0, primary: false },
  { name: "Warangal", cx: 79.6, cy: 18.0, primary: false },
  { name: "Kurnool", cx: 78.0, cy: 15.8, primary: false },
  { name: "Nellore", cx: 79.9, cy: 14.4, primary: false },
];

// Convert geo coords to SVG coords
const toSvg = (lon: number, lat: number): [number, number] => {
  const x = (lon - 68) * 18;
  const y = (37 - lat) * 18;
  return [x, y];
};

// Detailed India map SVG path (simplified but accurate outline)
const INDIA_PATH = `M172,18 L178,15 L185,12 L195,10 L205,14 L215,10 L228,8 L240,12 L252,8 L260,15 L270,12 L280,18 L290,15 L298,22 L305,18 L315,25 L325,20 L335,28 L340,22 L348,30 L355,25 L362,32 L368,28 L372,35 L365,42 L370,50 L362,58 L368,65 L360,72 L365,80 L358,88 L362,95 L355,102 L360,110 L352,118 L358,125 L350,132 L355,140 L348,148 L342,155 L348,162 L340,170 L345,178 L338,185 L342,192 L335,200 L340,208 L332,215 L338,222 L330,228 L335,235 L328,242 L322,250 L315,258 L308,265 L300,272 L292,280 L285,288 L278,295 L270,302 L262,310 L255,318 L248,325 L240,332 L232,340 L225,348 L218,355 L210,362 L202,368 L195,375 L188,380 L180,385 L172,388 L165,382 L158,375 L150,368 L142,360 L135,352 L128,342 L122,332 L115,320 L110,308 L105,295 L100,282 L98,268 L95,255 L92,240 L90,225 L88,210 L90,195 L85,180 L88,165 L92,150 L98,135 L105,120 L112,108 L120,95 L128,82 L138,70 L148,58 L158,48 L165,38 L172,28 L172,18Z`;

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
            <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />

            <svg
              viewBox="30 -10 420 420"
              className="relative z-10 w-full h-auto"
              fill="none"
            >
              {/* India outline */}
              <motion.path
                d={INDIA_PATH}
                fill="hsl(var(--primary-foreground) / 0.06)"
                stroke="hsl(var(--primary-foreground) / 0.25)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Connection lines from Guntur HQ */}
              {locations
                .filter((l) => !l.primary)
                .map((loc, i) => {
                  const [hqX, hqY] = toSvg(79.5, 16.3);
                  const [lx, ly] = toSvg(loc.cx, loc.cy);
                  return (
                    <motion.line
                      key={`line-${loc.name}`}
                      x1={hqX}
                      y1={hqY}
                      x2={lx}
                      y2={ly}
                      stroke="hsl(var(--secondary) / 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 3"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1, delay: 0.8 + i * 0.08 }}
                    />
                  );
                })}

              {/* Location dots */}
              {locations.map((loc, i) => {
                const [cx, cy] = toSvg(loc.cx, loc.cy);
                return (
                  <g key={loc.name}>
                    {loc.primary && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="14"
                        fill="none"
                        stroke="hsl(var(--secondary))"
                        strokeWidth="1.5"
                        opacity="0.4"
                        className="animate-ping origin-center"
                        style={{ transformOrigin: `${cx}px ${cy}px` }}
                      />
                    )}

                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={loc.primary ? 10 : 6}
                      fill={loc.primary ? "hsl(var(--secondary) / 0.25)" : "hsl(var(--secondary) / 0.1)"}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
                    />

                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={loc.primary ? 5 : 3}
                      fill={loc.primary ? "hsl(var(--secondary))" : "hsl(var(--primary-foreground))"}
                      stroke={loc.primary ? "hsl(var(--secondary))" : "hsl(var(--primary-foreground) / 0.6)"}
                      strokeWidth="1"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + i * 0.06 }}
                      className="drop-shadow-md"
                    />

                    <motion.text
                      x={cx + (loc.primary ? 10 : 7)}
                      y={cy + 4}
                      fill="hsl(var(--primary-foreground))"
                      fontSize={loc.primary ? "9" : "7"}
                      fontWeight={loc.primary ? "700" : "500"}
                      opacity={loc.primary ? 1 : 0.75}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: loc.primary ? 1 : 0.75 } : {}}
                      transition={{ duration: 0.3, delay: 0.9 + i * 0.06 }}
                    >
                      {loc.name}
                      {loc.primary ? " (HQ)" : ""}
                    </motion.text>
                  </g>
                );
              })}
            </svg>
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
