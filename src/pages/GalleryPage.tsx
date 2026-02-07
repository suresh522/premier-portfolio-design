import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import serviceRes from "@/assets/service-residential.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceTransport from "@/assets/service-transport.jpg";
import { X } from "lucide-react";

const allImages = [
  { src: gallery1, alt: "Wardrobe packed with bubble wrap and tape", category: "Packing" },
  { src: gallery2, alt: "Items packed and ready at doorstep", category: "Packing" },
  { src: gallery3, alt: "Box packing with professional materials", category: "Packing" },
  { src: gallery4, alt: "Sofa set packed securely for transport", category: "Furniture" },
  { src: gallery5, alt: "Heavy cargo packed for long distance moving", category: "Transport" },
  { src: gallery6, alt: "Bike packing and transport service", category: "Vehicle" },
  { src: serviceRes, alt: "Residential house shifting service", category: "Residential" },
  { src: serviceOffice, alt: "Office relocation service", category: "Office" },
  { src: serviceTransport, alt: "Long distance transport service", category: "Transport" },
];

const categories = ["All", "Packing", "Furniture", "Transport", "Vehicle", "Residential", "Office"];

const GalleryPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Page Banner */}
      <section className="gradient-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-black text-primary-foreground lg:text-6xl"
          >
            Our <span className="text-gradient">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-primary-foreground/70"
          >
            Browse through our work — see how we handle every move with care and professionalism.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Filters */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 font-display text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "gradient-orange text-primary-foreground shadow-glow-orange"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src + img.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-square"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-4">
                    <span className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary backdrop-blur-sm">
                      {img.category}
                    </span>
                    <p className="mt-1 text-sm text-primary-foreground/80">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 rounded-full bg-primary-foreground/10 p-2 text-primary-foreground transition hover:bg-primary-foreground/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
          />
        </motion.div>
      )}
    </main>
  );
};

export default GalleryPage;
