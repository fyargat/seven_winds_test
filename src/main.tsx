import ReactDOM from 'react-dom/client';

import { AppProvider } from './providers';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(<AppProvider />);
