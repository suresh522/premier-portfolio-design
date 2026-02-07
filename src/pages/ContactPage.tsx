import { motion } from "framer-motion";
import Contact from "@/components/Contact";

const ContactPage = () => {
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
            Contact <span className="text-gradient">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-primary-foreground/70"
          >
            Ready to move? Get in touch with us for a free quote.
          </motion.p>
        </div>
      </section>

      <Contact />

      {/* Google Map */}
      <section className="pb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.5!2d80.43!3d16.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzAwLjAiTiA4MMKwMjUnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Best Packers and Movers Location"
          className="w-full"
        />
      </section>
    </main>
  );
};

export default ContactPage;
