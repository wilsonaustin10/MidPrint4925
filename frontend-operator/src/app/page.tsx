import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout 
      leftPanelContent="This will be the chat interface"
      rightPanelContent="This will be the VNC viewer"
    />
  );
}
