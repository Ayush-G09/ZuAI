import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Card, FileData } from "../types";
import { compressData, decompressData } from "../utils/index";

const useFileStore = create(
  persist<{
    files: FileData[];
    cards: Card[];
    addFile: (file: FileData) => void;
    deleteFile: (id: string) => void;
    addCard: (card: Card) => void;
    removeCard: (id: number) => void;
  }>(
    (set) => ({
      files: [],
      cards: [],

      addFile: (file) =>
        set((state) => ({
          files: [...state.files, file],
        })),

      deleteFile: (id) =>
        set((state) => ({
          files: state.files.filter((file) => file.id !== id),
        })),

      addCard: (card) => {
        set((state) => ({
          cards: [...state.cards, card],
        }));

        setTimeout(() => {
          set((state) => ({
            cards: state.cards.filter((c) => c.id !== card.id),
          }));
        }, 5000);
      },

      removeCard: (id) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== id),
        })),
    }),
    {
      name: "file-storage",
      getStorage: () => localStorage,
      serialize: (state) => compressData(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(decompressData(str)),
    }
  )
);

export default useFileStore;
