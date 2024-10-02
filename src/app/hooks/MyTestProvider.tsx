"use client"

import { create } from "zustand"

type MyTest = {
    quiz?: MyTest;
    gameController?: any;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useMyTestProvider = create<MyTest>((set) => ({
    quiz: undefined,
    gameController: undefined,
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false, quiz: undefined})
}))