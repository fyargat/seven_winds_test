import { toast } from 'react-toastify';

import styles from './Sign.module.scss';
import SignToastMessage from './SignToastMessage';

export default function SignButton() {
  const handleClick = () => {
    toast(<SignToastMessage />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 60000,
    });
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <img src='/icons/fyargat.svg' alt='Fyargat Icon' />
    </button>
  );
}
