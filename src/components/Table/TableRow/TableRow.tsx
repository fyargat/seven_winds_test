import { IFlatRow } from '$/types/table.types';
import UITableRow from '@mui/material/TableRow';

import { TableLevelCell } from '../TableLevelCell';
import { useTableRow } from './models/TableRow.model';
import styles from './ui/TableRow.module.scss';
import TableRowEdit from './ui/TableRowEdit';
import TableRowView from './ui/TableRowView';

interface IProps {
  data: IFlatRow;
}

export default function TableRow(props: IProps) {
  const {
    data,
    ref,
    isEdit,
    onClick,
    onTempRowCreate,
    onCreateOrUpdate,
    onDelete,
  } = useTableRow(props);

  return (
    <UITableRow ref={ref} onClick={onClick} className={styles.container}>
      <TableLevelCell
        level={data.level}
        hasParent={Boolean(data.parentId)}
        hasSibling={Boolean(data.hasSibling)}
        hasChild={Boolean(data.hasChild)}
        onAdd={onTempRowCreate}
        onDelete={onDelete}
        isDisabled={isEdit}
      />

      {isEdit ? (
        <TableRowEdit data={data} onCreateOrUpdate={onCreateOrUpdate} />
      ) : (
        <TableRowView data={data} />
      )}
    </UITableRow>
  );
}
