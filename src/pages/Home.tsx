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
        <meta property="og:title" content="Best Packers & Movers Guntur | #1 Trusted Packers Movers in AP" />
        <meta property="og:description" content="Professional packing & moving in Guntur, AP. Household, office, car & bike shifting. 24/7 available. Call 97000 67784." />
        <meta property="og:url" content="https://bestpackersandmoversguntur.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Best Packers & Movers Guntur | Trusted Packers Movers AP" />
        <meta name="twitter:description" content="Professional packing & moving in Guntur, AP. 24/7. Call 97000 67784." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"WebPage","@id":"https://bestpackersandmoversguntur.com/#webpage","url":"https://bestpackersandmoversguntur.com/","name":"Best Packers & Movers Guntur | #1 Trusted Packers Movers in AP","isPartOf":{"@id":"https://bestpackersandmoversguntur.com/#website"},"about":{"@id":"https://bestpackersandmoversguntur.com/#organization"},"inLanguage":"en-IN","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://bestpackersandmoversguntur.com/"}]}}`}</script>
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
