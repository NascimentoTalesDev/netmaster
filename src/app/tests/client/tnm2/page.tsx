import React from 'react'
import GenerateTestForm from "../../../../components/GenerateTestForm";

const TNM2 = () => {
  return (
    <div className=" h-screen w-screen flex items-center bg-mobile md:bg-desk justify-center ">
      <div className="w-full max-w-[350px] rounded-lg bg-white  border py-10 px-5 ">
        <div className="mb-5">
          <h1 className="font-bold text-center text-4xl">Meu Teste</h1>
          <span>Gerar meu teste agora mesmo!</span>
        </div>
        <GenerateTestForm />
      </div>
    </div>

  );
}


export default TNM2
