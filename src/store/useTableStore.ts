import { API } from '$/api';
import {
  IRow,
  RowCreatePayloadType,
  RowIdType,
  RowPathType,
  RowUpdatePayloadType,
  TableDataType,
  TempRowPathType,
} from '$/types/table.types';
import { findTargetNode } from '$/utils/table.utils';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface TableState {
  tableData: TableDataType;
  fetchTableData: () => Promise<void>;
  createRow: (path: RowPathType, payload: RowCreatePayloadType) => void;
  updateRow: (
    path: RowPathType,
    rowId: RowIdType,
    payload: RowUpdatePayloadType,
  ) => void;
  deleteRow: (path: RowPathType, rowId: RowIdType) => void;

  tempRowPath: TempRowPathType;
  setTempRowPath: (path: TempRowPathType) => void;
}

export const useTableStore = create<TableState>()(
  immer((set) => ({
    tableData: [],
    fetchTableData: async () => {
      const data = await API.fetchTableData();
      set({ tableData: data });
    },
    createRow: async (path, payload) => {
      const { current } = await API.createRow(payload);

      set((state) => {
        const draft = state.tableData;

        const newRow = {
          ...payload,
          ...current,
          child: [],
        };

        if (path) {
          const parentNode = findTargetNode(draft, path);
          parentNode.child.push(newRow);
          return;
        }

        state.tableData.push(newRow);
      });
    },
    updateRow: async (path, rowId, payload) => {
      const { current } = await API.updateRow(rowId, payload);

      set((state) => {
        const draft = state.tableData;
        const currentNode = findTargetNode(draft, path) satisfies IRow;

        // TODO: Refactoring
        currentNode.rowName = current.rowName;
        currentNode.salary = current.salary;
        currentNode.equipmentCosts = current.equipmentCosts;
        currentNode.overheads = current.overheads;
        currentNode.estimatedProfit = current.estimatedProfit;
      });
    },
    deleteRow: async (path, rowId) => {
      await API.deleteRow(rowId);

      set((state) => {
        const draft = state.tableData;
        if (path.length === 1) {
          draft.splice(path[0], 1);

          return;
        }

        const parentNode = findTargetNode(draft, path.slice(0, -1));
        parentNode.child = parentNode.child.filter((v) => v.id !== rowId);
      });
    },

    tempRowPath: null,
    setTempRowPath: (path) => set({ tempRowPath: path }),
  })),
);
