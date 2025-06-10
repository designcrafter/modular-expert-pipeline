
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Plus, Zap, Users, Target } from "lucide-react";

export const WorkflowSidebar = () => {
  return (
    <div className="w-80 bg-bosch-gray-light/50 border-l border-bosch-gray-medium p-4 space-y-4 overflow-y-auto">
      {/* Pipeline Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-bosch-blue text-sm font-semibold flex items-center">
            <Target className="w-4 h-4 mr-2" />
            Pipeline Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-bosch-text">Overall Progress</span>
            <span className="text-sm font-semibold text-bosch-text">3 of 4 completed</span>
          </div>
          <Progress value={75} className="h-2" />
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                <span>Search & Matchmaking</span>
              </div>
              <Badge className="bg-green-100 text-green-800 text-xs">Done</Badge>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                <span>CV Parsing</span>
              </div>
              <Badge className="bg-green-100 text-green-800 text-xs">Done</Badge>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                <span>Guided Setup</span>
              </div>
              <Badge className="bg-green-100 text-green-800 text-xs">Done</Badge>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center">
                <Clock className="w-3 h-3 text-blue-500 mr-2" />
                <span>Messaging & Response</span>
              </div>
              <Badge className="bg-blue-100 text-blue-800 text-xs">Running</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-bosch-blue text-sm font-semibold flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-xs text-bosch-text space-y-1">
            <div className="p-2 bg-blue-50 rounded text-blue-700">
              • Awaiting client responses (3 pending)
            </div>
            <div className="p-2 bg-yellow-50 rounded text-yellow-700">
              • Schedule expert interviews next week
            </div>
            <div className="p-2 bg-green-50 rounded text-green-700">
              • Prepare final expert recommendations
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-bosch-blue text-sm font-semibold flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button size="sm" className="w-full justify-start" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add New Agent
          </Button>
          <Button size="sm" className="w-full justify-start" variant="outline">
            <Target className="w-4 h-4 mr-2" />
            Create Template
          </Button>
          <Button size="sm" className="w-full justify-start bg-bosch-red hover:bg-bosch-red/90 text-white">
            <Zap className="w-4 h-4 mr-2" />
            Run Full Pipeline
          </Button>
        </CardContent>
      </Card>

      {/* Workflow Metrics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-bosch-blue text-sm font-semibold">Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="text-center p-2 bg-white rounded">
              <div className="font-semibold text-bosch-text">92.4%</div>
              <div className="text-bosch-gray-dark">Success Rate</div>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <div className="font-semibold text-bosch-text">1.2h</div>
              <div className="text-bosch-gray-dark">Avg. Time</div>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <div className="font-semibold text-bosch-text">247</div>
              <div className="text-bosch-gray-dark">Total Runs</div>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <div className="font-semibold text-bosch-text">15</div>
              <div className="text-bosch-gray-dark">Active Jobs</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
