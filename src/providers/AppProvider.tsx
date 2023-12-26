import React from 'react';
import { ToastContainer } from 'react-toastify';

import { AppPage } from '@/pages/AppPage';

import '@/styles/index.scss';

import AppErrorBoundary from './ErrorBoundary';

export default function AppProvider() {
  return (
    <React.StrictMode>
      <AppErrorBoundary>
        <AppPage />
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          pauseOnHover={false}
        />
      </AppErrorBoundary>
    </React.StrictMode>
  );
}
