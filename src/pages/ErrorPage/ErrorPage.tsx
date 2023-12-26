import styles from './ErrorPage.module.scss';

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Что пошло не так</h1>
    </div>
  );
}
