import React, { ReactNode } from 'react';

interface RightPanelProps {
  children?: ReactNode;
}

/**
 * Right panel component that will eventually contain the VNC viewer.
 * Takes up approximately 75% of the screen width on desktop and
 * 60% of the viewport height on mobile.
 */
const RightPanel: React.FC<RightPanelProps> = ({ children }) => {
  return (
    <div className="h-full w-full bg-blue-50 p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">VNC Area</h2>
      <div className="text-sm text-blue-500 mb-2">
        <span className="hidden md:inline">75% Width</span>
        <span className="md:hidden">60% Height (Stacked)</span>
      </div>
      <div className="flex-1 flex items-center justify-center bg-blue-100 rounded-md">
        <p className="text-blue-600">
          {children || "Placeholder for VNC viewer"}
        </p>
      </div>
    </div>
  );
};

export default RightPanel; 