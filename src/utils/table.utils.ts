import { TOP_ROW_LEVEL } from '$/constants/table.constants';
import {
  FlatRowLevel,
  IFlatRow,
  ParentIdType,
  RowFormDataType,
  RowPathType,
  TableDataType,
  TempRowPathType,
} from '$/types/table.types';

import { deepCopy } from './copy';
import { generateId } from './id';

export function getParentId(
  tableData: TableDataType,
  rowPath: RowPathType,
  rowLevel: FlatRowLevel,
): ParentIdType {
  if (rowLevel === TOP_ROW_LEVEL) return null;

  return (
    findTargetNode(deepCopy<TableDataType>(tableData), rowPath.slice(0, -1))
      .id ?? null
  );
}

export function findTargetNode(root: TableDataType, path: RowPathType) {
  const [firstIndex, ...restPath] = path;
  let curNode = root[firstIndex];

  for (const index of restPath) {
    if (index < 0 || index >= curNode.child.length) continue;

    curNode = curNode.child[index];
  }

  return curNode;
}

function getTempRowData() {
  return {
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    supportCosts: 0,
    child: [],
    total: 0,
    estimatedProfit: 0,
    overheads: 0,
    equipmentCosts: 0,
    salary: 0,
    rowName: '',
    id: generateId(),
    isTemp: true,
  };
}

function getTopLevelTempRowData(): IFlatRow {
  return {
    ...getTempRowData(),
    level: TOP_ROW_LEVEL,
    parentId: null,
    hasChild: false,
    hasSibling: false,
    path: [0],
  };
}

function hasMatchingPath(
  tempRowPath: TempRowPathType,
  parentPath: RowPathType,
) {
  return (
    tempRowPath &&
    tempRowPath.length === parentPath.length &&
    tempRowPath.every((value, i) => value === parentPath[i])
  );
}

export function flattenRows(
  nodes: TableDataType,
  tempRowPath: TempRowPathType,
  level: FlatRowLevel = TOP_ROW_LEVEL,
  parentId: ParentIdType = null,
  parentPath: RowPathType = [],
): IFlatRow[] {
  return nodes.flatMap((row, index) => {
    const path = [...parentPath, index];

    if (hasMatchingPath(tempRowPath, path)) {
      row.child.push(getTempRowData());
    }

    const hasChild = row.child.length > 0;
    const hasSibling = nodes.length === 1 ? false : index < nodes.length - 1;

    const flattenedRow: IFlatRow = {
      ...row,
      level,
      parentId,
      hasSibling,
      hasChild,
      path,
    };

    return [
      flattenedRow,
      ...(hasChild
        ? flattenRows(row.child, tempRowPath, level + 1, row.id, path)
        : []),
    ];
  });
}

export function getFlatRows(
  tableData: TableDataType,
  tempRowPath: TempRowPathType,
) {
  const flatRows = flattenRows(deepCopy<TableDataType>(tableData), tempRowPath);
  const topLevelTempRow = getTopLevelTempRowData();

  return [...flatRows, topLevelTempRow];
}

export function getNewRowPayload(
  tableData: TableDataType,
  rowData: IFlatRow,
  formData: RowFormDataType,
) {
  const parentId = getParentId(tableData, rowData.path, rowData.level);
  const payload = {
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    supportCosts: 0,
    parentId,
    ...formData,
  };

  return payload;
}
