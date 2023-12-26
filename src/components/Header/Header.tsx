import cn from 'classnames';
import { useState } from 'react';

import styles from './Header.module.scss';

const NAV_LIST = [
  {
    id: 1,
    text: 'Просмотр',
  },
  {
    id: 2,
    text: 'Управление',
  },
];

export default function Header() {
  const [activeItemId, setActiveItemId] = useState<number>(NAV_LIST[0].id);

  return (
    <header className={styles.container}>
      <div className={styles.buttons}>
        <button>
          <img src='/icons/tile.svg' alt='Tile Icon' />
        </button>

        <button>
          <img src='/icons/share.svg' alt='Share Icon' />
        </button>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {NAV_LIST.map(({ id, text }) => (
            <li
              key={id}
              className={cn(styles.navItem, {
                [styles.navItemActive]: activeItemId === id,
              })}
            >
              <a className={styles.navLink} onClick={() => setActiveItemId(id)}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
