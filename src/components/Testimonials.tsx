import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Guntur to Hyderabad",
    rating: 5,
    text: "Excellent service! Best Packers moved our entire 3BHK house from Guntur to Hyderabad without a single scratch. Very professional and on-time delivery.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    location: "Guntur Local Shifting",
    rating: 5,
    text: "Very affordable and careful with fragile items. The team was polite and completed the move in just 4 hours. Highly recommended!",
    initials: "PS",
  },
  {
    name: "Suresh Reddy",
    location: "Guntur to Bangalore",
    rating: 5,
    text: "I was worried about my office equipment during the move, but Vasanth and his team handled everything perfectly. Great packing quality.",
    initials: "SR",
  },
  {
    name: "Lakshmi Devi",
    location: "Guntur to Vijayawada",
    rating: 4,
    text: "Quick response and same-day service. They packed everything safely and delivered on time. Will use again for sure.",
    initials: "LD",
  },
  {
    name: "Arjun Rao",
    location: "Guntur to Chennai",
    rating: 5,
    text: "Best packers and movers I've ever used. Transparent pricing, no hidden charges, and my furniture arrived in perfect condition.",
    initials: "AR",
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="relative flex-shrink-0 w-[85vw] md:w-[calc(33.333%-16px)] rounded-2xl border border-border bg-card p-6 shadow-md">
    <Quote className="absolute top-4 right-4 h-8 w-8 text-secondary/15" />
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < t.rating ? "fill-secondary text-secondary" : "text-muted"}`}
        />
      ))}
    </div>
    <p className="mb-6 text-muted-foreground leading-relaxed italic text-sm">
      "{t.text}"
    </p>
    <div className="flex items-center gap-3 border-t border-border pt-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-orange shadow-sm">
        <span className="font-display text-sm font-bold text-primary-foreground">
          {t.initials}
        </span>
      </div>
      <div>
        <h4 className="font-display text-sm font-bold text-foreground">{t.name}</h4>
        <p className="text-xs text-muted-foreground">{t.location}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const [, forceUpdate] = useState(0);

  // We duplicate testimonials 3x for seamless infinite scroll
  const tripled = [...testimonials, ...testimonials, ...testimonials];
  const singleSetWidth = useRef(0);

  const measure = useCallback(() => {
    if (trackRef.current) {
      const children = trackRef.current.children;
      if (children.length > 0) {
        // Width of one set of testimonials
        const totalCards = testimonials.length;
        let w = 0;
        for (let i = 0; i < totalCards && i < children.length; i++) {
          w += (children[i] as HTMLElement).offsetWidth + 24; // 24 = gap-6
        }
        singleSetWidth.current = w;
      }
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Continuous smooth scroll animation
  useEffect(() => {
    if (!isInView) return;

    const speed = 0.5; // pixels per frame
    let lastTime = performance.now();

    const animate = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isHovered && singleSetWidth.current > 0) {
        offsetRef.current += speed * (delta / 16.67); // normalize to 60fps
        if (offsetRef.current >= singleSetWidth.current) {
          offsetRef.current -= singleSetWidth.current;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isInView, isHovered]);

  const scrollByCards = (dir: number) => {
    if (!trackRef.current || !singleSetWidth.current) return;
    const cardWidth = singleSetWidth.current / testimonials.length;
    const target = offsetRef.current + dir * cardWidth;

    // Smooth manual scroll
    const start = offsetRef.current;
    const startTime = performance.now();
    const duration = 400;

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      offsetRef.current = start + (target - start) * eased;

      if (offsetRef.current >= singleSetWidth.current) {
        offsetRef.current -= singleSetWidth.current;
      } else if (offsetRef.current < 0) {
        offsetRef.current += singleSetWidth.current;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real stories from real customers who trusted us with their moves.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={() => scrollByCards(-1)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full gradient-navy p-3 text-primary-foreground shadow-lg transition hover:scale-110 md:-left-6"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollByCards(1)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full gradient-navy p-3 text-primary-foreground shadow-lg transition hover:scale-110 md:-right-6"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden px-4 py-8">
            <div
              ref={trackRef}
              className="flex gap-6 will-change-transform"
              style={{ transform: `translateX(-${offsetRef.current}px)` }}
            >
              {tripled.map((t, i) => (
                <TestimonialCard key={`t-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
