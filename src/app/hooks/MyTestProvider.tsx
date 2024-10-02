"use client"

import { create } from "zustand"
import { MyTest } from "../types/mytest";

type MyTestType = {
    myTest?: MyTest | null;
    name?: string;
    success: boolean;
    isOpen: boolean;
    onOpen: (myTest: MyTest | null, name: string, success: boolean) => void;
    onClose: () => void;
}

export const useMyTestProvider = create<MyTestType>((set) => ({
    myTest: undefined,
    name: undefined,
    isOpen: false,
    success: false,
    onOpen: (myTest: MyTest | null, name: string, success: boolean) => set({ isOpen: true, myTest, name, success }),
    onClose: () => set({ isOpen: false, myTest: undefined, name: undefined, success: false })
}))