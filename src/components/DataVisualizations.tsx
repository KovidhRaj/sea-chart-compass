import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Thermometer, Waves, ArrowUpRight, PlayCircle } from "lucide-react";
import floatsImage from "@/assets/ocean-floats.jpg";
import dataVizImage from "@/assets/data-visualization.jpg";

const DataVisualizations = () => {
  const visualizations = [
    {
      icon: MapPin,
      title: "Global Float Network",
      description: "Interactive map showing real-time locations of active Argo floats worldwide",
      image: floatsImage,
      stats: "3,800+ active floats",
      color: "from-primary to-ocean-deep"
    },
    {
      icon: Thermometer,
      title: "Temperature Profiles",
      description: "Ocean temperature measurements from surface to 2000m depth",
      image: dataVizImage,
      stats: "Daily updates",
      color: "from-earth-green to-earth-deep"
    },
    {
      icon: TrendingUp,
      title: "Climate Trends",
      description: "Long-term ocean warming patterns and climate change indicators",
      image: dataVizImage,
      stats: "20+ years of data",
      color: "from-warning-amber to-orange-600"
    },
    {
      icon: Waves,
      title: "Salinity Data",
      description: "Ocean salinity measurements across different depths and regions",
      image: floatsImage,
      stats: "Global coverage",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="visualizations" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Data <span className="text-primary">Visualizations</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our interactive visualizations to understand ocean patterns, 
            climate trends, and the vital role of ocean monitoring in climate science.
          </p>
        </div>

        {/* Visualization Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visualizations.map((viz, index) => (
            <Card key={index} className="science-card group overflow-hidden">
              <div className="relative">
                <img 
                  src={viz.image}
                  alt={viz.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${viz.color} opacity-60`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <viz.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <PlayCircle className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {viz.stats}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {viz.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {viz.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  View Interactive Map
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="science-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Explore Ocean Data?
            </h3>
            <p className="text-muted-foreground mb-6">
              Access our full suite of interactive visualizations and real-time data feeds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-ocean-deep text-primary-foreground"
              >
                Access Full Platform
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Request API Access
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataVisualizations;