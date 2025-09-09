import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react";
//import logo from "../assets/images/logo.png";

export function BrandingFooter() {
    return (
        <footer id="contact" className="bg-primary text-primary-foreground transition-colors">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                <h3 className="font-semibold text-primary-foreground">We Offer..</h3>
                {/* <div className="flex items-center">
                <div className="bg-primary-foreground p-2 rounded-lg">
                    <img src={logo} alt="Ozyntria Tech" className="h-5 sm:h-6 w-auto" />
                </div>
                </div>*/}
                <p className="text-primary-foreground/80 text-sm text-justify">
                <span className="font-semibold">Solutions Without Limits.</span> Transform your business with Ozyntria Tech's 
                innovative technology solutions and cutting-edge expertise.
                </p>
                <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    <Facebook className="w-5 h-5" />
                </a>
                </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
                <h3 className="font-semibold text-primary-foreground">Services</h3>
                <div className="space-y-2">
                <a href="#services" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                    Web Development
                </a>
                <a href="#services" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                    Mobile Apps
                </a>
                <a href="#services" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                    UI/UX Design
                </a>
                <a href="#services" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                    Backend Development
                </a>
                </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
                <h3 className="font-semibold text-primary-foreground">Quick Links</h3>
                <div className="group space-y-2">
                    <a href="#about" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                        Home
                    </a>
                    <a href="#portfolio" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                        About Us
                    </a>
                    <a href="#brand" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                        Portfolio
                    </a>
                    <a href="#team" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                        Get Started
                    </a>
                </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
                <h3 className="font-semibold text-primary-foreground">Contact</h3>
                <div className="space-y-3">
                <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-primary-foreground/60" />
                    <span className="text-sm text-primary-foreground/80">duncanochieng48@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-primary-foreground/60" />
                    <span className="text-sm text-primary-foreground/80">(+254) 705-250-517</span>
                </div>
                <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-primary-foreground/60" />
                    <span className="text-sm text-primary-foreground/80">Kenya Remote Team</span>
                </div>
                </div>
            </div>
            </div>

            {/* Newsletter */}
            <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <div className="max-w-md mx-auto text-center">
                <h3 className="font-semibold text-primary-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                Get the latest updates on technology trends and our projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                    placeholder="Enter your email" 
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 flex-1"
                />
                <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 cursor-pointer"
                >
                    Subscribe
                </Button>
                </div>
            </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <div className="mb-4 sm:mb-0">
                © 2025 Ozyntria Tech. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6">
                <a href="#home" className="hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                Privacy Policy
                </a>
                <a href="#home" className="hover:text-primary-foreground transition-colors hover:underline hover:transition-all duration-500">
                Terms of Service
                </a>
            </div>
            </div>
        </div>
        </footer>
    );
}