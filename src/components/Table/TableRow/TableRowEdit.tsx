import { FlattenedRowData, UpdateRowPayload } from '$/types';
import UITableCell from '@mui/material/TableCell';
import cn from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './TableRow.module.scss';

interface IProps {
  data: FlattenedRowData;
  onUpdate: (data: UpdateRowPayload) => void;
}

type Inputs = {
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
};

export default function TableRowEdit({ data, onUpdate }: IProps) {
  const { register, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      rowName: data.rowName,
      salary: data.salary,
      equipmentCosts: data.equipmentCosts,
      overheads: data.overheads,
      estimatedProfit: data.estimatedProfit,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await onUpdate(data);
    reset();
  };

  return (
    <>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.cellInput}
            autoFocus
            {...register('rowName')}
          />
        </form>
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.cellInput}
            {...register('salary', { valueAsNumber: true })}
          />
        </form>
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.cellInput}
            {...register('equipmentCosts', { valueAsNumber: true })}
          />
        </form>
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.cellInput}
            {...register('overheads', { valueAsNumber: true })}
          />
        </form>
      </UITableCell>
      <UITableCell className={cn(styles.cell, styles.cellEdit)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.cellInput}
            {...register('estimatedProfit', { valueAsNumber: true })}
          />
        </form>
      </UITableCell>
    </>
  );
}
