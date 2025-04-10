import React, { ReactNode } from 'react';

interface LeftPanelProps {
  children?: ReactNode;
}

/**
 * Left panel component that will eventually contain the chat interface.
 * Takes up approximately 25% of the screen width on desktop and 
 * 40% of the viewport height on mobile.
 */
const LeftPanel: React.FC<LeftPanelProps> = ({ children }) => {
  return (
    <div className="h-full w-full bg-gray-100 p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Chat Area</h2>
      <div className="text-sm text-gray-500 mb-2">
        <span className="hidden md:inline">25% Width</span>
        <span className="md:hidden">40% Height (Stacked)</span>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-200 rounded-md">
        <p className="text-gray-600">
          {children || "Placeholder for chat interface"}
        </p>
      </div>
    </div>
  );
};

export default LeftPanel; 