"use client";

import React from 'react'
import { useMyTestProvider } from '../hooks/MyTestProvider';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const MyTestModalProvider = () => {
  const myTestModal = useMyTestProvider();
  const myTest = myTestModal?.myTest
  const myName = myTestModal?.name
  const success = myTestModal?.success
  const workers = myTestModal?.workers

  const copyContent = (content: string | undefined) => {
    if (content) {
      navigator.clipboard.writeText(content).then(() => {
        toast.success('Conteúdo copiado!');
      }).catch(err => {
        console.error('Erro ao copiar: ', err);
      });
    }
  }

  if (!myTestModal.isOpen) return null;

  return (
    <div className="absolute  flex px-4 justify-center items-center h-full w-full z-[1] bg-background_rgba backdrop-blur-sm">
      <div className="relative bg-white p-6 min-w-[400px] rounded-lg shadow-lg">
        <Button
          onClick={() => {
            myTestModal.onClose()
          }}
          className="absolute top-2 right-2 dark:text-background dark:hover:text-accent-foreground"
          variant="ghost"
        >
          <X />
        </Button>
        <>
          {workers ? //Enterprise
            <>
              <div className='mb-10'>
                <h2 className="text-2xl font-bold mb-2">Seu Teste IPTV gerado</h2>
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                  <h3>Nome:</h3> <span className='cursor-copy' onClick={() => copyContent(myName)}>{myName}</span>
                </div>
                <div className='flex gap-2'>
                  <h3>Usuário:</h3> <span className='cursor-copy' onClick={() => copyContent(myTest?.user_teste)}>{myTest?.user_teste}</span>
                </div>
                <div className='flex gap-2'>
                  <h3>Senha:</h3><span className='cursor-copy' onClick={() => copyContent(myTest?.senha_teste)}>{myTest?.senha_teste}</span>
                </div>
                <div className='flex gap-2'>
                  <h3>Url:</h3> <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://day13.life")} >http://day13.life</span>
                </div>
                <div className='flex gap-2'>
                  <h3>Ou:</h3> <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://naw4.com")} >http://naw4.com</span>
                </div>
              </div>
            </>
            :
            <>
              {success ? ( //success users
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-2">Teste Enviado</h2>
                  <p className="text-lg">
                    O seu teste IPTV foi enviado para o email fornecido.
                  </p>
                  <p className="text-lg">
                    Verifique sua <b>caixa de email</b>, <b>lixeira</b> e <b>span</b> para obter as informações do teste.
                  </p>
                </div>
              ) : ( //users faild
                <>
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-2">Teste Já Gerado</h2>
                    <p className="text-lg">
                      Um teste já foi gerado para este usuário. Aproveite!
                    </p>
                    <p className="text-lg">
                      {myName}, para <b>ativar sua conta</b>, clique no botão abaixo.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link href={"https://netmastertvonline.com/pagina-de-contato"} target="_blank">
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white" >
                        Ativar conta
                      </Button>
                    </Link>
                  </div>
                </>

              )}

            </>
          }
        </>
      </div>
    </div>
  )
}

export default MyTestModalProvider
