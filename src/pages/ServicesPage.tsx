import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Services from "@/components/Services";
import ServicesSummary from "@/components/ServicesSummary";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingTable from "@/components/PricingTable";

const ServicesPage = () => {
  return (
    <main className="min-h-screen pt-20">
      <Helmet>
        <title>Packing & Moving Services Guntur | House, Office, Vehicle Shifting</title>
        <meta name="description" content="Professional packing & moving services in Guntur AP – household shifting, office relocation, car & bike transport, furniture moving, long distance shifting. Affordable rates & 24/7 service. Call 97000 67784." />
        <meta name="keywords" content="packing services guntur, moving services guntur, house shifting services guntur, office relocation services guntur AP, car transport services guntur, bike shifting services, furniture moving guntur, long distance packers movers, local shifting guntur, commercial moving andhra pradesh, warehouse storage guntur, goods packing guntur, safe transport services AP, door to door shifting guntur" />
        <link rel="canonical" href="https://bestpackersandmoversguntur.com/services" />
      </Helmet>

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
            Comprehensive packing, moving, and relocation services tailored to your needs across Guntur and all of Andhra Pradesh.
          </motion.p>
        </div>
      </section>

      <Services />
      <ServicesSummary />
      <PricingTable />
      <WhyChooseUs />
    </main>
  );
};

export default ServicesPage;
