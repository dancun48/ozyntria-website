import { Card, CardContent } from "../ui/Card";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

export function AboutSection() {
    const values = [
        {
        icon: Target,
        title: "Solutions Without Limits",
        description: "We believe every challenge has a solution. Our innovative approach breaks traditional boundaries to deliver exceptional results."
        },
        {
        icon: Zap,
        title: "Technology Excellence",
        description: "Leveraging cutting-edge technologies and best practices to build scalable, secure, and efficient solutions."
        },
        {
        icon: Users,
        title: "Partnership Approach",
        description: "We work closely with businesses, startups, and NGOs as trusted partners in their digital transformation journey."
        },
        {
        icon: CheckCircle,
        title: "End-to-End Service",
        description: "From initial concept to final deployment and beyond, we provide comprehensive support throughout your project lifecycle."
        }
    ];

    return (
        <section id="about" className="py-16 sm:py-20 bg-muted/30 transition-colors">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">About Ozyntria Tech</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We are a technology company dedicated to providing comprehensive digital solutions to businesses, 
                startups, and NGOs. From web development to mobile apps, from UI/UX design to business intelligence, 
                we deliver solutions without limits.
            </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-sm bg-card/80 backdrop-blur">
                <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>

            <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Our Expertise</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                    Ozyntria Tech specializes in delivering end-to-end technology solutions that drive growth 
                    and innovation. Our multidisciplinary team combines technical expertise with creative 
                    vision to solve complex business challenges across various industries.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                    Whether you're a startup looking to build your first digital product, an established 
                    business seeking to modernize your systems, or an NGO aiming to expand your digital 
                    reach, we have the tools and expertise to bring your vision to life.
                </p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">8+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Core Services</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Support Available</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}