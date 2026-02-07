import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";

const pricingData = [
  { type: "1 BHK House Shifting", d50: "₹6,000 - 11,000", d500: "₹11,000 - 16,000", d1000: "₹20,000 - 25,000", d1500: "₹25,000 - 30,000", d2500: "₹30,000 - 35,000" },
  { type: "2 BHK House Shifting", d50: "₹12,000 - 15,000", d500: "₹20,000 - 23,000", d1000: "₹25,000 - 30,000", d1500: "₹32,000 - 40,000", d2500: "₹40,000 - 45,000" },
  { type: "3 BHK House Shifting", d50: "₹15,000 - 18,000", d500: "₹25,000 - 30,000", d1000: "₹35,000 - 40,000", d1500: "₹45,000 - 50,000", d2500: "₹50,000 - 65,000" },
  { type: "Villa", d50: "₹25,000 - 30,000", d500: "₹35,000 - 40,000", d1000: "₹50,000 - 60,000", d1500: "₹55,000 - 65,000", d2500: "₹70,000 - 90,000" },
  { type: "Car Shifting", d50: "₹9,000 - 11,500", d500: "₹12,000 - 14,500", d1000: "₹17,000 - 20,000", d1500: "₹21,000 - 25,000", d2500: "-" },
  { type: "Bike Shifting", d50: "₹3,000 - 7,000", d500: "₹7,000 - 10,500", d1000: "₹10,000 - 15,000", d1500: "₹15,000 - 18,000", d2500: "-" },
];

const columns = [
  { key: "type", label: "Shifting Type" },
  { key: "d50", label: "Up to 50 KM" },
  { key: "d500", label: "Up to 500 KM" },
  { key: "d1000", label: "Up to 1000 KM" },
  { key: "d1500", label: "Up to 1500 KM" },
  { key: "d2500", label: "Within 2500 KM" },
];

const PricingTable = () => {
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
            Transparent Pricing
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Price List</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Affordable and transparent pricing with no hidden charges. Prices may vary based on quantity and items.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl shadow-premium"
        >
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="gradient-orange">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-4 text-center font-display text-sm font-bold text-primary-foreground uppercase tracking-wider first:text-left"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, i) => (
                <tr
                  key={row.type}
                  className={`border-b border-border transition-colors hover:bg-muted/50 ${
                    i % 2 === 0 ? "bg-card" : "bg-muted/30"
                  }`}
                >
                  <td className="px-4 py-4 font-display text-sm font-bold text-secondary">
                    {row.type}
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-foreground">{row.d50}</td>
                  <td className="px-4 py-4 text-center text-sm text-foreground">{row.d500}</td>
                  <td className="px-4 py-4 text-center text-sm text-foreground">{row.d1000}</td>
                  <td className="px-4 py-4 text-center text-sm text-foreground">{row.d1500}</td>
                  <td className="px-4 py-4 text-center text-sm text-foreground">{row.d2500}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            * Prices are approximate and may vary based on the quantity and type of items. Contact us for an exact quote.
          </p>
          <a
            href="tel:9700067784"
            className="inline-flex items-center gap-2 rounded-full gradient-orange px-8 py-3.5 font-display text-sm font-bold text-primary-foreground shadow-glow-orange transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Get Exact Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
