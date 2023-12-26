import React from 'react';

import { AppPage } from '@/pages/AppPage';

import AppErrorBoundary from './ErrorBoundary';

export default function AppProvider() {
  return (
    <React.StrictMode>
      <AppErrorBoundary>
        <AppPage />
      </AppErrorBoundary>
    </React.StrictMode>
  );
}
