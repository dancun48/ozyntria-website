import { Card, CardContent } from "../ui/Card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import team from '../assets/images/team1.jpg';

export function TeamSection() {
    return (
        <section id="team" className="py-16 sm:py-20 bg-background transition-colors">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Our Team</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Our diverse team of developers, designers, and strategists brings together expertise 
                across all technology domains to deliver comprehensive solutions for every client.
            </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold text-primary">Full-Stack Expertise</h3>
                <p className="text-sm sm:text-base text-muted-foreground text-justify">
                Our team combines technical depth with creative vision, covering everything from 
                frontend and backend development to mobile apps, UI/UX design, and business intelligence. 
                This comprehensive expertise allows us to handle projects end-to-end.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground text-justify">
                Whether you need a simple website, a complex mobile application, or advanced business 
                automation tools, our specialists work collaboratively to deliver solutions that exceed expectations.
                </p>
                <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
                <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">10+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Developers</div>
                </div>
                <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">8+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">3+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                </div>
            </div>
            <div className="relative order-1 lg:order-2">
                <ImageWithFallback
                src={team}
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="text-center border-0 shadow-sm bg-card">
                <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-full mx-auto mb-4"></div>
                <h4 className="text-sm sm:text-base font-semibold mb-2 text-primary">UI/UX Design</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                    Creating intuitive interfaces and exceptional user experiences for web and mobile.
                </p>
                </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm bg-card">
                <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-chart-2/20 to-chart-3/20 rounded-full mx-auto mb-4"></div>
                <h4 className="text-sm sm:text-base font-semibold mb-2 text-primary">Full-Stack Development</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                    Expert developers building scalable web applications, mobile apps, and backend systems.
                </p>
                </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm bg-card sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-chart-4/20 to-chart-5/20 rounded-full mx-auto mb-4"></div>
                <h4 className="text-sm sm:text-base font-semibold mb-2 text-primary">Business Intelligence</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                    Transforming data into insights with custom dashboards and automation solutions.
                </p>
                </CardContent>
            </Card>
            </div>
        </div>
        </section>
    );
}