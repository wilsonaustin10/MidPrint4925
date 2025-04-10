import React, { ReactNode } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import styles from './Layout.module.css';

interface LayoutProps {
  leftPanelContent?: ReactNode;
  rightPanelContent?: ReactNode;
}

/**
 * Main layout component for the application.
 * Creates a two-column layout with left panel (25% width) and right panel (75% width).
 */
const Layout: React.FC<LayoutProps> = ({ leftPanelContent, rightPanelContent }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <LeftPanel>{leftPanelContent}</LeftPanel>
      </div>
      <div className={styles.rightPanel}>
        <RightPanel>{rightPanelContent}</RightPanel>
      </div>
    </div>
  );
};

export default Layout; 