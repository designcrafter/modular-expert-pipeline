
import { FlowToolbar } from "@/components/FlowToolbar";
import { FlowCanvas } from "@/components/FlowCanvas";
import { WorkflowSidebar } from "@/components/WorkflowSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bosch-gray-light/30 to-white">
      <FlowToolbar />
      
      <div className="flex">
        <FlowCanvas />
        <WorkflowSidebar />
      </div>
    </div>
  );
};

export default Index;
