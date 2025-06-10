
import { Button } from "@/components/ui/button";
import { Play, Pause, Settings, Download, Share } from "lucide-react";

export const FlowToolbar = () => {
  return (
    <div className="h-16 bg-white border-b border-bosch-gray-light flex items-center justify-between px-6 shadow-sm">
      {/* Left section with logo */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-bosch-red rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-bosch-text font-semibold text-lg">Expert Sourcing AI</span>
        </div>
      </div>

      {/* Center controls */}
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" className="border-bosch-red text-bosch-red hover:bg-bosch-red hover:text-white">
          <Play className="w-4 h-4 mr-1" />
          Run Workflow
        </Button>
        <Button variant="outline" size="sm">
          <Pause className="w-4 h-4 mr-1" />
          Pause
        </Button>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Download className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Share className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
