import ReactDOM from 'react-dom/client'
import { attachLogger } from 'effector-logger';
import { App } from '~/app';

if (import.meta.env.MODE !== 'production') {
  attachLogger();
}

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <App />
);
