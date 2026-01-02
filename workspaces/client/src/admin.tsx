import ReactDOM from 'react-dom/client';

import { AdminApp } from '@wsh-2024/admin/src/index';

const main = async () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<AdminApp />);
};

main().catch(console.error);
