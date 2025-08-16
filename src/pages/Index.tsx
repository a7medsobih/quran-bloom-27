import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveStats from "@/components/LiveStats";
import FeaturedSections from "@/components/FeaturedSections";
import Gamification from "@/components/Gamification";
import NewsEvents from "@/components/NewsEvents";
import DonorsSection from "@/components/DonorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LiveStats />
      <FeaturedSections />
      <Gamification />
      <NewsEvents />
      <DonorsSection />
      <Footer />
    </div>
  );
};

export default Index;
