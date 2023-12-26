import { Header } from '$/components/Header';
import { Sidebar } from '$/components/Sidebar';
import { Viewer } from '$/components/Viewer';
import { AppLayout } from '$/layouts/AppLayout';

// TODO:
// 1. Rename to AppPage
export default function HomePage() {
  return (
    <AppLayout header={<Header />} sidebar={<Sidebar />} viewer={<Viewer />} />
  );
}
