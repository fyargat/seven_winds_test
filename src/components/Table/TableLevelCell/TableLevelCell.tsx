import UITableCell from '@mui/material/TableCell';
import cn from 'classnames';

import { FlatRowLevel } from '@/types/table.types';

import styles from './TableLevelCell.module.scss';

interface IProps {
  level: FlatRowLevel;
  hasParent: boolean;
  hasSibling: boolean;
  hasChild: boolean;
  isDisabled: boolean;
  onAdd: () => void;
  onDelete: () => void;
}

export default function TableLevelCell({
  level,
  hasParent,
  hasSibling,
  hasChild,
  isDisabled,
  onAdd,
  onDelete,
}: IProps) {
  return (
    <UITableCell
      className={styles.container}
      style={{
        paddingLeft: 16 + 20 * level,
      }}
    >
      <div className={styles.relation}>
        {hasParent && (
          <div
            className={cn(styles.relationParent, {
              [styles.relationSibling]: hasSibling,
            })}
          >
            <div
              className={cn(
                styles.relationLine,
                styles.relationLineVertical,
                {},
              )}
            ></div>
            <div
              className={cn(styles.relationLine, styles.relationLineHorizontal)}
            ></div>
          </div>
        )}
        {hasChild && (
          <div className={styles.relationChild}>
            <div
              className={cn(styles.relationLine, styles.relationLineVertical)}
            ></div>
          </div>
        )}
        <div
          className={cn(styles.buttons, {
            [styles.buttonsDisabled]: isDisabled,
          })}
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
