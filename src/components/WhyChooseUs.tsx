import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Clock,
  Award,
  Users,
  HeartHandshake,
  IndianRupee,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Multi-layer packing and insured transport ensure zero damage to your belongings.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Need to move at midnight? No problem. We're available round the clock for you.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges. Get the best value for your money.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "Years of experience handling residential and commercial moves with expertise.",
  },
  {
    icon: Users,
    title: "Trained Staff",
    description: "Our professional team is trained in safe handling of all types of goods.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "We prioritize your satisfaction with personalized service and dedicated support.",
  },
];

const WhyChooseUs = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="why-us" className="section-padding gradient-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Why Best Packers
          </span>
          <h2 className="font-display text-3xl font-black text-primary-foreground sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/65">
            We're committed to making your relocation stress-free with our professional, reliable,
            and affordable services.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReasonCard = ({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:bg-primary-foreground/10"
    >
      <div className="mb-4 inline-flex rounded-xl gradient-orange p-3 shadow-glow-orange transition-transform duration-300 group-hover:scale-110">
        <reason.icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="mb-2 font-display text-lg font-bold text-primary-foreground">
        {reason.title}
      </h3>
      <p className="text-sm leading-relaxed text-primary-foreground/65">
        {reason.description}
      </p>
    </motion.div>
  );
};

export default WhyChooseUs;
