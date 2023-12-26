import { IFlatRow } from '$/types/table.types';
import UITableCell from '@mui/material/TableCell';

import styles from './TableRow.module.scss';

interface IProps {
  data: IFlatRow;
}

export default function TableRowView({ data }: IProps) {
  return (
    <>
      <UITableCell className={styles.cell}>{data.rowName}</UITableCell>
      <UITableCell className={styles.cell}>{data.salary}</UITableCell>
      <UITableCell className={styles.cell}>{data.equipmentCosts}</UITableCell>
      <UITableCell className={styles.cell}>{data.overheads}</UITableCell>
      <UITableCell className={styles.cell}>{data.estimatedProfit}</UITableCell>
    </>
  );
}
