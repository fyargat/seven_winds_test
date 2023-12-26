import { Header } from '$/components/Header';
import { Sidebar } from '$/components/Sidebar';
import { Table } from '$/components/Table';

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
        <div
          style={{
            paddingInline: 10,
            flex: 1,
          }}
        >
          <Table />
        </div>
      </div>
    </div>
  );
}
