import { useEffect, useState } from 'react';

import { useTableStore } from '@/store/useTableStore';

import { getFlatRows } from '@/utils/table.utils';

export function useTableBody() {
  const [isLoading, setIsLoading] = useState(true);
  const { tableData, tempRowPath, fetchTableData } = useTableStore();

  const flatRows = getFlatRows(tableData, tempRowPath);

  useEffect(() => {
    fetchTableData().finally(() => setIsLoading(false));
  }, [fetchTableData]);

  return {
    flatRows,
    isLoading,
  };
}
