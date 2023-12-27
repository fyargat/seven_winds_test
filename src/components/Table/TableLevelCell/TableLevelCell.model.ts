import { FlatRowLevel } from '@/types/table.types';

import { CELL_OFFSET, CELL_WIDTH_STEP } from './TableLevelCell.constants';

interface IProps {
  level: FlatRowLevel;
  siblingLevels: FlatRowLevel[];
  hasParent: boolean;
  hasSibling: boolean;
  hasChild: boolean;
  isDisabled: boolean;
  onAdd: () => void;
  onDelete: () => void;
}

export function useTableLevelCell({
  level,
  siblingLevels,
  hasParent,
  hasSibling,
  hasChild,
  isDisabled,

  onAdd,
  onDelete,
}: IProps) {
  const offset = {
    parent: CELL_OFFSET * level - 4,
    child: 12 + CELL_OFFSET * level,
    buttons: CELL_OFFSET * level,
  };
  const width = CELL_OFFSET + CELL_WIDTH_STEP * level;

  return {
    width,
    offset,
    level,
    siblingLevels,
    hasParent,
    hasSibling,
    hasChild,
    isDisabled,

    onAdd,
    onDelete,
  };
}
