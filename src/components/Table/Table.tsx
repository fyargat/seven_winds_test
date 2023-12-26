import UITable from '@mui/material/Table';

import TableBody from './TableBody/TableBody';
import { TableHead } from './TableHead';

export default function Table() {
  return (
    <UITable>
      <colgroup>
        <col style={{ width: 'auto' }} />
        <col style={{ width: '40%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '12%' }} />
      </colgroup>
      <TableHead />
      <TableBody />
    </UITable>
  );
}
