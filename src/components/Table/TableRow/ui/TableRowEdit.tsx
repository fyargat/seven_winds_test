import UITableCell from '@mui/material/TableCell';
import cn from 'classnames';

import { IFlatRow, RowFormDataType } from '@/types/table.types';

import { useTableRowEdit } from '../models/TableRowEdit.model';
import TableCellForm from './TableCellForm';
import styles from './TableRow.module.scss';

interface IProps {
  rowData: IFlatRow;
  onCreateOrUpdate: (formData: RowFormDataType) => void;
}

export default function TableRowEdit(props: IProps) {
  const { register, errors, autoFocus, onSubmit } = useTableRowEdit(props);

  return (
    <>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            autoFocus,
            ...register('rowName'),
          }}
          error={errors.rowName}
        />
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            ...register('salary', { valueAsNumber: true }),
          }}
          error={errors.salary}
        />
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            ...register('equipmentCosts', { valueAsNumber: true }),
          }}
          error={errors.equipmentCosts}
        />
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            ...register('overheads', { valueAsNumber: true }),
          }}
          error={errors.overheads}
        />
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <TableCellForm
          onSubmit={onSubmit}
          inputProps={{
            ...register('estimatedProfit', { valueAsNumber: true }),
          }}
          error={errors.estimatedProfit}
        />
      </UITableCell>
    </>
  );
}
