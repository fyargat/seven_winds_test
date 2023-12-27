import cn from 'classnames';

import { useSidebarStore } from '@/store/useSidebarStore';

import { Sidebar } from '../Sidebar';
import { Viewer } from '../Viewer';
import styles from './MainContent.module.scss';

export default function MainContent() {
  const { isHide, toggleVisibility } = useSidebarStore();

  return (
    <main className={styles.main}>
      <button
        className={styles.sidebarVisibleButton}
        onClick={toggleVisibility}
      >
        <img
          src={`/icons/${isHide ? 'visible' : 'hide'}-eye.svg`}
          alt='Sidebar Control Button Icon'
        />
      </button>
      <div
        className={cn(styles.sidebar, {
          [styles.sidebarHide]: isHide,
        })}
      >
        <Sidebar />
      </div>
      <div
        className={cn(styles.viewer, {
          [styles.viewerFull]: isHide,
        })}
      >
        <Viewer />
      </div>
    </main>
  );
}
