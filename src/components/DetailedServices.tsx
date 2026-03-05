import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import {
  Home, Building2, Truck, Package, Weight, MapPin,
  ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight,
  Play,
} from "lucide-react";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceTransport from "@/assets/service-transport.jpg";

const detailedServices = [
  {
    id: 1,
    icon: Home,
    title: "Household Shifting",
    description: "Moving complete household items from one home to another.",
    image: serviceResidential,
    includes: [
      "Packing furniture",
      "Packing kitchen items",
      "Packing electronics",
      "Loading & unloading",
      "Safe transportation",
      "Unpacking",
    ],
  },
  {
    id: 2,
    icon: Building2,
    title: "Office Relocation",
    description: "Moving offices, companies, and corporate spaces.",
    image: serviceOffice,
    includes: [
      "Packing office furniture",
      "Computer & server relocation",
      "File and document safety",
      "Quick shifting to avoid business downtime",
    ],
  },
  {
    id: 3,
    icon: Truck,
    title: "Vehicle Transportation",
    description: "Transporting vehicles safely to another city.",
    image: serviceTransport,
    includes: [
      "Car transportation",
      "Bike transportation",
      "Secure vehicle carriers",
      "Door-to-door delivery",
    ],
  },
  {
    id: 4,
    icon: Package,
    title: "Packing and Unpacking",
    description: "Professional packing to protect items during transport.",
    image: serviceResidential,
    includes: [
      "Bubble wrap packing",
      "Carton box packing",
      "Fragile item protection",
      "Unpacking at destination",
    ],
  },
  {
    id: 5,
    icon: Weight,
    title: "Loading and Unloading",
    description: "Safe lifting and handling of heavy items.",
    image: serviceOffice,
    includes: [
      "Furniture handling",
      "Appliance handling",
      "Safety equipment",
      "Skilled labor",
    ],
  },
  {
    id: 6,
    icon: MapPin,
    title: "Local Shifting",
    description: "Moving within the same city.",
    image: serviceTransport,
    includes: [
      "Vijayawada to Vijayawada",
      "Guntur to Guntur",
      "Same-day delivery",
      "Affordable local rates",
    ],
  },
];

// Lightbox Component
const Lightbox = ({
  image,
  title,
  onClose,
}: {
  image: string;
  title: string;
  onClose: () => void;
}) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt={title} className="h-full w-full object-contain" />
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="font-display text-lg font-bold text-white">{title}</p>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const ServiceDetailCard = ({
  service,
  index,
}: {
  service: (typeof detailedServices)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group overflow-hidden rounded-2xl bg-card shadow-premium border border-border transition-all duration-300 hover:shadow-xl"
      >
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
          {/* Image */}
          <div
            className="relative h-64 cursor-pointer overflow-hidden lg:h-auto lg:w-2/5"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
            <div className="absolute bottom-4 left-4 lg:hidden">
              <div className="rounded-xl gradient-orange p-3 shadow-glow-orange">
                <service.icon className="h-6 w-6 text-white" />
              </div>
            </div>
            {/* Click to expand overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-black/50 px-4 py-2 font-display text-sm font-bold text-white">
                Click to enlarge
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
            <div className="mb-3 flex items-center gap-3">
              <div className="hidden rounded-xl gradient-orange p-3 shadow-glow-orange lg:flex">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-display text-xs font-bold tracking-widest text-secondary uppercase">
                  Service {service.id}
                </span>
                <h3 className="font-display text-xl font-black text-foreground lg:text-2xl">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="mb-4 text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            <div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="mb-3 flex items-center gap-1 font-display text-sm font-bold text-secondary transition hover:text-secondary/80"
              >
                {expanded ? "Hide Details" : "View Includes"}
                {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-xl bg-muted/50 p-4">
                      <p className="mb-2 font-display text-xs font-bold text-foreground uppercase tracking-wider">
                        Includes:
                      </p>
                      <ul className="grid gap-1.5 sm:grid-cols-2">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          image={service.image}
          title={service.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

const DetailedServices = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Complete Service List
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From household goods to office equipment, vehicles to local shifting — we handle everything with professional care.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {detailedServices.map((service, i) => (
            <ServiceDetailCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
