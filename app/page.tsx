import { Header } from "@/widgets/header/header";
import { Hero } from "@/widgets/hero/hero";
import { BannerCarousel } from "@/widgets/banner-carousel/banner-carousel";
import { CitizensSection } from "@/widgets/services/citizens-section";
import { EmployersSection } from "@/widgets/services/employers-section";
import { NewsSection } from "@/widgets/news-section/news-section";
import { EventsSection } from "@/widgets/events-section/events-section";
import { ProjectsSection } from "@/widgets/projects-section/projects-section";
import { MaterialsSection } from "@/widgets/materials-section/materials-section";
import { PartnersSection } from "@/widgets/partners-section/partners-section";
import { Footer } from "@/widgets/footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <BannerCarousel />
        <CitizensSection />
        <EmployersSection />
        <NewsSection />
        <EventsSection />
        <ProjectsSection />
        <MaterialsSection />
        <PartnersSection />
      </main>

      <Footer />
    </div>
  );
}
