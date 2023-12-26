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

export function flattenRows(
  rows: RowData[],
  level: number = 0,
  parentId: number | null = null,
  parentPath: number[] = [],
): FlattenedRowData[] {
  const result: FlattenedRowData[] = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const hasChild = row.child.length > 0;
    const path = [...parentPath, i];

    const hasSibling = rows.length === 1 ? false : i < rows.length - 1;

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
      const childRows = flattenRows(row.child, level + 1, row.id, path);
      result.push(...childRows);
    }
  }

  return result;
}
