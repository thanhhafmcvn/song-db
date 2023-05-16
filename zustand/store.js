import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
export const firebaseZustandStore = create(
    persist(
        (set) => ({
            selectedItem: {},
            dataStorage: [],
            setSelectedItem: (value) => set({ selectedItem: value }),
            setDataStorage: (data) => set({ dataStorage: data })
        }),
        {
            name: 'firebaseStorage',
            storage: createJSONStorage(()=>localStorage)
        }
    )
)