import { useTableStore } from '$/store/useTableStore';
import { FlattenedRowData, UpdateRowPayload } from '$/types';
import { findTargetNode } from '$/utils/data';
import UITableRow from '@mui/material/TableRow';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { TableLevelCell } from '../TableLevelCell';
import styles from './TableRow.module.scss';
import TableRowEdit from './TableRowEdit';
import TableRowView from './TableRowView';

interface IProps {
  data: FlattenedRowData;
}

export default function TableRow({ data }: IProps) {
  const [isEdit, setIsEdit] = useState(data.isTemp ?? false);
  const ref = useRef(null);
  const {
    data: tableData,
    createRow,
    createTempRow,
    updateRow,
    deleteRow,
    deleteTempRow,
  } = useTableStore();

  const handleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (e.detail !== 2) return;

    setIsEdit(true);
  };

  const handleTempRowAdd = async () => {
    if (isEdit) return;

    const parentId = findTargetNode(tableData, data.path).id;

    const newRow = {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: ``,
      salary: 0,
      supportCosts: 0,
      parentId,

      // temp
      id: Date.now(),
      child: [],
      total: 0,
      isTemp: true,
    };

    await createTempRow(data.path, newRow);
  };

  const handleUpdate = async (updatedData: UpdateRowPayload) => {
    if (data.isTemp) {
      const parentId = findTargetNode(tableData, data.path.slice(0, -1)).id;

      const newRow = {
        equipmentCosts: 0,
        estimatedProfit: 0,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0,
        rowName: ``,
        salary: 0,
        supportCosts: 0,
        parentId,
        ...updatedData,
      };

      await createRow(data.path, newRow);
      return;
    }

    const updatedRow = {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      salary: 0,
      supportCosts: 0,
      ...updatedData,
    };

    await updateRow(data.path, data.id, updatedRow);
    setIsEdit(false);
  };

  const handleDelete = async () => {
    if (isEdit) return;

    await deleteRow(data.path, data.id);
  };

  const handleClickOutside = () => {
    if (data.isTemp) {
      deleteTempRow(data.path, data.id);
      return;
    }

    if (!isEdit) return;

    setIsEdit(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <UITableRow ref={ref} onClick={handleClick} className={styles.container}>
      <TableLevelCell
        level={data.level}
        hasParent={Boolean(data.parentId)}
        hasSibling={Boolean(data.hasSibling)}
        hasChild={Boolean(data.hasChild)}
        onAdd={handleTempRowAdd}
        onDelete={handleDelete}
        isDisabled={isEdit}
      />

      {isEdit ? (
        <TableRowEdit data={data} onUpdate={handleUpdate} />
      ) : (
        <TableRowView data={data} />
      )}
    </UITableRow>
  );
}
