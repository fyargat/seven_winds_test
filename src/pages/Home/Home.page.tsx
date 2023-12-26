import { Header } from '$/components/Header';
import { Sidebar } from '$/components/Sidebar';
import { Viewer } from '$/components/Viewer';

// TODO:
// 1. Rename to AppPage
export default function HomePage() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          minHeight: 'calc(100vh - 44px)',
        }}
      >
        <Sidebar />
        <Viewer />
      </div>
    </div>
  );
}
