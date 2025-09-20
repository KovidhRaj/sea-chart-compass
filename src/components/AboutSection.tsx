import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Database, Users, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Anchor,
      title: "Autonomous Floats",
      description: "Robotic instruments that dive to 2000m depth, collecting temperature and salinity data as they rise to the surface."
    },
    {
      icon: Database,
      title: "Real-time Data",
      description: "Continuous data collection with satellite transmission ensures up-to-date ocean monitoring worldwide."
    },
    {
      icon: Users,
      title: "Global Collaboration",
      description: "International cooperation between 30+ countries sharing data and resources for ocean research."
    },
    {
      icon: Award,
      title: "Scientific Excellence",
      description: "Peer-reviewed data quality and standardized procedures ensure reliable scientific measurements."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What is <span className="text-primary">Ocean Monitoring?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our global ocean observing system uses autonomous floats that drift with ocean currents, 
                diving deep to collect crucial data about our planet's largest climate system.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each float spends most of its life below the surface, measuring temperature and salinity 
                as it rises every 10 days to transmit data via satellite before diving again.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-ocean-deep/10">
                <div className="text-3xl font-bold text-primary mb-1">4,000+</div>
                <div className="text-sm text-muted-foreground">Active Floats</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-earth-green/10 to-earth-deep/10">
                <div className="text-3xl font-bold text-earth-green mb-1">2,000m</div>
                <div className="text-sm text-muted-foreground">Max Depth</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="science-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-ocean-deep rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;