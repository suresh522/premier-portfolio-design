import { Helmet } from "react-helmet-async";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeGallery from "@/components/HomeGallery";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Best Packers & Movers Guntur | #1 Trusted Packers Movers in AP</title>
        <meta name="description" content="Best Packers & Movers Guntur – #1 rated professional packing, moving, household relocation, office shifting, car & bike transport services in Guntur, Andhra Pradesh. Safe, affordable & 24/7 available. Call 97000 67784." />
        <meta name="keywords" content="packers and movers guntur, best packers movers guntur, house shifting guntur, office relocation guntur, movers and packers near me guntur, affordable packers movers guntur, household goods shifting guntur, car transport guntur, bike shifting guntur, local packers movers guntur, long distance movers andhra pradesh, safe packing moving services AP, residential movers guntur, commercial relocation andhra pradesh, trusted packers movers india, packers movers vijayawada, packers movers hyderabad, home shifting near me, cheap packers movers guntur, relocation services guntur, furniture shifting guntur, two wheeler transport guntur, goods transport guntur AP, best movers near me andhra pradesh, packing services guntur" />
        <link rel="canonical" href="https://bestpackersandmoversguntur.com/" />
      </Helmet>
      <HeroBanner />
      <Services />
      <WhyChooseUs />
      <HomeGallery />
      <VideoSection />
      <Testimonials />
    </main>
  );
};

export default Home;
