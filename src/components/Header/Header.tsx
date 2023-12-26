import cn from 'classnames';

import { NAV_LIST } from './Header.constants';
import { useHeader } from './Header.model';
import styles from './Header.module.scss';

export default function Header() {
  const { activeItemId, setActiveItemId } = useHeader();

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
