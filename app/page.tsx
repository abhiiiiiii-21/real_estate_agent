import Footer from "./_components/Footer";
import FAQs from "./_components/FAQs";
import FeaturedProperties from "./_components/FeaturedProperties";
import Hero from "./_components/Hero";
import RecentlySold from "./_components/RecentlySold";
import WhyChoose from "./_components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <FeaturedProperties />
      <RecentlySold />
      <FAQs />
      <Footer />
    </div>
  );
}
