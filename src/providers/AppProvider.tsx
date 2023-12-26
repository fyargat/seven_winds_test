import React from 'react';

import { AppPage } from '@/pages/App';

export default function AppProvider() {
  return (
    <React.StrictMode>
      <AppPage />
    </React.StrictMode>
  );
}
