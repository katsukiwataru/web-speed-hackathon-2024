import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { ClientApp } from '@wsh-2024/app/src/index';

import { registerServiceWorker } from './utils/registerServiceWorker';

const main = async () => {
  await registerServiceWorker();

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

main().catch(console.error);
