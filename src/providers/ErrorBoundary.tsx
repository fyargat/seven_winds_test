import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorPage } from '@/pages/ErrorPage';

interface IProps extends PropsWithChildren {}

export default function AppErrorBoundary({ children }: IProps) {
  return <ErrorBoundary fallback={<ErrorPage />}>{children}</ErrorBoundary>;
}
