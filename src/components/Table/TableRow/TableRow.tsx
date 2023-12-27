import UITableRow from '@mui/material/TableRow';
import cn from 'classnames';

import { IFlatRow } from '@/types/table.types';

import { TableLevelCell } from '../TableLevelCell';
import { useTableRow } from './models/TableRow.model';
import styles from './ui/TableRow.module.scss';
import TableRowEdit from './ui/TableRowEdit';
import TableRowView from './ui/TableRowView';

interface IProps {
  rowData: IFlatRow;
}

export default function TableRow(props: IProps) {
  const {
    rowData,
    rowRef,
    isEdit,
    isLoading,
    onDoubleClick,
    onTempRowCreate,
    onCreateOrUpdate,
    onDelete,
  } = useTableRow(props);

  return (
    <UITableRow
      ref={rowRef}
      onClick={onDoubleClick}
      className={cn(styles.container, {
        [styles.containerLoading]: isLoading,
      })}
    >
      <TableLevelCell
        level={rowData.level}
        hasParent={Boolean(rowData.parentId)}
        hasSibling={Boolean(rowData.hasSibling)}
        hasChild={Boolean(rowData.hasChild)}
        onAdd={onTempRowCreate}
        onDelete={onDelete}
        isDisabled={isEdit || isLoading}
      />

      {isEdit ? (
        <TableRowEdit rowData={rowData} onCreateOrUpdate={onCreateOrUpdate} />
      ) : (
        <TableRowView rowData={rowData} />
      )}
    </UITableRow>
  );
}
