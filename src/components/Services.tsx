import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { allServices } from "@/data/services";

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof allServices)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl bg-card shadow-premium transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="rounded-xl gradient-orange p-3 shadow-glow-orange">
            <service.icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="font-display text-lg font-bold text-primary-foreground">
            {service.title}
          </h3>
        </div>
      </div>
      <div className="p-5">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <ul className="mb-4 space-y-1.5">
          {service.includes.slice(0, 3).map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to={`/services/${service.slug}`}
          className="group/link flex items-center gap-1 font-display text-sm font-bold text-primary transition-colors hover:text-secondary"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From household goods to office equipment, we provide end-to-end packing and moving
            solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full gradient-orange px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-glow-orange transition-all hover:scale-105"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
