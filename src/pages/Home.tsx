import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeGallery from "@/components/HomeGallery";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";

const Home = () => {
  return (
    <main className="min-h-screen">
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
