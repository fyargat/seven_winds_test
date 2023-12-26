import { TOP_ROW_LEVEL } from '$/constants/table.constants';
import {
  FlatRowLevel,
  IFlatRow,
  IRow,
  ParentIdType,
  RowFormDataType,
  RowPathType,
  TableDataType,
  TempRowPathType,
} from '$/types/table.types';

import { deepCopy } from './copy';
import { generateId } from './id';

export function getParentId(
  root: TableDataType,
  path: RowPathType,
  rowLevel: FlatRowLevel,
) {
  if (rowLevel === TOP_ROW_LEVEL) return null;

  return findTargetNode(deepCopy<TableDataType>(root), path.slice(0, -1)).id;
}

export function findTargetNode(root: IRow[], path: RowPathType) {
  const [f, ...rest] = path;

  let curNode = root[f];

  for (const idx of rest) {
    const { child } = curNode;
    if (idx >= child.length || idx < 0) {
      throw new Error('finding node failed: invalid path!!');
    }
    curNode = child[idx];
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

// TODO:
// 1. Rename
function isNeedAddTempRow(
  tempRowPath: TempRowPathType,
  parentPath: RowPathType,
) {
  if (!tempRowPath) return false;
  if (tempRowPath.length !== parentPath.length) return false;

  for (let i = 0; i < parentPath.length; i++) {
    if (parentPath[i] !== tempRowPath[i]) {
      return false;
    }
  }

  return true;
}

export function flattenRows(
  nodes: IRow[],
  tempRowPath: TempRowPathType,
  level: FlatRowLevel = TOP_ROW_LEVEL,
  parentId: ParentIdType = null,
  parentPath: RowPathType = [],
): IFlatRow[] {
  const result: IFlatRow[] = [];

  for (let index = 0; index < nodes.length; index++) {
    const row = nodes[index];
    const path = [...parentPath, index];

    const isNeed = isNeedAddTempRow(tempRowPath, path);

    if (isNeed) {
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

    result.push(flattenedRow);

    if (hasChild) {
      const childRows = flattenRows(
        row.child,
        tempRowPath,
        level + 1,
        row.id,
        path,
      );
      result.push(...childRows);
    }
  }

  return result;
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
