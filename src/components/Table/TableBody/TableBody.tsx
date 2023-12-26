import { useTableStore } from '$/store/useTableStore';
import { flattenRows } from '$/utils/data';
import UITableBody from '@mui/material/TableBody';
import { useEffect } from 'react';

import { TableRow } from '../TableRow';

export default function TableBody() {
  const { data: tableData, fetchTableData } = useTableStore();

  useEffect(() => {
    fetchTableData();
  }, [fetchTableData]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  const rows = flattenRows(tableData);

  return (
    <UITableBody>
      {rows.map((row) => (
        <TableRow key={row.id} data={row} />
      ))}
    </UITableBody>
  );
}
