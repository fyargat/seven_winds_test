import { API } from '$/api';
import {
  CreateRowPayload,
  RowData,
  RowId,
  TempRowData,
  UpdateRowPayload,
} from '$/types';
import { findTargetNode } from '$/utils/data';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface BearState {
  data: RowData[];
  fetchTableData: () => Promise<void>;
  createRow: (path: number[], payload: CreateRowPayload) => void;
  updateRow: (path: number[], rowId: RowId, payload: UpdateRowPayload) => void;
  deleteRow: (path: number[], rowId: RowId) => void;
  tempRowPath: number[] | null;
  setTempRowPath: (path: number[] | null) => void;
}

export const useTableStore = create<BearState>()(
  immer((set) => ({
    tempRowPath: null,
    setTempRowPath: (path) => set({ tempRowPath: path }),
    data: [],
    fetchTableData: async () => {
      const data = await API.fetchRows();
      set({ data });
    },
    createRow: async (path, payload) => {
      const { current } = await API.createRow(payload);

      set((state) => {
        const draft = state.data;

        const newRow = {
          ...payload,
          ...current,
          child: [],
        };

        if (path) {
          const parentNode = findTargetNode(draft, path) as TempRowData;
          parentNode.child.push(newRow);
          return;
        }

        state.data.push(newRow);
      });
    },
    updateRow: async (path, rowId, payload) => {
      const { current } = await API.updateRow(rowId, payload);

      set((state) => {
        const draft = state.data;
        const currentNode = findTargetNode(draft, path) satisfies RowData;

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
        const draft = state.data;
        if (path.length === 1) {
          draft.splice(path[0], 1);

          return;
        }

        const parentNode = findTargetNode(draft, path.slice(0, -1));
        parentNode.child = parentNode.child.filter((v) => v.id !== rowId);
      });
    },
  })),
);
