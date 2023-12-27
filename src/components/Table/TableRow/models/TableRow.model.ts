import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import { useTableStore } from '@/store/useTableStore';

import { IFlatRow, RowFormDataType } from '@/types/table.types';

import { getNewRowPayload } from '@/utils/table.utils';

import { DOUBLE_CLICK_COUNT } from '../constants/TableRow.constants';

interface IProps {
  rowData: IFlatRow;
}

export function useTableRow({ rowData }: IProps) {
  const { isTemp, parentId } = rowData;
  const [isEdit, setIsEdit] = useState(isTemp ?? false);
  const [isLoading, setIsLoading] = useState(false);
  const rowRef = useRef(null);
  const {
    tableData,
    tempRowPath,
    createRow,
    updateRow,
    deleteRow,
    setTempRowPath,
  } = useTableStore();

  const handleDoubleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (e.detail !== DOUBLE_CLICK_COUNT) return;

    setIsEdit(true);
  };

  const handleTempRowCreate = async () => {
    if (isEdit) return;

    setTempRowPath(rowData.path);
  };

  const handleCreateOrUpdate = async (formData: RowFormDataType) => {
    try {
      setIsLoading(true);

      if (isTemp) {
        const payload = getNewRowPayload(tableData, rowData, formData);

        await createRow(payload);
        toast.success('Ряд был успешно создан');
        return;
      }

      await updateRow(rowData.path, rowData.id, {
        ...rowData,
        ...formData,
      });
      setIsEdit(false);
      toast.success('Ряд был успешно изменен');
    } catch (error) {
      toast.error('Что пошло не так');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (isEdit) return;
    try {
      setIsLoading(true);

      await deleteRow(rowData.path, rowData.id);
      toast.error('Ряд был успешно удален');
    } catch (error) {
      toast.error('Что пошло не так');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickOutside = () => {
    if (!parentId && isTemp) return;

    if (tempRowPath && isTemp) {
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
    isLoading,
    onDoubleClick: handleDoubleClick,
    onTempRowCreate: handleTempRowCreate,
    onCreateOrUpdate: handleCreateOrUpdate,
    onDelete: handleDelete,
  };
}
