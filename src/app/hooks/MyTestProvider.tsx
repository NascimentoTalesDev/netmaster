"use client"

import { create } from "zustand"
import { MyTest } from "../types/mytest";

type MyTestType = {
    myTest?: MyTest | null;
    name?: string;
    success: boolean;
    workers: boolean;
    isOpen: boolean;
    onOpen: (myTest: MyTest | null, name: string, success: boolean, workers: boolean) => void;
    onClose: () => void;
}

export const useMyTestProvider = create<MyTestType>((set) => ({
    myTest: undefined,
    name: undefined,
    success: false,
    workers: false,
    isOpen: false,
    onOpen: (myTest: MyTest | null, name: string, success: boolean, workers: boolean) => set({ isOpen: true, myTest, name, success, workers }),
    onClose: () => set({ isOpen: false, myTest: undefined, name: undefined, success: false, workers: false })
}))