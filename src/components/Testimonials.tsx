import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Guntur to Hyderabad",
    rating: 5,
    text: "Excellent service! Best Packers moved our entire 3BHK house from Guntur to Hyderabad without a single scratch. Very professional and on-time delivery.",
  },
  {
    name: "Priya Sharma",
    location: "Guntur Local Shifting",
    rating: 5,
    text: "Very affordable and careful with fragile items. The team was polite and completed the move in just 4 hours. Highly recommended!",
  },
  {
    name: "Suresh Reddy",
    location: "Guntur to Bangalore",
    rating: 5,
    text: "I was worried about my office equipment during the move, but Vasanth and his team handled everything perfectly. Great packing quality.",
  },
  {
    name: "Lakshmi Devi",
    location: "Guntur to Vijayawada",
    rating: 4,
    text: "Quick response and same-day service. They packed everything safely and delivered on time. Will use again for sure.",
  },
  {
    name: "Arjun Rao",
    location: "Guntur to Chennai",
    rating: 5,
    text: "Best packers and movers I've ever used. Transparent pricing, no hidden charges, and my furniture arrived in perfect condition.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

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
          <h2 className="font-display text-3xl font-black text-primary-foreground sm:text-4xl lg:text-5xl">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-primary-foreground/10 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20 md:-left-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-primary-foreground/10 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20 md:-right-12"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8 text-center md:p-12"
            >
              <Quote className="mx-auto mb-4 h-10 w-10 text-secondary/40" />
              <p className="mb-6 text-lg leading-relaxed text-primary-foreground/80 italic md:text-xl">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonials[current].rating ? "fill-secondary text-secondary" : "text-primary-foreground/20"}`}
                  />
                ))}
              </div>
              <h4 className="font-display text-lg font-bold text-primary-foreground">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-primary-foreground/60">{testimonials[current].location}</p>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-secondary" : "w-2 bg-primary-foreground/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
