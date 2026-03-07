import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { allServices } from "@/data/services";
import ServicesSummary from "@/components/ServicesSummary";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingTable from "@/components/PricingTable";
import VisitingCard from "@/components/VisitingCard";

const ServicesPage = () => {
  return (
    <main className="min-h-screen pt-20">
      <Helmet>
        <title>Packing & Moving Services Guntur | House, Office, Vehicle Shifting</title>
        <meta name="description" content="Professional packing & moving services in Guntur AP – household shifting, office relocation, car & bike transport, furniture moving, long distance shifting. Affordable rates & 24/7 service. Call 97000 67784." />
        <link rel="canonical" href="https://bestpackersandmoversguntur.com/services" />
      </Helmet>

      {/* Hero */}
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

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block overflow-hidden rounded-2xl bg-card shadow-premium transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl gradient-orange p-3 shadow-glow-orange">
                            <Icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <h3 className="font-display text-xl font-bold text-primary-foreground">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <div className="mt-4 flex items-center gap-2 font-display text-sm font-bold text-secondary transition-colors group-hover:text-accent">
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesSummary />
      <PricingTable />
      <WhyChooseUs />
      <VisitingCard />
    </main>
  );
};

export default ServicesPage;
