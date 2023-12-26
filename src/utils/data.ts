import { FlattenedRowData, RowData } from '$/types';

export const findTargetNode = (root: RowData[], path: number[]) => {
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
};

const getTempRow = () => {
  return {
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: ``,
    salary: 0,
    supportCosts: 0,
    id: Date.now(),
    child: [],
    total: 0,
    isTemp: true,
  };
};

const isNeedAddTempRow = (
  tempRowPath: number[] | null,
  parentPath: number[],
) => {
  if (!tempRowPath) return false;
  if (tempRowPath.length !== parentPath.length) return false;

  for (let i = 0; i < parentPath.length; i++) {
    if (parentPath[i] !== tempRowPath[i]) {
      return false;
    }
  }

  return true;
};

export function flattenRows(
  nodes: RowData[],
  tempRowPath: number[] | null,
  level: number = 0,
  parentId: number | null = null,
  parentPath: number[] = [],
): FlattenedRowData[] {
  const result: FlattenedRowData[] = [];

  for (let i = 0; i < nodes.length; i++) {
    const row = nodes[i];
    const path = [...parentPath, i];

    const isNeed = isNeedAddTempRow(tempRowPath, path);

    if (isNeed) {
      row.child.push(getTempRow());
    }

    const hasChild = row.child.length > 0;
    const hasSibling = nodes.length === 1 ? false : i < nodes.length - 1;

    const flattenedRow: FlattenedRowData = {
      ...row,
      level,
      parentId,
      hasSibling,
      hasChild,
      path: path,
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
