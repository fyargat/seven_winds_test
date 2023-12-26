import { Header } from '$/components/Header';
import { Table } from '$/components/Table';

export default function HomePage() {
  return (
    <div>
      <Header />
      <div
        style={{
          paddingInline: 10,
        }}
      >
        <Table />
      </div>
    </div>
  );
}
