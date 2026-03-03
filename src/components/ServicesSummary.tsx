import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, Truck, Warehouse, Package } from "lucide-react";

const keyServices = [
  { icon: Home, type: "Home Shifting", meaning: "Move household items safely door-to-door" },
  { icon: Building2, type: "Office Shifting", meaning: "Corporate relocation with minimal downtime" },
  { icon: Truck, type: "Vehicle Transport", meaning: "Two-wheeler & car transport across India" },
  { icon: Warehouse, type: "Storage & Warehousing", meaning: "Temporary storage in secure warehouses" },
  { icon: Package, type: "Packing / Unpacking", meaning: "Safe packing & unpacking with premium materials" },
];

const ServicesSummary = () => {
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
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            🧠 Summary
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl">
            Key <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-card shadow-premium border border-border"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[auto_1fr_1fr] items-center gap-4 gradient-navy px-6 py-4">
            <span className="w-10" />
            <span className="font-display text-sm font-bold text-primary-foreground uppercase tracking-wider">Service Type</span>
            <span className="font-display text-sm font-bold text-primary-foreground uppercase tracking-wider">What It Means</span>
          </div>

          {/* Table Rows */}
          {keyServices.map((svc, i) => (
            <motion.div
              key={svc.type}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className={`grid grid-cols-[auto_1fr_1fr] items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/50 ${
                i < keyServices.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <svc.icon className="h-5 w-5 text-secondary" />
              </div>
              <span className="font-display text-sm font-bold text-foreground">{svc.type}</span>
              <span className="text-sm text-muted-foreground">{svc.meaning}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSummary;
