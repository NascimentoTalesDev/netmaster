"use client";

import React from 'react'
import { useMyTestProvider } from '../hooks/MyTestProvider';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const MyTestModalProvider = () => {
  const myTestModal = useMyTestProvider();
  const myTest = myTestModal?.myTest
  const myName = myTestModal?.name

  if (!myTestModal.isOpen) return null;

  return (
    <div className="absolute  flex px-4 justify-center items-center h-full w-full z-[1] bg-background_rgba backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <Button
          onClick={() => {
            myTestModal.onClose()
          }}
          className="absolute top-2 right-2 dark:text-background dark:hover:text-accent-foreground"
          variant="ghost"
        >
          <X />
        </Button>
        <div className='mb-10'>
          <h2 className="text-2xl font-bold mb-2">Seu Teste IPTV</h2>
          <p className="text-lg">
            Aqui está o seu teste de cliente com duração de 3 horas. Aproveite!
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2'>
            <h3>Nome:</h3> <span>{myName}</span>
          </div>
          <div className='flex gap-2'>
            <h3>Usuário:</h3> <span>{myTest?.user_teste}</span>
          </div>
          <div className='flex gap-2'>
            <h3>Senha:</h3><span>{myTest?.senha_teste}</span>
          </div>
          <div className='flex gap-2'>
            <h3>Url:</h3> <span className='text-blue-800'>http://minhaurl.zip</span>
          </div>
          <div className='flex gap-2'>
            <h3>Ou:</h3> <span className='text-blue-800'>http://minhaurl.zip</span>
          </div>
          <div className="mt-10 mb-2">
            <p className="text-sm text-gray-600 text-center">
              Após realizar o teste, você pode ativar sua conta e aproveitar todos os benefícios!
            </p>
          </div>
          <div className="mt-4">
            <Button
              onClick={() => {
                const message = encodeURIComponent(`Olá! Gostaria de ativar minha conta IPTV. Meu usuário é ${myTest?.user_teste}`);
                window.open(`https://wa.me/+5541987359456?text=${message}`, '_blank');
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Ativar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTestModalProvider
