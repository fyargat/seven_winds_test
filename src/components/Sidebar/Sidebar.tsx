import cn from 'classnames';

import { PROJECT_LIST } from './Sidebar.constants';
import { useSidebar } from './Sidebar.model';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const { activeItemId, isOpen, setActiveItemId, setIsOpen } = useSidebar();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <p className={styles.headerProjectName}>Название проекта</p>
          <p className={styles.headerAbbreviation}>Аббревиатура</p>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(styles.arrow, {
            [styles.arrowRotate]: isOpen,
          })}
        >
          <div>
            <img src='/icons/arrow.svg' alt='Arrow Icon' />
          </div>
        </button>
      </header>
      <div className={styles.body}>
        <ul className={styles.list}>
          {PROJECT_LIST.map(({ id, text }) => (
            <li className={cn(styles.item)} key={id}>
              <button
                type='button'
                onClick={() => setActiveItemId(id)}
                className={cn(styles.itemButton, {
                  [styles.itemButtonActive]: activeItemId === id,
                })}
              >
                <div>
                  <img src='/icons/project.svg' alt='Project Icon' />
                </div>
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
