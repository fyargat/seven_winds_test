import UITableCell from '@mui/material/TableCell';
import UITableHead from '@mui/material/TableHead';
import UITableRow from '@mui/material/TableRow';

import styles from './TableHead.module.scss';

export default function TableHead() {
  return (
    <UITableHead>
      <UITableRow>
        <UITableCell className={styles.cell}>Уровень</UITableCell>
        <UITableCell className={styles.cell}>Наименование работ</UITableCell>
        <UITableCell className={styles.cell}>Основная з/п</UITableCell>
        <UITableCell className={styles.cell}>Оборудование</UITableCell>
        <UITableCell className={styles.cell}>Накладные расходы</UITableCell>
        <UITableCell className={styles.cell}>Сметная прибыль</UITableCell>
      </UITableRow>
    </UITableHead>
  );
}
