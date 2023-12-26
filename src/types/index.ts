export type RowId = number;

export interface CreateRowPayload {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  parentId: RowId | null;
  rowName: string;
  salary: number;
  supportCosts: number;
}

export interface CreateOrUpdateRowResponseData {
  changed: [];
  current: Omit<RowData, 'child'>;
}

export interface DeleteRowResponseData {
  changed: [];
  current: null;
}

export type UpdateRowPayload = Partial<Omit<CreateRowPayload, 'parentId'>>;

export interface RowData {
  id: RowId;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: RowData[];
}

export interface TempRowData extends RowData {
  isTemp: boolean;
}

export interface FlattenedRowData extends RowData {
  level: number;
  parentId: RowId | null;
  hasSibling: boolean;
  hasChild: boolean;
  path: number[];
  isTemp?: boolean;
}
