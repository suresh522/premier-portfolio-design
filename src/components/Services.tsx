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
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group grid gap-0 overflow-hidden rounded-2xl bg-card shadow-premium transition-all duration-500 hover:shadow-xl lg:grid-cols-2 ${
        isEven ? "" : "lg:[direction:rtl]"
      }`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden lg:h-full lg:min-h-[320px] lg:[direction:ltr]">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-dark/20" />
        <div className="absolute top-4 left-4 rounded-xl gradient-orange p-3 shadow-glow-orange">
          <service.icon className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 lg:p-10 lg:[direction:ltr]">
        <span className="mb-2 inline-block w-fit rounded-full bg-secondary/10 px-3 py-1 font-display text-xs font-bold tracking-wider text-secondary uppercase">
          {service.shortTitle}
        </span>
        <h3 className="mb-3 font-display text-2xl font-black text-foreground lg:text-3xl">
          {service.title}
        </h3>
        <p className="mb-5 leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        {/* Includes preview */}
        <ul className="mb-6 space-y-2">
          {service.includes.slice(0, 3).map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${service.slug}`}
          className="group/link flex w-fit items-center gap-2 font-display text-sm font-bold text-primary transition-colors hover:text-secondary"
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

        <div className="space-y-8">
          {allServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
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
