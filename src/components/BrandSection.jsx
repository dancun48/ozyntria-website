import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import ozyntiaLogo from "../assets/images/logo.png";

export function BrandSection() {
    const [copiedColor, setCopiedColor] = useState(null);

    const colorPalette = [
        { name: "Primary Dark", hex: "#08376b", description: "Main brand color" },
        { name: "Light Gray", hex: "#f5f5f5", description: "Background color" },
        { name: "Cyan Blue", hex: "#00bcd4", description: "Brand accent color" },
        { name: "Light Blue", hex: "#4fc3f7", description: "Supporting blue" },
        { name: "Success", hex: "#22c55e", description: "Success states" },
        { name: "Warning", hex: "#f59e0b", description: "Warning states" }
    ];

    const copyToClipboard = (hex) => {
        navigator.clipboard.writeText(hex);
        setCopiedColor(hex);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <section id="brand" className="py-16 sm:py-20 bg-muted/30 transition-colors">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Brand Guidelines</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Ozyntria Tech's visual identity system ensures consistency across all touchpoints and communications.
            </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Logo Guidelines */}
            <Card className="bg-card">
                <CardHeader>
                <CardTitle className="text-primary">Logo Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-4">
                    <div className="p-6 sm:p-8 bg-muted/20 rounded-lg text-center">
                    <img src={ozyntiaLogo} alt="Ozyntria Tech Primary Logo" className="h-12 sm:h-16 w-auto mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Primary Logo</p>
                    </div>
                    <div className="p-6 sm:p-8 bg-primary rounded-lg text-center">
                    <div className="bg-primary-foreground p-3 sm:p-4 rounded-lg inline-block">
                        <img src={ozyntiaLogo} alt="Ozyntria Tech on Dark Background" className="h-10 sm:h-12 w-auto" />
                    </div>
                    <p className="text-sm text-primary-foreground mt-4">Logo on Dark Background</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Usage Guidelines</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Maintain clear space equal to the logo height</li>
                    <li>• Don't stretch or distort the logo</li>
                    <li>• Use high contrast backgrounds</li>
                    </ul>
                </div>
                </CardContent>
            </Card>

            {/* Typography */}
            <Card className="bg-card">
                <CardHeader>
                <CardTitle className="text-primary">Typography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-4">
                    <div className="p-4 sm:p-6 border border-border rounded-lg">
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Heading 1</h1>
                    <p className="text-sm text-muted-foreground">Primary headlines and titles</p>
                    </div>
                    <div className="p-4 sm:p-6 border border-border rounded-lg">
                    <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Heading 2</h2>
                    <p className="text-sm text-muted-foreground">Section headers and subheadings</p>
                    </div>
                    <div className="p-4 sm:p-6 border border-border rounded-lg">
                    <p className="text-base text-foreground mb-2">Body Text</p>
                    <p className="text-sm text-muted-foreground">Regular content and descriptions</p>
                    </div>
                </div>
                </CardContent>
            </Card>
            </div>

            {/* Color Palette */}
            <Card className="bg-card">
            <CardHeader>
                <CardTitle className="text-primary">Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {colorPalette.map((color, index) => (
                    <div key={index} className="group">
                    <div 
                        className="w-full h-16 sm:h-20 rounded-lg mb-3 cursor-pointer border border-border transition-transform group-hover:scale-105"
                        style={{ backgroundColor: color.hex }}
                        onClick={() => copyToClipboard(color.hex)}
                    ></div>
                    <div className="space-y-1">
                        <h4 className="font-medium text-sm text-foreground">{color.name}</h4>
                        <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground font-mono">{color.hex}</span>
                        <button
                            onClick={() => copyToClipboard(color.hex)}
                            className="p-1 hover:bg-muted rounded transition-colors"
                        >
                            {copiedColor === color.hex ? (
                            <Check className="w-3 h-3 text-green-500" />
                            ) : (
                            <Copy className="w-3 h-3 text-muted-foreground" />
                            )}
                        </button>
                        </div>
                        <p className="text-xs text-muted-foreground">{color.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </CardContent>
            </Card>
        </div>
        </section>
    );
}