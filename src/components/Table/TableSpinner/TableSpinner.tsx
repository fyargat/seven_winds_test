import UITableBody from '@mui/material/TableBody';
import UITableCell from '@mui/material/TableCell';
import UITableRow from '@mui/material/TableRow';

import styles from './TableSpinner.module.scss';

export default function TableSpinner() {
  return (
    <UITableBody>
      <UITableRow className={styles.row}>
        <UITableCell className={styles.cell} colSpan={100}>
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </UITableCell>
      </UITableRow>
    </UITableBody>
  );
}
