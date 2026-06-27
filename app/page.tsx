import Footer from "./_components/Footer";
import FAQs from "./_components/FAQs";
import FeaturedProperties from "./_components/FeaturedProperties";
import Hero from "./_components/Hero";
import RecentlySold from "./_components/RecentlySold";
import WhyChoose from "./_components/WhyChoose";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Testimonials from "./_components/Testimonials";
import Nabvar from "./_components/Nabvar";

export default function Home() {
  return (
    <div>
      <Nabvar />
      <Hero />
      <About />
      <Experience />
      <WhyChoose />
      <FeaturedProperties />
      <RecentlySold />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
}
