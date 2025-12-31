import $ from 'jquery';
import ReactDOM from 'react-dom/client';

import { AdminApp } from '@wsh-2024/admin/src/index';

const main = async () => {
  $(document).ready(() => {
    ReactDOM.createRoot($('#root').get(0)!).render(<AdminApp />);
  });
};

main().catch(console.error);
