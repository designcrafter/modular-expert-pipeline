
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface AgentCardProps {
  title: string;
  description: string;
  status: "completed" | "running" | "pending" | "error";
  icon: React.ReactNode;
  color: string;
  position: { x: number; y: number };
}

export const AgentCard = ({ title, description, status, icon, color, position }: AgentCardProps) => {
  const statusConfig = {
    completed: { icon: CheckCircle, color: "bg-green-100 text-green-800", text: "Completed" },
    running: { icon: Clock, color: "bg-blue-100 text-blue-800", text: "Running" },
    pending: { icon: Clock, color: "bg-gray-100 text-gray-800", text: "Pending" },
    error: { icon: AlertCircle, color: "bg-red-100 text-red-800", text: "Error" }
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <div 
      className="absolute agent-card"
      style={{ left: position.x, top: position.y }}
    >
      <Card className="w-72 bg-bosch-light-blue/30 border-bosch-blue/30 shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: color }}
              >
                {icon}
              </div>
              <div>
                <CardTitle className="text-bosch-text text-sm font-semibold">{title}</CardTitle>
                <Badge className={`text-xs ${statusConfig[status].color} mt-1`}>
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {statusConfig[status].text}
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-bosch-text/70 text-sm">{description}</p>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-xs text-bosch-gray-dark">Last run: 2 min ago</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
