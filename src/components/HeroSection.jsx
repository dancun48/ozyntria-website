import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/Button";
//import logo from "../assets/images/logo.png";
import tech from '../assets/images/tech.jpg'

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 transition-colors" id="home">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="space-y-4 sm:space-y-6">
                {/*<div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 sm:mb-6">
                    <img src={logo} alt="Ozyntria Tech" className="h-12 sm:h-16 w-auto" />
                </div>*/}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Solutions Without
                    <span className="block text-primary">Limits</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 text-justify">
                    Empowering businesses, startups, and NGOs with comprehensive technology solutions. 
                    From web development to mobile apps, UI/UX design to business intelligence - we deliver excellence in every project.
                </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="w-full sm:w-auto cursor-pointer" to="#portfolio">
                    <a href="#portfolio">Explore Our Work</a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer">
                    Learn More
                </Button>
                </div>
            </div>
            <div className="relative order-first lg:order-last">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-chart-1/20 rounded-3xl blur-3xl"></div>
                {/*<ImageWithFallback
                src="https://images.unsplash.com/photo-1624213011686-bc14dfc81650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3NTcyODQwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern corporate building"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                />*/}
                <img src={tech} className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover" />
            </div>
            </div>
        </div>
        </section>
    );
}