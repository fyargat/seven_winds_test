import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { TOP_ROW_LEVEL } from '@/constants/table.constants';

import { IFlatRow, RowFormDataType } from '@/types/table.types';

import FormErrorMessage from '../ui/FormErrorMessage';

const validationSchema = yup.object().shape({
  rowName: yup
    .string()
    .required('Поле «Наименование работ» не может быть пустым'),
  salary: yup
    .number()
    .typeError('Поле «Основная з/п» должно быть числом')
    .required('Поле «Основная з/п» не может быть пустым'),
  equipmentCosts: yup
    .number()
    .typeError('Поле «Оборудование» должно быть числом')
    .required('Поле «Оборудование» не может быть пустым'),
  overheads: yup
    .number()
    .typeError('Поле «Накладные расходы» должно быть числом')
    .required('Поле «Накладные расходы» не может быть пустым'),
  estimatedProfit: yup
    .number()
    .typeError('Поле «Сметная прибыль» должно быть числом')
    .required('Поле «Сметная прибыль» не может быть пустым'),
});
interface IProps {
  rowData: IFlatRow;
  onCreateOrUpdate: (formData: RowFormDataType) => void;
}

export function useTableRowEdit({ rowData, onCreateOrUpdate }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RowFormDataType>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      rowName: rowData.rowName,
      salary: rowData.salary,
      equipmentCosts: rowData.equipmentCosts,
      overheads: rowData.overheads,
      estimatedProfit: rowData.estimatedProfit,
    },
  });
  const handleFormSubmit: SubmitHandler<RowFormDataType> = async (formData) => {
    await onCreateOrUpdate(formData);
    reset();
  };

  const handleFormSubmitError: SubmitErrorHandler<RowFormDataType> = (
    errors,
  ) => {
    toast.error(<FormErrorMessage errors={errors} />);
  };

  return {
    register,
    errors,
    autoFocus: rowData.level !== TOP_ROW_LEVEL,
    onSubmit: handleSubmit(handleFormSubmit, handleFormSubmitError),
  };
}
