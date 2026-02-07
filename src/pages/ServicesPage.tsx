import { motion } from "framer-motion";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingTable from "@/components/PricingTable";

const ServicesPage = () => {
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
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-primary-foreground/70"
          >
            Comprehensive packing, moving, and relocation services tailored to your needs.
          </motion.p>
        </div>
      </section>

      <Services />
      <PricingTable />
      <WhyChooseUs />
    </main>
  );
};

export default ServicesPage;
