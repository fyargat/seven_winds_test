import { useOnClickOutside } from '$/hooks/useOnClickOutside';
import { useTableStore } from '$/store/useTableStore';
import { IFlatRow, UpdatedRowDataType } from '$/types/table.types';
import { getParentId } from '$/utils/table.utils';
import { useRef, useState } from 'react';

interface IProps {
  data: IFlatRow;
}

const DOUBLE_CLICK_COUNT = 2;

export function useTableRow({ data }: IProps) {
  const [isEdit, setIsEdit] = useState(data.isTemp ?? false);
  const ref = useRef(null);
  const {
    tableData: tableData,
    createRow,
    updateRow,
    deleteRow,
    tempRowPath,
    setTempRowPath,
  } = useTableStore();

  const handleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (e.detail !== DOUBLE_CLICK_COUNT) return;

    setIsEdit(true);
  };

  const handleTempRowCreate = async () => {
    if (isEdit) return;

    setTempRowPath(data.path);
  };

  const handleCreateOrUpdate = async (updatedData: UpdatedRowDataType) => {
    if (data.isTemp) {
      const newRow = {
        equipmentCosts: 0,
        estimatedProfit: 0,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0,
        rowName: '',
        salary: 0,
        supportCosts: 0,
        parentId: getParentId(tableData, data.path, data.level),
        ...updatedData,
      };

      await createRow(tempRowPath!, newRow);
      setTempRowPath(null);
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
      setTempRowPath(null);
      return;
    }

    if (!isEdit) return;
    setIsEdit(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return {
    data,
    ref,
    isEdit,
    onClick: handleClick,
    onTempRowCreate: handleTempRowCreate,
    onCreateOrUpdate: handleCreateOrUpdate,
    onDelete: handleDelete,
  };
}
