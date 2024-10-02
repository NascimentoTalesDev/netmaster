"use client"

import { create } from "zustand"
import { MyTest } from "../types/mytest";

type MyTestType = {
    myTest?: MyTest;
    isOpen: boolean;
    name?: string;
    onOpen: (myTest: MyTest, name: string) => void;
    onClose: () => void;
}

export const useMyTestProvider = create<MyTestType>((set) => ({
    myTest: undefined,
    name: undefined,
    isOpen: false,
    onOpen: (myTest: MyTest, name: string) => set({ isOpen: true, myTest, name }),
    onClose: () => set({ isOpen: false, myTest: undefined, name: undefined })
}))