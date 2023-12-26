import {
  CreateOrUpdateRowResponseData,
  CreateRowPayload,
  DeleteRowResponseData,
  RowData,
  RowId,
  UpdateRowPayload,
} from '$/types';

import { createInstance } from './api-instance';

export const fetchRows = async (): Promise<RowData[]> => {
  const response = await createInstance<RowData[]>({
    url: 'list',
    method: 'get',
  });

  return response;
};

export const createRow = async (
  payload: CreateRowPayload,
): Promise<CreateOrUpdateRowResponseData> => {
  const response = await createInstance<CreateOrUpdateRowResponseData>({
    url: 'create',
    method: 'post',
    data: payload,
  });

  return response;
};

export const updateRow = async (
  rowId: RowId,
  payload: UpdateRowPayload,
): Promise<CreateOrUpdateRowResponseData> => {
  const response = await createInstance<CreateOrUpdateRowResponseData>({
    url: `${rowId}/update`,
    method: 'post',
    data: payload,
  });

  return response;
};

export const deleteRow = async (
  rowId: RowId,
): Promise<DeleteRowResponseData> => {
  const response = await createInstance<DeleteRowResponseData>({
    url: `${rowId}/delete`,
    method: 'delete',
  });

  return response;
};
