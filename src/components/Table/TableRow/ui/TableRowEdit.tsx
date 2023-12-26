import { IFlatRow, UpdatedRowDataType } from '$/types/table.types';
import UITableCell from '@mui/material/TableCell';
import cn from 'classnames';

import { useTableRowEdit } from '../models/TableRowEdit.model';
import TableCellForm from './TableCellForm';
import styles from './TableRow.module.scss';

interface IProps {
  data: IFlatRow;
  onCreateOrUpdate: (data: UpdatedRowDataType) => void;
}

export default function TableRowEdit(props: IProps) {
  const { register, onSubmit } = useTableRowEdit(props);

  return (
    <>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            autoFocus: true,
            ...register('rowName'),
          }}
        />
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            ...register('salary', { valueAsNumber: true }),
          }}
        />
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            ...register('equipmentCosts', { valueAsNumber: true }),
          }}
        />
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            ...register('overheads', { valueAsNumber: true }),
          }}
        />
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            ...register('estimatedProfit', { valueAsNumber: true }),
          }}
        />
      </UITableCell>
    </>
  );
}
