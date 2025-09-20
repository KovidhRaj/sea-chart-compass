import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Activity, Globe, BarChart3 } from "lucide-react";
import heroImage from "@/assets/ocean-hero.jpg";

const Hero = () => {
  const stats = [
    { icon: Globe, label: "Active Floats", value: "3,800+" },
    { icon: Activity, label: "Daily Profiles", value: "800+" },
    { icon: BarChart3, label: "Countries", value: "30+" },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Ocean data visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-float-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Monitoring Our</span>
                <br />
                <span className="text-primary wave-animation bg-clip-text text-transparent">
                  Ocean Planet
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Real-time ocean data collection from a global network of autonomous floats, 
                providing critical insights for climate research and ocean understanding.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-ocean-deep text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Explore Data
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="science-card p-4 text-center hover-lift">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Data Points Animation */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Animated Data Points */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute data-pulse bg-primary rounded-full"
                  style={{
                    width: Math.random() * 12 + 8 + 'px',
                    height: Math.random() * 12 + 8 + 'px',
                    top: Math.random() * 80 + '%',
                    left: Math.random() * 80 + '%',
                    animationDelay: i * 0.3 + 's',
                  }}
                />
              ))}
              
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-ocean-deep rounded-full flex items-center justify-center shadow-2xl">
                  <Globe className="h-8 w-8 text-primary-foreground animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;