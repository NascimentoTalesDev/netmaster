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
  const painel = myTestModal?.painel

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
              {painel == "TNM1" && (
                <>
                  <div className='mb-10'>
                    <h2 className="text-2xl font-bold mb-2">Seu Teste IPTV gerado</h2>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                      <h3>*3 horas foi criado com sucesso!*</h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Nome:<span className='cursor-copy' onClick={() => copyContent(myName)}>{myName}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Usuário: <span className='cursor-copy' onClick={() => copyContent(myTest?.user_teste)}>{myTest?.user_teste}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Senha: <span className='cursor-copy' onClick={() => copyContent(myTest?.senha_teste)}>{myTest?.senha_teste}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Url:  <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://day13.life")} >http://day13.life</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Ou:  <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://naw4.com")} >http://naw4.com</span></h3>
                    </div>
                  </div>
                </>
              )}

              {painel == "TNM2" && (
                <>
                  <div className='mb-10'>
                    <h2 className="text-2xl font-bold mb-2">Seu Teste IPTV gerado</h2>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                      <h3>*3 horas foi criado com sucesso!*</h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>Nome: <span className='cursor-copy' onClick={() => copyContent(myName)}>{myName}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Usuário: <span className='cursor-copy' onClick={() => copyContent(myTest?.user_teste)}>{myTest?.user_teste}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Senha: <span className='cursor-copy' onClick={() => copyContent(myTest?.senha_teste)}>{myTest?.senha_teste}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Url 1: <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://day13.life")} >http://day13.life</span></h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>Url 2: <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://naw4.com")} >http://naw4.com</span></h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>M3U 1: <span className='cursor-copy text-blue-800' onClick={() => copyContent(`http://apow.life/get.php?username=${myTest?.user_teste}&password=${myTest?.senha_teste}&type=m3u_plus&output=ts`)} >http://apow.life/get.php?username={myTest?.user_teste}&password={myTest?.senha_teste}&type=m3u_plus&output=ts</span></h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>M3U 2: <span className='cursor-copy text-blue-800' onClick={() => copyContent(`http://ouy1.vip/get.php?username=${myTest?.user_teste}&password=${myTest?.senha_teste}&type=m3u_plus&output=ts`)} >http://ouy1.vip/get.php?username={myTest?.user_teste}&password={myTest?.senha_teste}&type=m3u_plus&output=ts</span></h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>SSIPTV: <span className='cursor-copy text-blue-800' onClick={() => copyContent(`http://pouy.one/ssiptv/get/${myTest?.user_teste}/${myTest?.senha_teste}/download_m3u/`)} >http://pouy.one/ssiptv/get/{myTest?.user_teste}/{myTest?.senha_teste}/download_m3u/</span></h3>
                    </div>
                  </div>
                </>
              )}

              {painel == "TNM7" && (
                <>
                  <div className='mb-10'>
                    <h2 className="text-2xl font-bold mb-2">Seu Teste IPTV gerado TNM7</h2>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                      <h3>TNM7 - Controle interno</h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>Nome: <span className='cursor-copy' onClick={() => copyContent(myName)}>{myName}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Usuário: <span className='cursor-copy' onClick={() => copyContent(myTest?.username)}>{myTest?.username}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Senha: <span className='cursor-copy' onClick={() => copyContent(myTest?.password)}>{myTest?.password}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Url 1: <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://7smartvplayers.top:2052/")} >{myTest?.dns}</span></h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>M3U 1: <span className='cursor-copy text-blue-800' onClick={() => copyContent(`http://playtec.tv/get.php?username=${myTest?.username}&password=${myTest?.password}&type=m3u_plus&output=mpegts`)} >http://playtec.tv/get.php?username={myTest?.username}&password={myTest?.password}&type=m3u_plus&output=mpegts</span></h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>M3U 2: <span className='cursor-copy text-blue-800' onClick={() => copyContent(`http://playtec.tv/get.php?username=${myTest?.username}&password=${myTest?.password}&type=m3u_plus&output=m3u8`)} >http://7svrcdn3.xyz:8080/get.php?username={myTest?.user_teste}&password={myTest?.senha_teste}&type=m3u_plus&output=ts</span></h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>SSIPTV: <span className='cursor-copy text-blue-800' onClick={() => copyContent(`http://playtec.tv/ssiptv/${myTest?.username}/${myTest?.password}/download_mode`)} >http://playtec.tv/ssiptv/{myTest?.username}/{myTest?.password}/download_mode</span></h3>
                    </div>
                  </div>
                </>
              )}

              {painel == "TNMI1" && (
                <>
                  <div className='mb-10'>
                    <h2 className="text-2xl font-bold mb-2">Seu Teste IPTV gerado TNMI1</h2>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                      <h3>TNMI1 - Controle interno</h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>Nome: <span className='cursor-copy' onClick={() => copyContent(myName)}>{myName}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Usuário: <span className='cursor-copy' onClick={() => copyContent(myTest?.user_teste)}>{myTest?.user_teste}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Senha: <span className='cursor-copy' onClick={() => copyContent(myTest?.senha_teste)}>{myTest?.senha_teste}</span></h3>
                    </div>
                    <div className='flex gap-2'>
                      <h3>Url 1: <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://7smartvplayers.top:2052/")} >http://7smartvplayers.top:2052/</span></h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>M3U 1: <span className='cursor-copy text-blue-800' onClick={() => copyContent(`http://top.cdn-domain.net:80/get.php?username=${myTest?.user_teste}&password=${myTest?.senha_teste}&type=m3u_plus&output=ts`)} >http://top.cdn-domain.net:80/get.php?username={myTest?.user_teste}&password={myTest?.senha_teste}&type=m3u_plus&output=ts</span></h3>
                    </div><br />
                    <div className='flex gap-2'>
                      <h3>M3U 2: <span className='cursor-copy text-blue-800' onClick={() => copyContent(`http://7svrcdn3.xyz:8080/get.php?username=${myTest?.user_teste}&password=${myTest?.senha_teste}&type=m3u_plus&output=ts`)} >http://7svrcdn3.xyz:8080/get.php?username={myTest?.user_teste}&password={myTest?.senha_teste}&type=m3u_plus&output=ts</span></h3>
                    </div>
                  </div>
                </>
              )}
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
