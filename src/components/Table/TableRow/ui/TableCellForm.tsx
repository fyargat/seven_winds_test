import cn from 'classnames';
import { InputHTMLAttributes, PropsWithRef } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './TableRow.module.scss';

interface IProps {
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, object, object> | undefined,
  ) => Promise<void>;
  inputProps: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
  error: FieldError | undefined;
}

export default function TableCellForm({ onSubmit, inputProps, error }: IProps) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className={cn(styles.cellInput, {
          [styles.cellInputInvalid]: error,
        })}
        {...inputProps}
      />
    </form>
  );
}
