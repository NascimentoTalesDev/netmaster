import React from 'react'
import GenerateTestFormWorkerTNM2 from '@/components/GenerateTestFormWorkerTNM2';
import GenerateTestFormWorkerTNMI1 from '@/components/GenerateTestFormWorkerTNMI1';
import GenerateTestFormWorkerTNM7 from '@/components/GenerateTestFormWorkerTNM7';

const GenerateTests = () => {
  return (
    <div className=" h-screen w-screen flex items-center bg-mobile md:bg-desk justify-center ">
      <div className="w-full max-w-[800px] min-h-[500px] rounded-lg bg-white border py-10 px-5 ">
        <div className="mb-5">
          <h1 className="font-bold text-center text-4xl">Gerar Teste</h1>
          <span>Gerar teste para clientes!</span>
        </div>
        <div className='flex gap-2 flex-wrap items-center justify-center'>
          <GenerateTestFormWorkerTNM2 />
          <GenerateTestFormWorkerTNM7 />
          <GenerateTestFormWorkerTNMI1 />
        </div>
      </div>
    </div>

  );
}

export default GenerateTests
