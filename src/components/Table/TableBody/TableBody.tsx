import { useTableStore } from '$/store/useTableStore';
import { flattenRows } from '$/utils/data';
import UITableBody from '@mui/material/TableBody';
import { useEffect, useState } from 'react';

import { TableRow } from '../TableRow';
import { TableSpinner } from '../TableSpinner';

export default function TableBody() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: tableData, fetchTableData } = useTableStore();

  useEffect(() => {
    fetchTableData().finally(() => setIsLoading(false));
  }, [fetchTableData]);

  if (isLoading) {
    return <TableSpinner />;
  }

  const rows = flattenRows(tableData);

  return (
    <UITableBody>
      {rows.map((row) => (
        <TableRow key={row.id} data={row} />
      ))}
    </UITableBody>
  );
}
