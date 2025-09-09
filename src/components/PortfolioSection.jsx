import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ExternalLink, User, Building, Plane } from "lucide-react";

export function PortfolioSection() {
    const projects = [
        {
        title: "Personal Portfolio",
        description: "A modern, responsive portfolio website showcasing creative work and professional achievements with smooth animations and intuitive navigation.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc1NzI4MzAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Web Development",
        tags: ["React", "CSS3", "JavaScript"],
        icon: User,
        link: "https://dancun48.github.io/portfolio/"
        },
        {
        title: "Real Estate Platform",
        description: "Comprehensive property management platform with advanced search filters, virtual tours, and integrated communication tools for buyers and sellers.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTcyODMwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Full-Stack Development",
        tags: ["React", "Node.js", "MongoDB"],
        icon: Building,
        link: "https://real-estate-website-doo.netlify.app/"
        },
        {
        title: "Travel Booking System",
        description: "Feature-rich travel platform with booking capabilities, itinerary planning, and seamless payment integration for modern travelers.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NzI4MzEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Web Application",
        tags: ["Vue.js", "Express", "Stripe"],
        icon: Plane,
        link: "https://traveler-website-doo.netlify.app/"
        }
    ];

    return (
        <section id="portfolio" className="py-16 sm:py-20 bg-background transition-colors">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Our Portfolio</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore some of our recent projects that showcase our expertise in delivering 
                innovative solutions across various industries.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card">
                <div className="relative overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                        variant="secondary" 
                        size="sm"
                        className="bg-white text-primary hover:bg-white/90"
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                    </Button>
                    </div>
                </div>
                <CardHeader className="pb-2 sm:pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <project.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{project.category}</span>
                    </div>
                    <CardTitle className="text-base sm:text-lg text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-justify">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag, tagIndex) => (
                        <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm"
                        onClick={() => window.open(project.link, '_blank')}
                    >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Live Demo
                    </Button>
                </CardContent>
                </Card>
            ))}
            </div>

            <div className="text-center">
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                These projects represent just a fraction of our work. Each solution is tailored to meet specific business needs.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                Discuss Your Project
            </Button>
            </div>
        </div>
        </section>
    );
}