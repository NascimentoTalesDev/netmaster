"use client"

import { create } from "zustand"
import { MyTest } from "../types/mytest";

type MyTestType = {
    myTest?: MyTest | null;
    name?: string;
    success: boolean;
    workers: boolean;
    isOpen: boolean;
    painel?: string;
    onOpen: (myTest: MyTest | null, name: string, success: boolean, workers: boolean, painel: string,) => void;
    onClose: () => void;
}

export const useMyTestProvider = create<MyTestType>((set) => ({
    myTest: undefined,
    name: undefined,
    success: false,
    workers: false,
    isOpen: false,
    painel: undefined,
    onOpen: (myTest: MyTest | null, name: string, success: boolean, workers: boolean, painel: string) => set({ isOpen: true, myTest, name, success, workers, painel }),
    onClose: () => set({ isOpen: false, myTest: undefined, name: undefined, success: false, workers: false, painel: undefined })
}))