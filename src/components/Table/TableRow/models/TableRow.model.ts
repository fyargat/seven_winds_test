import { useOnClickOutside } from '$/hooks/useOnClickOutside';
import { useTableStore } from '$/store/useTableStore';
import { IFlatRow, RowFormDataType } from '$/types/table.types';
import { getNewRowPayload } from '$/utils/table.utils';
import { useRef, useState } from 'react';

import { DOUBLE_CLICK_COUNT } from '../constants/TableRow.constants';

interface IProps {
  rowData: IFlatRow;
}

export function useTableRow({ rowData }: IProps) {
  const [isEdit, setIsEdit] = useState(rowData.isTemp ?? false);
  const rowRef = useRef(null);
  const { tableData, createRow, updateRow, deleteRow, setTempRowPath } =
    useTableStore();

  const handleDoubleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (e.detail !== DOUBLE_CLICK_COUNT) return;

    setIsEdit(true);
  };

  const handleTempRowCreate = async () => {
    if (isEdit) return;

    setTempRowPath(rowData.path);
  };

  const handleCreateOrUpdate = async (formData: RowFormDataType) => {
    if (rowData.isTemp) {
      const payload = getNewRowPayload(tableData, rowData, formData);

      await createRow(payload);
      return;
    }

    await updateRow(rowData.path, rowData.id, {
      ...rowData,
      ...formData,
    });
    setIsEdit(false);
  };

  const handleDelete = async () => {
    if (isEdit) return;

    await deleteRow(rowData.path, rowData.id);
  };

  const handleClickOutside = () => {
    if (rowData.isTemp) {
      setTempRowPath(null);
      return;
    }

    if (!isEdit) return;
    setIsEdit(false);
  };

  useOnClickOutside(rowRef, handleClickOutside);

  return {
    rowData,
    rowRef,
    isEdit,
    onDoubleClick: handleDoubleClick,
    onTempRowCreate: handleTempRowCreate,
    onCreateOrUpdate: handleCreateOrUpdate,
    onDelete: handleDelete,
  };
}
