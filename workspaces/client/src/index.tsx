import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { ClientApp } from '@wsh-2024/app/src/index';

import { registerServiceWorker } from './utils/registerServiceWorker';

const main = () => {
  // Service Worker は非同期で登録（ブロックしない）
  registerServiceWorker().catch(console.error);

  const injectDataElement = document.getElementById('inject-data');
  const fallback = injectDataElement?.textContent ? JSON.parse(injectDataElement.textContent) : {};

  ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <SWRConfig value={{ fallback, revalidateIfStale: true, revalidateOnFocus: false, revalidateOnReconnect: false }}>
      <BrowserRouter>
        <ClientApp />
      </BrowserRouter>
    </SWRConfig>,
  );
};

main();
