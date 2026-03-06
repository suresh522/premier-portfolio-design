import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Users, Target } from "lucide-react";
import aboutVideo from "@/assets/about-video.mp4";
import founderImg from "@/assets/team/founder.jpg";
import teamOneImg from "@/assets/team/team-one.jpg";
import teamTwoImg from "@/assets/team/team-two.jpg";
import teamThreeImg from "@/assets/team/team-three.jpg";
import PricingTable from "@/components/PricingTable";
import ServiceLocationsMap from "@/components/ServiceLocationsMap";
import VisionMissionValues from "@/components/VisionMissionValues";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main className="min-h-screen pt-20">
      <Helmet>
        <title>About Best Packers & Movers Guntur | Trusted Moving Company AP</title>
        <meta name="description" content="Learn about Best Packers & Movers Guntur – a trusted packing & moving company in Andhra Pradesh. Founded by Vasanth M, we offer safe household, office & vehicle relocation services. 500+ happy customers." />
        <meta name="keywords" content="about best packers movers guntur, packers movers company guntur, trusted movers andhra pradesh, vasanth m packers movers, moving company guntur AP, relocation experts guntur" />
        <link rel="canonical" href="https://bestpackersandmoversguntur.com/about" />
      </Helmet>

      {/* Page Banner */}
      <section className="gradient-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-black text-primary-foreground lg:text-6xl"
          >
            About <span className="text-gradient">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-primary-foreground/70"
          >
            Learn about our journey, our team, and our commitment to providing the best relocation services.
          </motion.p>
        </div>
      </section>

      <CompanyBrief />
      <VisionMissionValues />
      <FounderSection />
      <TeamSection />
      <WorkingProcess />
      <ServiceLocationsMap />
      <PricingTable />
    </main>
  );
};

const CompanyBrief = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
              About Our Company
            </span>
            <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl mb-6">
              Best Packers &amp; <span className="text-gradient">Movers</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Best Packers &amp; Movers is a leading packing and moving company based in Guntur, Andhra Pradesh. 
              With years of experience in the relocation industry, we have built a reputation for delivering safe, 
              reliable, and affordable moving services to households and businesses across India.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our commitment to customer satisfaction, combined with our professional expertise, makes us the 
              preferred choice for thousands of families and businesses. We use premium quality packing materials 
              and modern techniques to ensure zero-damage delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From local house shifting within Guntur to long-distance relocations across the country, 
              we handle every move with the same level of care and dedication. Our 24/7 availability 
              and transparent pricing have earned us the trust of our valued customers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, text: "100% Safe Delivery" },
                { icon: Award, text: "Years of Experience" },
                { icon: Users, text: "500+ Happy Customers" },
                { icon: Target, text: "Pan India Service" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-premium">
                <video
                  src={aboutVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl gradient-orange px-6 py-3 shadow-glow-orange">
                <span className="font-display text-lg font-bold text-primary-foreground">24/7 Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Our Founder
          </span>
          <h2 className="font-display text-3xl font-black text-primary-foreground sm:text-4xl mb-8">
            Meet <span className="text-gradient">Vasanth M</span>
          </h2>
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-4 border-secondary shadow-glow-orange">
              <img src={founderImg} alt="Vasanth M - Founder of Best Packers and Movers Guntur" className="h-full w-full object-cover" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">Vasanth M</h3>
            <p className="text-secondary font-display font-semibold mb-4">Founder &amp; Proprietor</p>
            <p className="text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto">
              With a vision to provide the most reliable and affordable packing and moving services in Andhra Pradesh, 
              Vasanth M founded Best Packers &amp; Movers. His hands-on approach and dedication to customer satisfaction 
              have been the driving force behind the company's success. Under his leadership, the company has 
              successfully completed over 500+ moves with a 100% safe delivery record.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const teamMembers = [
  { name: "Ravi Kumar", role: "Operations Head", image: teamOneImg },
  { name: "Suresh Babu", role: "Logistics Manager", image: teamTwoImg },
  { name: "Kiran", role: "Packing Supervisor", image: teamThreeImg },
  { name: "Vasanth M", role: "Founder & CEO", image: founderImg },
];

const TeamSection = () => {
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
            Our Team
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A dedicated team of professionals committed to making your relocation seamless.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-card p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-premium"
            >
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-3 border-secondary/30 transition-transform group-hover:scale-110">
                <img src={member.image} alt={`${member.name} - ${member.role} at Best Packers Movers`} className="h-full w-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-secondary font-semibold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const processSteps = [
  { step: "01", title: "Book Your Move", desc: "Call us or send a WhatsApp message with your moving details." },
  { step: "02", title: "Get Free Quote", desc: "We provide a transparent and affordable price estimate." },
  { step: "03", title: "Professional Packing", desc: "Our experts pack all items with premium materials." },
  { step: "04", title: "Safe Transport", desc: "Secure loading and GPS-tracked transportation." },
  { step: "05", title: "Timely Delivery", desc: "On-time delivery at your new destination." },
  { step: "06", title: "Unpacking & Setup", desc: "Careful unpacking and arrangement at your new place." },
];

const WorkingProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            How We Work
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Working Process</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-card p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-premium"
            >
              <span className="absolute top-4 right-4 font-display text-4xl font-black text-muted/50 group-hover:text-secondary/20 transition-colors">
                {step.step}
              </span>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-orange shadow-glow-orange">
                <span className="font-display text-lg font-bold text-primary-foreground">{step.step}</span>
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
