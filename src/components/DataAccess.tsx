import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Database, FileText, ExternalLink } from "lucide-react";

const DataAccess = () => {
  const accessMethods = [
    {
      icon: Download,
      title: "Direct Downloads",
      description: "Download processed ocean profile data in NetCDF and CSV formats",
      features: ["Quality-controlled data", "Multiple file formats", "Batch downloads"],
      link: "Browse Files"
    },
    {
      icon: Code,
      title: "API Access",
      description: "Programmatic access to real-time and historical ocean data",
      features: ["RESTful endpoints", "JSON responses", "Rate limiting"],
      link: "API Docs"
    },
    {
      icon: Database,
      title: "Data Portal",
      description: "Interactive web interface for data search and visualization",
      features: ["Advanced filtering", "Map selection", "Preview charts"],
      link: "Open Portal"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive guides for data usage and interpretation",
      features: ["User manuals", "Data formats", "Best practices"],
      link: "Read Docs"
    }
  ];

  return (
    <section id="access" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Data <span className="text-primary">Access</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Multiple ways to access our comprehensive ocean dataset for research, 
            education, and operational applications.
          </p>
        </div>

        {/* Access Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {accessMethods.map((method, index) => (
            <Card key={index} className="science-card h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-ocean-deep rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription className="text-sm">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  {method.link}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start Section */}
        <Card className="science-card max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Quick Start Guide
            </h3>
            <p className="text-muted-foreground">
              New to ocean data? Follow these steps to get started with your first dataset.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold text-foreground">Choose Data Type</h4>
              <p className="text-sm text-muted-foreground">
                Select temperature, salinity, or combined profiles
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <h4 className="font-semibold text-foreground">Set Parameters</h4>
              <p className="text-sm text-muted-foreground">
                Define geographic area and time range
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <h4 className="font-semibold text-foreground">Download & Analyze</h4>
              <p className="text-sm text-muted-foreground">
                Get your data and start your research
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-ocean-deep text-primary-foreground"
            >
              Start Exploring Data
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DataAccess;