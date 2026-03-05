import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceTransport from "@/assets/service-transport.jpg";

const detailedServices = [
  {
    id: 1,
    title: "Household Shifting",
    description: "Moving complete household items from one home to another.",
    images: [serviceResidential, serviceOffice, serviceTransport, serviceResidential],
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
    title: "Office Relocation",
    description: "Moving offices, companies, and corporate spaces.",
    images: [serviceOffice, serviceResidential, serviceTransport, serviceOffice],
    includes: [
      "Packing office furniture",
      "Computer & server relocation",
      "File and document safety",
      "Quick shifting to avoid business downtime",
    ],
  },
  {
    id: 3,
    title: "Vehicle Transportation",
    description: "Transporting vehicles safely to another city.",
    images: [serviceTransport, serviceResidential, serviceOffice, serviceTransport],
    includes: [
      "Car transportation",
      "Bike transportation",
      "Secure vehicle carriers",
      "Door-to-door delivery",
    ],
  },
  {
    id: 4,
    title: "Packing and Unpacking",
    description: "Professional packing to protect items during transport.",
    images: [serviceResidential, serviceTransport, serviceOffice, serviceResidential],
    includes: [
      "Bubble wrap packing",
      "Carton box packing",
      "Fragile item protection",
      "Unpacking at destination",
    ],
  },
  {
    id: 5,
    title: "Loading and Unloading",
    description: "Safe lifting and handling of heavy items.",
    images: [serviceOffice, serviceTransport, serviceResidential, serviceOffice],
    includes: [
      "Furniture handling",
      "Appliance handling",
      "Safety equipment",
      "Skilled labor",
    ],
  },
  {
    id: 6,
    title: "Local Shifting",
    description: "Moving within the same city.",
    images: [serviceTransport, serviceOffice, serviceResidential, serviceTransport],
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
  images,
  currentIndex,
  title,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  currentIndex: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={images[currentIndex]} alt={title} className="h-full w-full object-contain" />
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
        >
          <X className="h-5 w-5" />
        </button>
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="font-display text-lg font-bold text-white">{title}</p>
          <p className="text-sm text-white/70">{currentIndex + 1} / {images.length}</p>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof detailedServices)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="rounded-2xl bg-card p-6 shadow-premium border border-border lg:p-8"
      >
        {/* Title */}
        <h3 className="mb-4 font-display text-xl font-black text-foreground lg:text-2xl">
          {service.id}. {service.title}
        </h3>

        {/* Image Grid - 4 images */}
        <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {service.images.map((img, i) => (
            <div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img}
                alt={`${service.title} ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              {i === service.images.length - 1 && service.images.length > 4 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="font-display text-lg font-bold text-white">+{service.images.length - 4}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mb-4 text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Includes */}
        <div>
          <p className="mb-2 font-display text-sm font-bold text-foreground">
            Includes:
          </p>
          <ul className="space-y-1.5 pl-1">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={service.images}
          currentIndex={lightboxIndex}
          title={service.title}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + service.images.length) % service.images.length)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % service.images.length)}
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

        <div className="grid gap-8 lg:grid-cols-2">
          {detailedServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
