import { BrandingHeader } from "./components/branding-header";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ServicesSection } from "./components/services-section";
import { PortfolioSection } from "./components/portfolio-section";
import { BrandSection } from "./components/brand-section";
import { TeamSection } from "./components/team-section";
import { BrandingFooter } from "./components/branding-footer";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ozyntria-theme">
      <div className="min-h-screen bg-background transition-colors">
        <BrandingHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <BrandSection />
          <TeamSection />
        </main>
        <BrandingFooter />
      </div>
    </ThemeProvider>
  );
}
