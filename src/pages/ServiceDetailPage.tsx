import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Images, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { allServices } from "@/data/services";
import VisitingCard from "@/components/VisitingCard";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = allServices.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayPlugin.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollPrev = useCallback(() => { emblaApi?.scrollPrev(); autoplayPlugin.current.reset(); }, [emblaApi]);
  const scrollNext = useCallback(() => { emblaApi?.scrollNext(); autoplayPlugin.current.reset(); }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const otherServices = allServices.filter((s) => s.id !== service.id);
  const Icon = service.icon;

  return (
    <main className="min-h-screen pt-20">
      <Helmet>
        <title>{service.title} Services Guntur | Best Packers and Movers</title>
        <meta name="description" content={`${service.title} services in Guntur AP – ${service.description} Affordable rates & 24/7 service. Call 97000 67784.`} />
        <link rel="canonical" href={`https://bestpackersandmoversguntur.com/services/${service.slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden gradient-navy py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <img src={service.image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={isHeaderInView ? { opacity: 1, y: 0 } : {}} className="text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2">
              <Icon className="h-5 w-5 text-secondary" />
              <span className="font-display text-sm font-bold text-secondary">Service</span>
            </div>
            <h1 className="font-display text-4xl font-black text-primary-foreground lg:text-6xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left - Image Carousel */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative group">
                <div ref={emblaRef} className="overflow-hidden rounded-2xl">
                  <div className="flex">
                    {service.images.map((img, i) => (
                      <div key={i} className="min-w-0 shrink-0 grow-0 basis-full cursor-pointer" onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}>
                        <div className="aspect-[4/3] overflow-hidden">
                          <img src={img} alt={`${service.title} ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={scrollPrev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-primary/70 p-2 text-primary-foreground opacity-0 transition group-hover:opacity-100 hover:bg-primary">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={scrollNext} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-primary/70 p-2 text-primary-foreground opacity-0 transition group-hover:opacity-100 hover:bg-primary">
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-primary/60 px-3 py-1.5 text-xs text-primary-foreground">
                  <Images className="h-3 w-3" />
                  {selectedIndex + 1} / {service.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-3 flex gap-2">
                {service.images.map((img, i) => (
                  <button key={i} onClick={() => emblaApi?.scrollTo(i)} className={`overflow-hidden rounded-lg border-2 transition-all ${selectedIndex === i ? "border-secondary shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                    <img src={img} alt="" className="h-16 w-20 object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-black text-foreground lg:text-4xl">
                {service.title} <span className="text-gradient">Services</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{service.longDescription}</p>

              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-foreground">What's Included:</h3>
                <ul className="mt-3 space-y-2.5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                      {item}
                    </li>
                  ))
                }
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:9700067784" className="inline-flex items-center gap-2 rounded-full gradient-orange px-6 py-3 font-display text-sm font-bold text-primary-foreground shadow-glow-orange transition-transform hover:scale-105">
                  Get Free Quote
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-display text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center font-display text-3xl font-black text-foreground">
            Why Choose Our <span className="text-gradient">{service.shortTitle}</span> Service?
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {service.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                  <span className="font-display text-lg font-black text-secondary">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{feat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feat.description}</p>
              </motion.div>
            ))
          }
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center font-display text-3xl font-black text-foreground">
            Explore Other <span className="text-gradient">Services</span>
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s, i) => {
              const SIcon = s.icon;
              return (
                <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Link to={`/services/${s.slug}`} className="group block overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative h-40 overflow-hidden">
                      <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div className="rounded-lg gradient-orange p-2">
                          <SIcon className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-display text-sm font-bold text-primary-foreground">{s.title}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          }
          </div>
        </div>
      </section>

      <VisitingCard />

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={() => setLightboxOpen(false)}>
          <div className="relative max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={service.images[lightboxIndex]} alt={service.title} className="h-full w-full rounded-2xl object-contain" />
            <button onClick={() => setLightboxOpen(false)} className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"><X className="h-5 w-5" /></button>
            <button onClick={() => setLightboxIndex((p) => (p - 1 + service.images.length) % service.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"><ChevronLeft className="h-6 w-6" /></button>
            <button onClick={() => setLightboxIndex((p) => (p + 1) % service.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"><ChevronRight className="h-6 w-6" /></button>
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default ServiceDetailPage;
