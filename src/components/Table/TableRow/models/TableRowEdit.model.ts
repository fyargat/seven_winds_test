import { IFlatRow, UpdatedRowDataType } from '$/types/table.types';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IProps {
  data: IFlatRow;
  onCreateOrUpdate: (data: UpdatedRowDataType) => void;
}

export function useTableRowEdit({ data, onCreateOrUpdate }: IProps) {
  const { register, handleSubmit, reset } = useForm<UpdatedRowDataType>({
    defaultValues: {
      rowName: data.rowName,
      salary: data.salary,
      equipmentCosts: data.equipmentCosts,
      overheads: data.overheads,
      estimatedProfit: data.estimatedProfit,
    },
  });
  const onSubmit: SubmitHandler<UpdatedRowDataType> = async (data) => {
    // TODO:
    // 1. Validate
    // 2. Toast
    await onCreateOrUpdate(data);
    reset();
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
  };
}
