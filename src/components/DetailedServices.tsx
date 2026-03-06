import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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

const Lightbox = ({
  images, currentIndex, title, onClose, onPrev, onNext,
}: {
  images: string[]; currentIndex: number; title: string;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
        className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={images[currentIndex]} alt={title} className="h-full w-full object-contain" />
        <button onClick={onClose} className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
          <X className="h-5 w-5" />
        </button>
        {images.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
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

const AutoplayCarousel = ({ images, title, onImageClick }: { images: string[]; title: string; onImageClick: (i: number) => void }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="relative group">
      <div ref={emblaRef} className="overflow-hidden rounded-xl">
        <div className="flex">
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 px-1.5 cursor-pointer"
              onClick={() => onImageClick(i)}
            >
              <div className="overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={img}
                  alt={`${title} ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/70"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/70"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/50 px-2 py-1 text-xs text-white">
        <Images className="h-3 w-3" />
        {images.length}
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }: { service: (typeof detailedServices)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="border-b border-border pb-10"
      >
        <h3 className="mb-5 font-display text-2xl font-black text-foreground lg:text-3xl">
          {service.id}. {service.title}
        </h3>

        <div className="mb-5">
          <AutoplayCarousel images={service.images} title={service.title} onImageClick={openLightbox} />
        </div>

        <p className="mb-4 text-muted-foreground leading-relaxed">{service.description}</p>

        <div>
          <p className="mb-2 font-display text-sm font-bold text-foreground">Includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            {service.includes.map((item) => (
              <li key={item} className="text-sm text-muted-foreground">{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>

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
      <div className="container mx-auto max-w-4xl">
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
        </motion.div>

        <div className="space-y-10">
          {detailedServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
