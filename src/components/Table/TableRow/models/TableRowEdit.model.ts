import { SubmitHandler, useForm } from 'react-hook-form';

import { TOP_ROW_LEVEL } from '@/constants/table.constants';

import { IFlatRow, RowFormDataType } from '@/types/table.types';

interface IProps {
  rowData: IFlatRow;
  onCreateOrUpdate: (formData: RowFormDataType) => void;
}

export function useTableRowEdit({ rowData, onCreateOrUpdate }: IProps) {
  const { register, handleSubmit, reset } = useForm<RowFormDataType>({
    defaultValues: {
      rowName: rowData.rowName,
      salary: rowData.salary,
      equipmentCosts: rowData.equipmentCosts,
      overheads: rowData.overheads,
      estimatedProfit: rowData.estimatedProfit,
    },
  });
  const onSubmit: SubmitHandler<RowFormDataType> = async (formData) => {
    // TODO:
    // 1. Validate
    // 2. Toast
    await onCreateOrUpdate(formData);
    reset();
  };

  return {
    register,
    autoFocus: rowData.level !== TOP_ROW_LEVEL,
    onSubmit: handleSubmit(onSubmit),
  };
}
