import { ThemeProvider } from "./components/ThemeProvider";
import { BrandingHeader } from "./components/BrandingHeader";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/About";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { BrandSection } from "./components/BrandSection";
import { TeamSection } from "./components/TeamSection";
import { BrandingFooter } from "./components/BrandingFooter";
//import './index.css';
import '../src/styles/Global.css'

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