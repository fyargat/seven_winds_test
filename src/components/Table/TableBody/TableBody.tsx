import UITableBody from '@mui/material/TableBody';

import { TableRow } from '../TableRow';
import { TableSpinner } from '../TableSpinner';
import { useTableBody } from './TableBody.model';

export default function TableBody() {
  const { flatRows, isLoading } = useTableBody();

  if (isLoading) {
    return <TableSpinner />;
  }

  return (
    <UITableBody>
      {flatRows.map((rowData) => (
        <TableRow key={rowData.id} rowData={rowData} />
      ))}
    </UITableBody>
  );
}
