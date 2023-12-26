export type RowIdType = number;
export type ParentIdType = RowIdType | null;
export type RowPathType = number[];
export type TempRowPathType = number[] | null;
export type FlatRowLevel = number;

export interface IRow {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  id: RowIdType;
  total: number;
  child: IRow[];
}

export type UpdatedRowDataType = Pick<
  IRow,
  'rowName' | 'salary' | 'equipmentCosts' | 'overheads' | 'estimatedProfit'
>;

export type RowUpdatePayloadType = Omit<IRow, 'id' | 'total' | 'child'>;
export type RowCreatePayloadType = RowUpdatePayloadType & {
  parentId: ParentIdType;
};

export type TableDataType = IRow[];

export interface IRowCreateOrUpdateResponseData {
  changed: [];
  current: Omit<IRow, 'child'>;
}

export interface IRowDeleteResponseData {
  changed: [];
  current: null;
}

export interface IFlatRow extends IRow {
  level: FlatRowLevel;
  parentId: ParentIdType;
  hasSibling: boolean;
  hasChild: boolean;
  path: RowPathType;
  isTemp?: boolean;
}
