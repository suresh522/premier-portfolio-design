import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Ready to move? Call us anytime or visit our office. We're here to help you relocate smoothly.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <ContactCard
              icon={Phone}
              title="Phone"
              lines={["97000 67784", "63014 09282"]}
              href="tel:9700067784"
              delay={0}
            />
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              lines={["97000 67784"]}
              href="https://wa.me/919700067784"
              delay={0.1}
            />
            <ContactCard
              icon={MapPin}
              title="Address"
              lines={[
                "Vishnu Nagar 3rd Line,",
                "Nagaralu, Amaravati Road,",
                "Guntur - 522034, AP",
              ]}
              delay={0.2}
            />
            <ContactCard
              icon={Clock}
              title="Working Hours"
              lines={["24 Hours / 7 Days", "Always Available"]}
              delay={0.3}
            />
          </div>

          {/* Map / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center rounded-2xl gradient-navy p-8 lg:p-12"
          >
            <h3 className="mb-4 font-display text-2xl font-bold text-primary-foreground lg:text-3xl">
              Ready to Move?
            </h3>
            <p className="mb-6 text-primary-foreground/70 leading-relaxed">
              Get a free quote today! Call us directly or send a WhatsApp message.
              Our team will respond within minutes with the best pricing for your move.
            </p>
            <div className="mb-6 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <p className="font-display text-sm font-semibold text-secondary uppercase tracking-wider mb-1">
                Proprietor
              </p>
              <p className="font-display text-xl font-bold text-primary-foreground">
                Vasanth M
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:9700067784"
                className="flex items-center justify-center gap-2 rounded-full gradient-orange px-6 py-3.5 font-display text-sm font-bold text-primary-foreground shadow-glow-orange transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                97000 67784
              </a>
              <a
                href="https://wa.me/919700067784"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-6 py-3.5 font-display text-sm font-bold text-primary-foreground transition-all hover:border-secondary hover:bg-secondary/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon: Icon,
  title,
  lines,
  href,
  delay = 0,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
  href?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
    : {};

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Wrapper
        {...(wrapperProps as any)}
        className="group flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
      >
        <div className="mb-4 rounded-xl gradient-orange p-3 shadow-glow-orange transition-transform group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <h4 className="mb-2 font-display text-sm font-bold text-foreground uppercase tracking-wider">
          {title}
        </h4>
        {lines.map((line) => (
          <p key={line} className="text-sm text-muted-foreground">
            {line}
          </p>
        ))}
      </Wrapper>
    </motion.div>
  );
};

export default Contact;
