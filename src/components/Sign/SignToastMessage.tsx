import styles from './Sign.module.scss';

export default function SignToastMessage() {
  return (
    <div className={styles.message}>
      <p>Разработал</p>
      <div className={styles.circle}></div>

      <a
        href='https://fyargat.com/'
        target='_blank'
        rel='nofollow noopener noreferrer'
      >
        Фяргать Бикбаев
      </a>
    </div>
  );
}
