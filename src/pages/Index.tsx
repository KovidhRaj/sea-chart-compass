import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DataVisualizations from "@/components/DataVisualizations";
import DataAccess from "@/components/DataAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <DataVisualizations />
        <DataAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
