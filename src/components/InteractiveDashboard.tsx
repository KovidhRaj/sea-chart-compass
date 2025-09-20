import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ReferenceLine } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { MapPin, TrendingDown, BarChart3, Settings, Download, RefreshCw } from "lucide-react";

// Mock ARGO profile data
const mockTrajectoryData = [
  { lat: 35.2, lng: -140.5, date: "2024-01-15", floatId: "2903123", temp: 18.5, depth: 0 },
  { lat: 35.8, lng: -139.2, date: "2024-01-25", floatId: "2903123", temp: 17.2, depth: 10 },
  { lat: 36.1, lng: -138.8, date: "2024-02-05", floatId: "2903123", temp: 16.8, depth: 50 },
  { lat: 36.4, lng: -138.1, date: "2024-02-15", floatId: "2903123", temp: 15.1, depth: 100 },
  { lat: 36.8, lng: -137.5, date: "2024-02-25", floatId: "2903123", temp: 12.3, depth: 200 },
];

const mockDepthTimeData = [
  { date: "2024-01-01", depth: 0, temperature: 18.5, salinity: 34.2 },
  { date: "2024-01-01", depth: 50, temperature: 16.8, salinity: 34.5 },
  { date: "2024-01-01", depth: 100, temperature: 15.1, salinity: 34.8 },
  { date: "2024-01-01", depth: 200, temperature: 12.3, salinity: 35.0 },
  { date: "2024-01-01", depth: 500, temperature: 8.7, salinity: 34.9 },
  { date: "2024-01-01", depth: 1000, temperature: 4.2, salinity: 34.7 },
  { date: "2024-01-01", depth: 2000, temperature: 2.1, salinity: 34.6 },
];

const mockProfileComparison = [
  { depth: 0, float1_temp: 18.5, float2_temp: 19.2, float1_sal: 34.2, float2_sal: 34.1 },
  { depth: 50, float1_temp: 16.8, float2_temp: 17.1, float1_sal: 34.5, float2_sal: 34.4 },
  { depth: 100, float1_temp: 15.1, float2_temp: 15.8, float1_sal: 34.8, float2_sal: 34.7 },
  { depth: 200, float1_temp: 12.3, float2_temp: 13.1, float1_sal: 35.0, float2_sal: 34.9 },
  { depth: 500, float1_temp: 8.7, float2_temp: 9.2, float1_sal: 34.9, float2_sal: 34.8 },
  { depth: 1000, float1_temp: 4.2, float2_temp: 4.8, float1_sal: 34.7, float2_sal: 34.6 },
  { depth: 2000, float1_temp: 2.1, float2_temp: 2.5, float1_sal: 34.6, float2_sal: 34.5 },
];

const InteractiveDashboard = () => {
  const [selectedFloat, setSelectedFloat] = useState("2903123");
  const [selectedDate, setSelectedDate] = useState("2024-01-01");
  const [activeTab, setActiveTab] = useState("trajectories");

  const chartConfig = {
    temperature: {
      label: "Temperature (°C)",
      color: "hsl(var(--primary))",
    },
    salinity: {
      label: "Salinity (PSU)",
      color: "hsl(var(--earth-green))",
    },
    float1: {
      label: "Float 2903123",
      color: "hsl(var(--primary))",
    },
    float2: {
      label: "Float 2903124",
      color: "hsl(var(--earth-green))",
    },
  };

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Interactive <span className="text-primary">ARGO Dashboards</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Explore real-time ARGO float data through interactive visualizations, trajectory mapping, 
            and comprehensive profile analysis tools.
          </p>
          
          {/* Controls */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <MapPin className="h-3 w-3 mr-1" />
                3,847 Active Floats
              </Badge>
              <Badge variant="secondary" className="bg-earth-green/10 text-earth-green">
                <RefreshCw className="h-3 w-3 mr-1" />
                Updated 2 hrs ago
              </Badge>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="trajectories" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Trajectories
            </TabsTrigger>
            <TabsTrigger value="depth-time" className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4" />
              Depth-Time
            </TabsTrigger>
            <TabsTrigger value="comparison" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Comparison
            </TabsTrigger>
          </TabsList>

          {/* Trajectory Mapping */}
          <TabsContent value="trajectories" className="space-y-6">
            <Card className="science-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Float Trajectory Mapping
                    </CardTitle>
                    <CardDescription>
                      Track ARGO float movements and data collection points
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedFloat} onValueChange={setSelectedFloat}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2903123">Float 2903123</SelectItem>
                        <SelectItem value="2903124">Float 2903124</SelectItem>
                        <SelectItem value="2903125">Float 2903125</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Map Placeholder */}
                  <div className="bg-accent/20 rounded-lg p-8 min-h-[400px] flex items-center justify-center border-2 border-dashed border-accent">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h3>
                      <p className="text-muted-foreground">
                        Real-time trajectory visualization<br />
                        Connect to view live float locations
                      </p>
                    </div>
                  </div>
                  
                  {/* Trajectory Data */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Recent Positions</h4>
                    <div className="space-y-3 max-h-[350px] overflow-y-auto">
                      {mockTrajectoryData.map((point, index) => (
                        <div key={index} className="bg-accent/10 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="text-sm font-medium text-foreground">
                              {point.date}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {point.depth}m depth
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div>Lat: {point.lat}°, Lng: {point.lng}°</div>
                            <div>Temperature: {point.temp}°C</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Depth-Time Plots */}
          <TabsContent value="depth-time" className="space-y-6">
            <Card className="science-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-primary" />
                      Depth-Time Profile Analysis
                    </CardTitle>
                    <CardDescription>
                      Vertical ocean property distributions and temporal changes
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedDate} onValueChange={setSelectedDate}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-01-01">Jan 1, 2024</SelectItem>
                        <SelectItem value="2024-02-01">Feb 1, 2024</SelectItem>
                        <SelectItem value="2024-03-01">Mar 1, 2024</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Temperature Profile */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Temperature Profile</h4>
                    <ChartContainer config={chartConfig} className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={mockDepthTimeData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis 
                            dataKey="temperature" 
                            label={{ value: 'Temperature (°C)', position: 'insideBottom', offset: -5 }}
                            stroke="hsl(var(--foreground))"
                          />
                          <YAxis 
                            dataKey="depth"
                            reversed
                            label={{ value: 'Depth (m)', angle: -90, position: 'insideLeft' }}
                            stroke="hsl(var(--foreground))"
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="temperature" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                            dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  {/* Salinity Profile */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Salinity Profile</h4>
                    <ChartContainer config={chartConfig} className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={mockDepthTimeData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis 
                            dataKey="salinity" 
                            label={{ value: 'Salinity (PSU)', position: 'insideBottom', offset: -5 }}
                            stroke="hsl(var(--foreground))"
                          />
                          <YAxis 
                            dataKey="depth"
                            reversed
                            label={{ value: 'Depth (m)', angle: -90, position: 'insideLeft' }}
                            stroke="hsl(var(--foreground))"
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="salinity" 
                            stroke="hsl(var(--earth-green))" 
                            strokeWidth={2}
                            dot={{ fill: "hsl(var(--earth-green))", strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Comparison */}
          <TabsContent value="comparison" className="space-y-6">
            <Card className="science-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Profile Comparison Analysis
                    </CardTitle>
                    <CardDescription>
                      Compare profiles between different floats and time periods
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Add Float
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Temperature Comparison */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Temperature Comparison</h4>
                    <ChartContainer config={chartConfig} className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={mockProfileComparison}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis 
                            dataKey="float1_temp" 
                            label={{ value: 'Temperature (°C)', position: 'insideBottom', offset: -5 }}
                            stroke="hsl(var(--foreground))"
                          />
                          <YAxis 
                            dataKey="depth"
                            reversed
                            label={{ value: 'Depth (m)', angle: -90, position: 'insideLeft' }}
                            stroke="hsl(var(--foreground))"
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="float1_temp" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                            name="Float 2903123"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="float2_temp" 
                            stroke="hsl(var(--earth-green))" 
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            name="Float 2903124"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  {/* Salinity Comparison */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Salinity Comparison</h4>
                    <ChartContainer config={chartConfig} className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={mockProfileComparison}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis 
                            dataKey="float1_sal" 
                            label={{ value: 'Salinity (PSU)', position: 'insideBottom', offset: -5 }}
                            stroke="hsl(var(--foreground))"
                          />
                          <YAxis 
                            dataKey="depth"
                            reversed
                            label={{ value: 'Depth (m)', angle: -90, position: 'insideLeft' }}
                            stroke="hsl(var(--foreground))"
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="float1_sal" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                            name="Float 2903123"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="float2_sal" 
                            stroke="hsl(var(--earth-green))" 
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            name="Float 2903124"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveDashboard;