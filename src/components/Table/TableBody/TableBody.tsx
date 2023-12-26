import { useTableStore } from '$/store/useTableStore';
import { IFlatRow, IRow } from '$/types/table';
import { deepCopy } from '$/utils/copy';
import { flattenRows } from '$/utils/data';
import UITableBody from '@mui/material/TableBody';
import { useEffect, useState } from 'react';

import { TableRow } from '../TableRow';
import { TableSpinner } from '../TableSpinner';

export const tempRow: IFlatRow = {
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  rowName: ``,
  salary: 0,
  supportCosts: 0,
  parentId: null,
  level: 0,
  hasSibling: false,
  hasChild: false,
  path: [0],
  id: Date.now(),
  child: [],
  total: 0,
  isTemp: true,
};

export default function TableBody() {
  const [isLoading, setIsLoading] = useState(true);
  const { data, fetchTableData, tempRowPath } = useTableStore();

  const rows = [...flattenRows(deepCopy<IRow[]>(data), tempRowPath), tempRow];

  useEffect(() => {
    fetchTableData().finally(() => setIsLoading(false));
  }, [fetchTableData]);

  if (isLoading) {
    return <TableSpinner />;
  }

  return (
    <UITableBody>
      {rows.map((row) => (
        <TableRow key={row.id} data={row} />
      ))}
    </UITableBody>
  );
}
