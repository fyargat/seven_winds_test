import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useShallow } from 'zustand/react/shallow';

import { useTableStore } from '@/store/useTableStore';

import { getFlatRows } from '@/utils/table.utils';

export function useTableBody() {
  const [isLoading, setIsLoading] = useState(true);
  const { showBoundary } = useErrorBoundary();
  const { fetchTableData } = useTableStore();
  const flatRows = useTableStore(
    useShallow(({ tableData, tempRowPath }) =>
      getFlatRows(tableData, tempRowPath),
    ),
  );

  useEffect(() => {
    fetchTableData()
      .catch((error) => {
        showBoundary(error);
      })
      .finally(() => setIsLoading(false));
  }, [fetchTableData, showBoundary]);

  return {
    flatRows,
    isLoading,
  };
}
