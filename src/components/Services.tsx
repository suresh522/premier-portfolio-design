import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, Truck, Clock, Package, MapPin } from "lucide-react";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceTransport from "@/assets/service-transport.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Moving",
    description:
      "Complete household packing and moving with utmost care. We handle your belongings like our own — from furniture to fragile items.",
    image: serviceResidential,
  },
  {
    icon: Building2,
    title: "Office Relocation",
    description:
      "Seamless office shifting with minimal downtime. We manage IT equipment, furniture, and documents with professional precision.",
    image: serviceOffice,
  },
  {
    icon: Truck,
    title: "Long Distance Transport",
    description:
      "Reliable inter-city and inter-state transportation with GPS tracking and insurance coverage for your peace of mind.",
    image: serviceTransport,
  },
];

const additionalServices = [
  {
    icon: Clock,
    title: "24/7 Emergency Moves",
    description: "Round-the-clock moving services for urgent relocations within the city.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description: "Premium quality packing materials and expert packing techniques for every item.",
  },
  {
    icon: MapPin,
    title: "Local Within City",
    description: "Quick and affordable local moves within Guntur and surrounding areas.",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group overflow-hidden rounded-2xl bg-card shadow-premium transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="rounded-xl gradient-orange p-3 shadow-glow-orange">
            <service.icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="font-display text-xl font-bold text-primary-foreground">
            {service.title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

const MiniCard = ({
  service,
  index,
}: {
  service: (typeof additionalServices)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="flex items-start gap-4 rounded-xl bg-card p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="rounded-lg bg-primary/10 p-3 shrink-0">
        <service.icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-display text-sm font-bold text-foreground">{service.title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
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
        {/* Section Header */}
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

        {/* Main Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {additionalServices.map((service, i) => (
            <MiniCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
