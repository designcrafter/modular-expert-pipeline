
import { FlowToolbar } from "@/components/FlowToolbar";
import { SupervisorCard } from "@/components/SupervisorCard";
import { AgentCard } from "@/components/AgentCard";
import { FlowConnections } from "@/components/FlowConnections";
import { WorkflowSidebar } from "@/components/WorkflowSidebar";
import { Search, FileText, Users, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bosch-gray-light/30 to-white">
      <FlowToolbar />
      
      <div className="flex">
        {/* Main Flow Area */}
        <div className="flex-1 relative p-6 min-h-screen" style={{ minHeight: 'calc(100vh - 4rem)' }}>
          <FlowConnections />
          
          {/* Supervisor Agent */}
          <SupervisorCard />
          
          {/* Sub-Agents */}
          <AgentCard
            title="Search & Matchmaking"
            description="Identifies and ranks potential experts based on criteria and requirements."
            status="completed"
            icon={<Search className="w-5 h-5" />}
            color="hsl(var(--bosch-blue))"
            position={{ x: 100, y: 280 }}
          />
          
          <AgentCard
            title="CV Parsing & Enrichment"
            description="Analyzes expert profiles and enriches data with additional insights."
            status="completed"
            icon={<FileText className="w-5 h-5" />}
            color="#10B981"
            position={{ x: 650, y: 280 }}
          />
          
          <AgentCard
            title="Guided Setup & Client Interaction"
            description="Manages client onboarding and requirement gathering process."
            status="completed"
            icon={<Users className="w-5 h-5" />}
            color="#8B5CF6"
            position={{ x: 100, y: 420 }}
          />
          
          <AgentCard
            title="Messaging & Response Handling"
            description="Coordinates communications between clients and matched experts."
            status="running"
            icon={<MessageSquare className="w-5 h-5" />}
            color="#F59E0B"
            position={{ x: 650, y: 420 }}
          />

          {/* Background Grid */}
          <div className="absolute inset-0 opacity-30" style={{ zIndex: -1 }}>
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(212, 31, 39, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 31, 39, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
        
        {/* Sidebar */}
        <WorkflowSidebar />
      </div>
    </div>
  );
};

export default Index;
