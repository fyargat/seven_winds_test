import {
  IRowCreateOrUpdateResponseData,
  IRowDeleteResponseData,
  RowCreatePayloadType,
  RowIdType,
  RowUpdatePayloadType,
  TableDataType,
} from '@/types/table.types';

import { createInstance } from './api-instance';

export const fetchTableData = async (): Promise<TableDataType> => {
  const response = await createInstance<TableDataType>({
    url: 'list',
    method: 'get',
  });

  return response;
};

export const createRow = async (
  payload: RowCreatePayloadType,
): Promise<IRowCreateOrUpdateResponseData> => {
  const response = await createInstance<IRowCreateOrUpdateResponseData>({
    url: 'create',
    method: 'post',
    data: payload,
  });

  return response;
};

export const updateRow = async (
  rowId: RowIdType,
  payload: RowUpdatePayloadType,
): Promise<IRowCreateOrUpdateResponseData> => {
  const response = await createInstance<IRowCreateOrUpdateResponseData>({
    url: `${rowId}/update`,
    method: 'post',
    data: payload,
  });

  return response;
};

export const deleteRow = async (
  rowId: RowIdType,
): Promise<IRowDeleteResponseData> => {
  const response = await createInstance<IRowDeleteResponseData>({
    url: `${rowId}/delete`,
    method: 'delete',
  });

  return response;
};
