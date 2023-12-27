import UITableCell from '@mui/material/TableCell';

import { IFlatRow } from '@/types/table.types';

import { formatNumberLocaleRU } from '@/utils/format';

import styles from './TableRow.module.scss';

interface IProps {
  rowData: IFlatRow;
}

export default function TableRowView({ rowData }: IProps) {
  return (
    <>
      <UITableCell className={styles.cell}>{rowData.rowName}</UITableCell>
      <UITableCell className={styles.cell}>
        {formatNumberLocaleRU(rowData.salary)}
      </UITableCell>
      <UITableCell className={styles.cell}>
        {formatNumberLocaleRU(rowData.equipmentCosts)}
      </UITableCell>
      <UITableCell className={styles.cell}>
        {formatNumberLocaleRU(rowData.overheads)}
      </UITableCell>
      <UITableCell className={styles.cell}>
        {formatNumberLocaleRU(rowData.estimatedProfit)}
      </UITableCell>
    </>
  );
}
