import { Button } from "../ui/Button";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/logo.png";

export function BrandingHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        {/*{ name: "Brand", href: "#brand" },*/},
        { name: "Team", href: "#team" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Ozyntria Tech" className="h-6 w-auto sm:h-8" />
                <h2 className="font-bold text-2xl sm:text-1">Ozyntria Tech</h2>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {navigation.map((item) => (
                <a 
                    key={item.name}
                    href={item.href} 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    {item.name}
                </a>
                ))}
            </nav>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
                <ThemeToggle />
                <Button size="sm" className="hidden sm:inline-flex cursor-pointer">
                Get Started
                </Button>
                
                {/* Mobile menu button */}
                <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>
            </div>
            
            {/* Mobile Navigation */}
            {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border">
                <div className="flex flex-col space-y-3 pt-4">
                {navigation.map((item) => (
                    <a 
                    key={item.name}
                    href={item.href} 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                    >
                    {item.name}
                    </a>
                ))}
                <Button size="sm" className="mt-3 w-full sm:hidden">
                    Get Started
                </Button>
                </div>
            </nav>
            )}
        </div>
        </header>
    );
}