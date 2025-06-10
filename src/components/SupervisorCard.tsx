
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Activity } from "lucide-react";

export const SupervisorCard = () => {
  return (
    <div className="absolute" style={{ left: 450, top: 50 }}>
      <Card className="w-80 bg-gradient-to-br from-bosch-red/10 to-bosch-red/5 border-bosch-red/30 shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-bosch-red rounded-lg flex items-center justify-center text-white">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-bosch-text font-bold">Supervisor Agent</CardTitle>
                <Badge className="bg-green-100 text-green-800 mt-1">
                  <Activity className="w-3 h-3 mr-1" />
                  Orchestrating
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-bosch-text/70 text-sm mb-3">
            Coordinates all sub-agents, manages workflow execution, and ensures optimal expert matching process.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white/50 rounded p-2">
              <span className="text-bosch-gray-dark">Active Jobs</span>
              <div className="font-semibold text-bosch-text">12</div>
            </div>
            <div className="bg-white/50 rounded p-2">
              <span className="text-bosch-gray-dark">Success Rate</span>
              <div className="font-semibold text-bosch-text">94.2%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
