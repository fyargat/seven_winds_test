import UITableCell from '@mui/material/TableCell';

import { IFlatRow } from '@/types/table.types';

import styles from './TableRow.module.scss';

interface IProps {
  rowData: IFlatRow;
}

export default function TableRowView({ rowData }: IProps) {
  return (
    <>
      <UITableCell className={styles.cell}>{rowData.rowName}</UITableCell>
      <UITableCell className={styles.cell}>{rowData.salary}</UITableCell>
      <UITableCell className={styles.cell}>
        {rowData.equipmentCosts}
      </UITableCell>
      <UITableCell className={styles.cell}>{rowData.overheads}</UITableCell>
      <UITableCell className={styles.cell}>
        {rowData.estimatedProfit}
      </UITableCell>
    </>
  );
}
