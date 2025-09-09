import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Globe, Palette, Smartphone, Server, Settings, BarChart3, Database, Code } from "lucide-react";

export function ServicesSection() {
    const services = [
        {
        icon: Globe,
        title: "Website Design & Development",
        description: "Custom websites that drive results, from simple landing pages to complex web applications with modern frameworks and responsive design."
        },
        {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centered design that creates intuitive and engaging experiences, ensuring your digital products are both beautiful and functional."
        },
        {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native iOS and Android applications that deliver seamless performance and exceptional user experiences across all devices."
        },
        {
        icon: Server,
        title: "Backend Development",
        description: "Robust server-side solutions, APIs, and database architecture that power your applications with scalability and security."
        },
        {
        icon: Settings,
        title: "IT Solutions",
        description: "Comprehensive technology consulting and implementation services to optimize your business operations and digital infrastructure."
        },
        {
        icon: BarChart3,
        title: "Business Intelligence",
        description: "Data-driven insights through custom dashboards, analytics platforms, and automation tools that transform how you make decisions."
        },
        {
        icon: Database,
        title: "Business Automation",
        description: "Streamline your workflows with custom automation tools, dashboards, and systems that save time and increase efficiency."
        },
        {
        icon: Code,
        title: "Custom Solutions",
        description: "Tailored technology solutions designed specifically for your unique business challenges and growth objectives."
        }
    ];

    return (
        <section id="services" className="py-16 sm:py-20 bg-card transition-colors">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive technology solutions to businesses, startups, and NGOs. 
                From concept to deployment, we deliver excellence in every project.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
                <Card key={index} className="border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg bg-background">
                <CardHeader className="text-center pb-3 sm:pb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <CardTitle className="text-sm sm:text-base text-primary leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                    {service.description}
                    </p>
                </CardContent>
                </Card>
            ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Ready to transform your business with technology?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors"
                >
                Start Your Project
                </a>
                <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-primary text-primary rounded-lg text-sm sm:text-base font-medium hover:bg-primary/5 transition-colors"
                >
                View Our Work
                </a>
            </div>
            </div>
        </div>
        </section>
    );
}