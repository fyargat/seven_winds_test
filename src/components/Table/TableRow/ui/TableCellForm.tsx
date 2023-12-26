import { InputHTMLAttributes, PropsWithRef } from 'react';

import styles from './TableRow.module.scss';

interface IProps {
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, object, object> | undefined,
  ) => Promise<void>;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
}

export default function TableCellForm({ onSubmit, inputProps }: IProps) {
  return (
    <form onSubmit={onSubmit}>
      <input className={styles.cellInput} {...inputProps} />
    </form>
  );
}
