import { Smartphone, Monitor, Tablet, Globe, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DistributionDevicesProps {
  domain: string;
}

export const DistributionDevices = ({ domain }: DistributionDevicesProps) => {
  const deviceData = [
    { device: "Mobile", percentage: 62, count: 125400, icon: Smartphone, color: "bg-blue-500" },
    { device: "Desktop", percentage: 28, count: 56700, icon: Monitor, color: "bg-green-500" },
    { device: "Tablet", percentage: 10, count: 20200, icon: Tablet, color: "bg-purple-500" }
  ];

  const publisherNetworks = [
    { network: "Google Display Network", percentage: 35, reach: "2.1M" },
    { network: "Facebook Audience Network", percentage: 28, reach: "1.8M" },
    { network: "YouTube", percentage: 22, reach: "1.4M" },
    { network: "Instagram", percentage: 15, reach: "980K" }
  ];

  const topCountries = [
    { country: "United States", percentage: 45, users: "890K" },
    { country: "Canada", percentage: 18, users: "356K" },
    { country: "United Kingdom", percentage: 12, users: "238K" },
    { country: "Australia", percentage: 10, users: "198K" },
    { country: "Germany", percentage: 8, users: "158K" },
    { country: "Others", percentage: 7, users: "139K" }
  ];

  const adSchedule = [
    { time: "00-06", activity: 15 },
    { time: "06-12", activity: 45 },
    { time: "12-18", activity: 78 },
    { time: "18-24", activity: 62 }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Smartphone className="w-6 h-6 text-primary" />
        Distribution & Devices
      </h2>
      
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Device Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deviceData.map((device) => {
                const Icon = device.icon;
                return (
                  <div key={device.device} className="flex items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-foreground">{device.device}</span>
                          <span className="text-sm text-muted-foreground">{device.percentage}%</span>
                        </div>
                        <div className="w-full h-3 bg-secondary rounded-full">
                          <div 
                            className={`h-3 ${device.color} rounded-full transition-all duration-500`}
                            style={{ width: `${device.percentage}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{device.count.toLocaleString()} users</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Device pie chart visual */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-32 h-32">
                <div className="w-full h-full rounded-full" style={{
                  background: `conic-gradient(
                    #3b82f6 0deg ${deviceData[0].percentage * 3.6}deg,
                    #10b981 ${deviceData[0].percentage * 3.6}deg ${(deviceData[0].percentage + deviceData[1].percentage) * 3.6}deg,
                    #8b5cf6 ${(deviceData[0].percentage + deviceData[1].percentage) * 3.6}deg 360deg
                  )`
                }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card rounded-full w-16 h-16 flex items-center justify-center border">
                    <span className="text-xs font-bold">Devices</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Geographic Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topCountries.map((country, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                  <span className="font-medium text-foreground">{country.country}</span>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-foreground">{country.percentage}%</p>
                      <p className="text-xs text-muted-foreground">{country.users}</p>
                    </div>
                    <div className="w-12 h-2 bg-secondary rounded-full">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${(country.percentage / 45) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Publisher Networks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              Publisher Networks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {publisherNetworks.map((network, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{network.network}</h4>
                    <span className="text-sm text-muted-foreground">{network.percentage}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="w-full h-2 bg-secondary rounded-full">
                        <div 
                          className="h-2 bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${(network.percentage / 35) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{network.reach}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ad Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ad Schedule Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end gap-2 h-32">
                {adSchedule.map((slot, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-primary rounded-t transition-all duration-500 hover:bg-primary/80"
                      style={{ 
                        height: `${slot.activity}%`,
                        minHeight: '8px'
                      }}
                    />
                    <span className="text-xs text-muted-foreground">{slot.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Peak Hours</p>
                  <p className="font-semibold text-foreground">12:00 - 18:00</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Avg Daily Reach</p>
                  <p className="font-semibold text-foreground">1.2M users</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};