"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { getTestTNMI1 } from "../app/tests/client/actions";
import { Loader } from "lucide-react";
import { useMyTestProvider } from "../app/hooks/MyTestProvider";
import { MyTest } from "../app/types/mytest";

const GenerateTestFormWorkerTNMI1 = () => {
  const [isGettingTest, setIsGettingTest] = useState(false)
  const myTest = useMyTestProvider();
  const workers = true
  const success = true
  const painel = "TNMI1"

  const OnSubmit = async () => {
    setIsGettingTest(true)
    try {
      const res: MyTest = await getTestTNMI1()
      const firstName = 'Seu Nome'
      myTest.onOpen(res, firstName, success, workers, painel)
      toast.success("Teste gerado com sucesso");
    } catch (error) {
      toast.error("Ocorreu um erro inesperado, tente mais tarde")
      console.log(error);
    }
    setIsGettingTest(false)
  };

  return (
    <div className="w-fit">
      <Button onClick={OnSubmit} className="w-[200px] " variant={"default"}>
      {isGettingTest ?
            <div className="flex gap-2">
              Gerando teste TNMI1
              <span className="animate-spin gap-2">
                {isGettingTest && <Loader />}
              </span>
            </div>
            :
            'Seven - TNMI1'
          }
        </Button>
    </div>
  );
};

export default GenerateTestFormWorkerTNMI1
