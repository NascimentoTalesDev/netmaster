"use client";

import React from 'react'
import { useMyTestProvider } from '../hooks/MyTestProvider';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const MyTestModalProvider = () => {
    const myTest = useMyTestProvider();
    if (!myTest.isOpen) return null;

  return (
    <div className="absolute  flex px-4 justify-center items-center h-full w-full z-[1] bg-background_rgba backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
      <Button
          onClick={() => {
            myTest.onClose()
          }}
          className="absolute top-2 right-2 dark:text-background dark:hover:text-accent-foreground"
          variant="ghost"
        >
          <X />
        </Button>
        <h2 className="text-2xl font-bold mb-4">Seu Teste IPTV</h2>
        <p className="text-lg">
          Aqui está o seu teste de cliente com duração de 3 horas. Aproveite!
        </p>
      </div>
    </div>
  )
}

export default MyTestModalProvider
