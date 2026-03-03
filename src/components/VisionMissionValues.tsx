import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Heart, Star, ShieldCheck, Handshake } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "Every item is handled with multi-layer protection and insurance coverage." },
  { icon: Star, title: "Excellence", desc: "We strive for perfection in every move, big or small." },
  { icon: Handshake, title: "Trust", desc: "Transparent pricing with no hidden charges — what we quote is what you pay." },
  { icon: Heart, title: "Customer Care", desc: "24/7 support and dedicated move coordinators for a stress-free experience." },
];

const VisionMissionValues = () => {
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
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            What Drives Us
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Vision & Mission</span>
          </h2>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl gradient-navy p-8 lg:p-10 shadow-premium"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-orange shadow-glow-orange">
              <Eye className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Our Vision</h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              To become the most trusted and preferred packers &amp; movers brand in South India, known for 
              zero-damage delivery, transparent pricing, and exceptional customer care — making every relocation 
              a smooth and stress-free experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl gradient-navy p-8 lg:p-10 shadow-premium"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-orange shadow-glow-orange">
              <Target className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              To provide professional, affordable, and timely packing &amp; moving services across India. 
              We are committed to using premium packing materials, trained manpower, and GPS-tracked transport 
              to deliver 100% safe relocations for every customer.
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl font-black text-foreground sm:text-3xl">
            Our Core <span className="text-gradient">Values</span>
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="group rounded-2xl bg-card p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-premium"
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:gradient-orange group-hover:text-primary-foreground group-hover:shadow-glow-orange">
                <val.icon className="h-7 w-7" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">{val.title}</h4>
              <p className="text-sm text-muted-foreground">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
