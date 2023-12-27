import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent';

import { AppLayout } from '@/layouts/AppLayout';

export default function AppPage() {
  return <AppLayout header={<Header />} main={<MainContent />} />;
}
