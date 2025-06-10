
export const FlowConnections = () => {
  return (
    <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {/* Supervisor to Search & Matchmaking */}
      <path
        d="M 530 180 Q 400 220 300 280"
        stroke="hsl(var(--bosch-blue))"
        strokeWidth="2"
        fill="none"
        className="flow-connection"
        markerEnd="url(#arrowhead)"
      />
      
      {/* Supervisor to CV Parsing */}
      <path
        d="M 620 180 Q 750 220 850 280"
        stroke="hsl(var(--bosch-blue))"
        strokeWidth="2"
        fill="none"
        className="flow-connection"
        markerEnd="url(#arrowhead)"
      />
      
      {/* Supervisor to Guided Setup */}
      <path
        d="M 530 200 Q 400 350 300 420"
        stroke="hsl(var(--bosch-blue))"
        strokeWidth="2"
        fill="none"
        className="flow-connection"
        markerEnd="url(#arrowhead)"
      />
      
      {/* Supervisor to Messaging */}
      <path
        d="M 620 200 Q 750 350 850 420"
        stroke="hsl(var(--bosch-blue))"
        strokeWidth="2"
        fill="none"
        className="flow-connection"
        markerEnd="url(#arrowhead)"
      />

      {/* Inter-agent connections */}
      <path
        d="M 572 330 L 578 330"
        stroke="hsl(var(--bosch-gray-dark))"
        strokeWidth="1"
        fill="none"
        strokeDasharray="5,5"
      />
      
      <path
        d="M 572 470 L 578 470"
        stroke="hsl(var(--bosch-gray-dark))"
        strokeWidth="1"
        fill="none"
        strokeDasharray="5,5"
      />

      {/* Arrow marker definition */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="hsl(var(--bosch-blue))"
          />
        </marker>
      </defs>
    </svg>
  );
};
