import React from 'react';
import ReactDOM from 'react-dom/client';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

import App from './App';
import { getBrowserInfo, getLocale } from './utils';

const LAUNCH_DARKLY_CLIENT_ID = process.env.LAUNCH_DARKLY_CLIENT_ID || '';

(async () => {
  // Initialize the LaunchDarkly provider asynchronously
  const LDProvider = await asyncWithLDProvider({
    clientSideID: LAUNCH_DARKLY_CLIENT_ID,
    context: {
      kind: 'user',
      key: '456456',
      name: 'James Smith',
      email: 'jamessmith@gmail.com',
      locale: getLocale(),
      browser: getBrowserInfo(),
    },
    options: {
      bootstrap: 'localStorage',
    },
  });

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
  );

  root.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
  );
})();
