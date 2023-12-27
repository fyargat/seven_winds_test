import UITableCell from '@mui/material/TableCell';
import cn from 'classnames';

import { FlatRowLevel } from '@/types/table.types';

import { CELL_OFFSET } from './TableLevelCell.constants';
import { useTableLevelCell } from './TableLevelCell.model';
import styles from './TableLevelCell.module.scss';

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

export default function TableLevelCell(props: IProps) {
  const {
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
  } = useTableLevelCell(props);

  return (
    <UITableCell className={styles.cell}>
      <div
        className={styles.container}
        style={{
          width,
        }}
      >
        {hasParent && (
          <div
            className={cn(styles.lineContainer, styles.relationParent, {
              [styles.relationSibling]: hasSibling,
            })}
            style={{
              left: offset.parent,
            }}
          >
            <div className={cn(styles.line, styles.lineVertical)}></div>
            <div className={cn(styles.line, styles.lineHorizontal)}></div>
          </div>
        )}
        {siblingLevels.map((siblingLevel, index) => (
          <div
            key={index}
            className={cn(styles.lineContainer, {
              [styles.relationSibling]: level > siblingLevel,
            })}
            style={{
              left: CELL_OFFSET * siblingLevel - 4,
            }}
          >
            <div className={cn(styles.line, styles.lineVertical)}></div>
          </div>
        ))}
        {hasChild && (
          <div
            className={cn(styles.lineContainer, styles.relationChild)}
            style={{
              left: offset.child,
            }}
          >
            <div className={cn(styles.line, styles.lineVertical)}></div>
          </div>
        )}
        <div
          className={cn(styles.buttons, {
            [styles.buttonsDisabled]: isDisabled,
          })}
          style={{
            left: offset.buttons,
          }}
        >
          <button
            className={cn(styles.button, styles.buttonCreate)}
            onClick={onAdd}
            disabled={isDisabled}
          >
            <div
              className={cn(styles.iconBackground, styles.iconBackgroundCreate)}
            >
              <img src='/icons/create.svg' alt='Create Icon' />
            </div>
          </button>
          <button
            className={cn(styles.button, styles.buttonDelete)}
            onClick={onDelete}
            disabled={isDisabled}
          >
            <div className={styles.iconBackground}>
              <img src='/icons/trash.svg' alt='Delete Icon' />
            </div>
          </button>
        </div>
      </div>
    </UITableCell>
  );
}
