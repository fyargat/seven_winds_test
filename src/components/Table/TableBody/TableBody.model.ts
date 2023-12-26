import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { useTableStore } from '@/store/useTableStore';

import { getFlatRows } from '@/utils/table.utils';

export function useTableBody() {
  const [isLoading, setIsLoading] = useState(true);
  const { showBoundary } = useErrorBoundary();
  const { tableData, tempRowPath, fetchTableData } = useTableStore();

  const flatRows = getFlatRows(tableData, tempRowPath);

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
