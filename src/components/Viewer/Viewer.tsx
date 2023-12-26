import ScrollContainer from 'react-indiana-drag-scroll';

import { Table } from '../Table';
import { TABS_DATA } from './Viewer.constants';
import styles from './Viewer.module.scss';

export default function Viewer() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ul className={styles.tabs}>
          {TABS_DATA.map(({ id, text }) => (
            <li className={styles.tab} key={id}>
              <button className={styles.tabButton} type='button'>
                {text}
              </button>
            </li>
          ))}
        </ul>
      </header>
      <ScrollContainer
        className={styles.scrollContainer}
        nativeMobileScroll={true}
        vertical={false}
        hideScrollbars={false}
      >
        <div className={styles.table}>
          <Table />
        </div>
      </ScrollContainer>
    </div>
  );
}
