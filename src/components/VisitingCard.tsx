import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import visitingCard from "@/assets/visiting-card.jpg";

const VisitingCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Contact Card
          </span>
          <h2 className="mb-8 font-display text-3xl font-black text-foreground sm:text-4xl">
            Our <span className="text-gradient">Visiting Card</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-premium border border-border"
          >
            <img
              src={visitingCard}
              alt="Best Packers & Movers Guntur - Visiting Card - Contact Vasanth M at 97000 67784"
              className="w-full h-auto"
            />
          </motion.div>
          <p className="mt-4 text-muted-foreground">
            Save our number or scan to connect with us instantly!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitingCard;
