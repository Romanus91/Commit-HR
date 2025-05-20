import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles/app.less';
import { worker } from '@src/mocks/browser';

if (import.meta.env.VITE_MOCK) {
    worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
