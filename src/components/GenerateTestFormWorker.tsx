"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { getTestTNM2 } from "../app/tests/client/actions";
import { Loader } from "lucide-react";
import { useMyTestProvider } from "../app/hooks/MyTestProvider";
import { MyTest } from "../app/types/mytest";

const GenerateTestFormWorker = () => {
  const [isGettingTest, setIsGettingTest] = useState(false)
  const myTest = useMyTestProvider();
  const workers = true
  const success = true

  const gerarTNM2 = async () => {
    setIsGettingTest(true)
    try {
      const res: MyTest = await getTestTNM2()
      const firstName = 'Seu Nome'
      myTest.onOpen(res, firstName, success, workers)
      toast.success("Teste gerado com sucesso");
    } catch (error) {
      toast.error("Ocorreu um erro inesperado, tente mais tarde")
      console.log(error);
    }
    setIsGettingTest(false)
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap my-3 gap-2">
      <Button onClick={gerarTNM2} className="w-fit " variant={"default"}>
          {isGettingTest ?
            <div className="flex gap-2">
              Gerando test TNM2
              <span className="animate-spin gap-2">
                {isGettingTest && <Loader />}
              </span>
            </div>
            :
            'TNM1'
          }
        </Button>
        <Button onClick={gerarTNM2} className="w-fit " variant={"default"}>
          {isGettingTest ?
            <div className="flex gap-2">
              Gerando test TNM2
              <span className="animate-spin gap-2">
                {isGettingTest && <Loader />}
              </span>
            </div>
            :
            'TNM2'
          }
        </Button>
        <Button onClick={gerarTNM2} className="w-fit " variant={"default"}>
          {isGettingTest ?
            <div className="flex gap-2">
              Gerando test TNM2
              <span className="animate-spin gap-2">
                {isGettingTest && <Loader />}
              </span>
            </div>
            :
            'TNM3'
          }
        </Button>
        <Button onClick={gerarTNM2} className="w-fit " variant={"default"}>
          {isGettingTest ?
            <div className="flex gap-2">
              Gerando test TNM2
              <span className="animate-spin gap-2">
                {isGettingTest && <Loader />}
              </span>
            </div>
            :
            'TNM4'
          }
        </Button>
        <Button onClick={gerarTNM2} className="w-fit " variant={"default"}>
          {isGettingTest ?
            <div className="flex gap-2">
              Gerando test TNM2
              <span className="animate-spin gap-2">
                {isGettingTest && <Loader />}
              </span>
            </div>
            :
            'TNM5'
          }
        </Button>
        
      </div>
    </div>
  );
};

export default GenerateTestFormWorker
