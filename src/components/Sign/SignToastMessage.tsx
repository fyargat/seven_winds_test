import styles from './Sign.module.scss';

export default function SignToastMessage() {
  return (
    <div className={styles.message}>
      <p>Developed by</p>
      <div className={styles.logo}>
        <img src='/icons/fyargat.svg' alt='Fyargat Logo Icon' />
      </div>
      <a
        className={styles.link}
        href='https://fyargat.com/'
        target='_blank'
        rel='nofollow noopener noreferrer'
      >
        <span>Fyargat Bikbaev</span>
      </a>
    </div>
  );
}
