import styles from './AppLayout.module.scss';

interface IProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  viewer: React.ReactNode;
}

export default function AppLayout({ header, sidebar, viewer }: IProps) {
  return (
    <div className={styles.container}>
      {header}
      <div className={styles.body}>
        {sidebar}
        {viewer}
      </div>
    </div>
  );
}
