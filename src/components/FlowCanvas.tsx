
import { useCallback } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
  MarkerType,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Search, FileText, Users, MessageSquare } from "lucide-react";
import SupervisorNode from './flow/SupervisorNode';
import AgentNode from './flow/AgentNode';

const nodeTypes = {
  supervisor: SupervisorNode,
  agent: AgentNode,
};

const initialNodes: Node[] = [
  {
    id: 'supervisor',
    type: 'supervisor',
    position: { x: 400, y: 50 },
    data: {},
  },
  {
    id: 'search',
    type: 'agent',
    position: { x: 100, y: 300 },
    data: {
      title: "Search & Matchmaking",
      description: "Identifies and ranks potential experts based on criteria and requirements.",
      status: "completed",
      icon: <Search className="w-5 h-5" />,
      color: "hsl(var(--bosch-blue))",
    },
  },
  {
    id: 'cv',
    type: 'agent',
    position: { x: 650, y: 300 },
    data: {
      title: "CV Parsing & Enrichment",
      description: "Analyzes expert profiles and enriches data with additional insights.",
      status: "completed",
      icon: <FileText className="w-5 h-5" />,
      color: "#10B981",
    },
  },
  {
    id: 'setup',
    type: 'agent',
    position: { x: 900, y: 180 },
    data: {
      title: "Guided Setup & Client Interaction",
      description: "Manages client onboarding and requirement gathering process.",
      status: "completed",
      icon: <Users className="w-5 h-5" />,
      color: "#8B5CF6",
    },
  },
  {
    id: 'messaging',
    type: 'agent',
    position: { x: 100, y: 180 },
    data: {
      title: "Messaging & Response Handling",
      description: "Coordinates communications between clients and matched experts.",
      status: "running",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "#F59E0B",
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'supervisor-search',
    source: 'supervisor',
    target: 'search',
    sourceHandle: 'search',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { stroke: 'hsl(var(--bosch-blue))', strokeWidth: 2 },
  },
  {
    id: 'supervisor-cv',
    source: 'supervisor',
    target: 'cv',
    sourceHandle: 'cv',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { stroke: 'hsl(var(--bosch-blue))', strokeWidth: 2 },
  },
  {
    id: 'supervisor-setup',
    source: 'supervisor',
    target: 'setup',
    sourceHandle: 'setup',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { stroke: 'hsl(var(--bosch-blue))', strokeWidth: 2 },
  },
  {
    id: 'supervisor-messaging',
    source: 'supervisor',
    target: 'messaging',
    sourceHandle: 'messaging',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { stroke: 'hsl(var(--bosch-blue))', strokeWidth: 2 },
  },
];

export const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="flex-1 relative" style={{ height: 'calc(100vh - 4rem)' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        className="bg-gradient-to-br from-bosch-gray-light/30 to-white"
      >
        <Controls />
        <MiniMap 
          zoomable 
          pannable 
          className="bg-white/80"
          nodeColor={(node) => {
            if (node.type === 'supervisor') return 'hsl(var(--bosch-red))';
            return 'hsl(var(--bosch-blue))';
          }}
        />
        <Background 
          variant={BackgroundVariant.Dots}
          gap={40} 
          size={1} 
          color="rgba(212, 31, 39, 0.1)" 
        />
      </ReactFlow>
    </div>
  );
};
