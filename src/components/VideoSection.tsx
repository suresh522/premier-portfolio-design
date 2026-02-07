import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Phone } from "lucide-react";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Watch Us Work
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            See Our <span className="text-gradient">Process</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Watch how our expert team handles every move with care and precision.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Video embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl shadow-premium aspect-video bg-navy-dark"
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Best Packers & Movers - Our Work Process"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4 lg:text-3xl">
              Professional Moving Made Simple
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Expert packing with premium quality materials",
                "Careful loading and secure transport",
                "Timely delivery to your new location",
                "Unpacking and arrangement support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:9700067784"
              className="inline-flex items-center gap-2 rounded-full gradient-orange px-8 py-3.5 font-display text-sm font-bold text-primary-foreground shadow-glow-orange transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Get Free Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
