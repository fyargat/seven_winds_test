import cn from 'classnames';
import { useState } from 'react';

import styles from './Sidebar.module.scss';

const PROJECT_LIST = [
  {
    id: 1,
    text: 'По проекту',
  },
  {
    id: 2,
    text: 'Объекты',
  },
  {
    id: 3,
    text: 'РД',
  },
  {
    id: 4,
    text: 'МТО',
  },
  {
    id: 5,
    text: 'СМР',
  },
  {
    id: 6,
    text: 'График',
  },
  {
    id: 7,
    text: 'МиМ',
  },
  {
    id: 8,
    text: 'Рабочие',
  },
  {
    id: 9,
    text: 'Капвложения',
  },
  {
    id: 10,
    text: 'Бюджет',
  },
];

export default function Sidebar() {
  const [activeItemId, setActiveItemId] = useState<number>(PROJECT_LIST[4].id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <p className={styles.headerProjectName}>Название проекта</p>
          <p className={styles.headerAbbreviation}>Аббревиатура</p>
        </div>
        <button>
          <img src='/icons/arrow.svg' alt='Arrow Icon' />
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
