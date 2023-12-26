import { AppPage } from '$/pages/App';
import React from 'react';

export default function AppProvider() {
  return (
    <React.StrictMode>
      <AppPage />
    </React.StrictMode>
  );
}
