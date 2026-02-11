import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
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

        {/* Cards grid - show 3 at a time on desktop */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full gradient-navy p-3 text-primary-foreground shadow-lg transition hover:scale-110 md:-left-6"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full gradient-navy p-3 text-primary-foreground shadow-lg transition hover:scale-110 md:-right-6"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="grid gap-6 md:grid-cols-3 px-4">
            {[0, 1, 2].map((offset) => {
              const index = (current + offset) % testimonials.length;
              const t = testimonials[index];
              return (
                <motion.div
                  key={`${current}-${offset}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: offset * 0.1 }}
                  className={`relative rounded-2xl border border-border bg-card p-6 shadow-md transition-all duration-300 ${
                    offset === 1 ? "md:scale-105 md:shadow-premium md:border-secondary/30" : ""
                  }`}
                >
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-secondary/15" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? "fill-secondary text-secondary" : "text-muted"}`}
                      />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="mb-6 text-muted-foreground leading-relaxed italic text-sm">
                    "{t.text}"
                  </p>

                  {/* Author */}
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
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-secondary" : "w-2.5 bg-muted-foreground/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
