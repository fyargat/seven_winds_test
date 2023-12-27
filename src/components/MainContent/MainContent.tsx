import cn from 'classnames';
import { useState } from 'react';

import { Sidebar } from '../Sidebar';
import { Viewer } from '../Viewer';
import styles from './MainContent.module.scss';

export default function MainContent() {
  const [isHideSidebar, setIsHideSidebar] = useState(false);

  const buttonIconName = isHideSidebar ? 'visible' : 'hide';

  return (
    <main className={styles.main}>
      <button
        className={styles.sidebarVisibleButton}
        onClick={() => setIsHideSidebar((prev) => !prev)}
      >
        <img
          src={`/icons/${buttonIconName}-eye.svg`}
          alt='Sidebar Control Button Icon'
        />
      </button>
      <div
        className={cn(styles.sidebar, {
          [styles.sidebarHide]: isHideSidebar,
        })}
      >
        <Sidebar />
      </div>
      <div
        className={cn(styles.viewer, {
          [styles.viewerFull]: isHideSidebar,
        })}
      >
        <Viewer />
      </div>
    </main>
  );
}
