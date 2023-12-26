import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Viewer } from '@/components/Viewer';

import { AppLayout } from '@/layouts/AppLayout';

export default function AppPage() {
  return (
    <AppLayout header={<Header />} sidebar={<Sidebar />} viewer={<Viewer />} />
  );
}
