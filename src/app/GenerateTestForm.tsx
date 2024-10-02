"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { getTest } from "./actions";
import { Loader } from "lucide-react";
import { useMyTestProvider } from "./hooks/MyTestProvider";
import { MyTest } from "./types/mytest";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Por favor, digite seu nome.",
  }),
  email: z.string().email({
    message: "Por favor, digite um email válido.",
  }).min(1, {
    message: "Por favor, digite seu email.",
  }),
  phone: z.string()
    .refine(
      (value) => /^\d+$/.test(value),
      {
        message: "Por favor, digite apenas números para o telefone.",
      }
    )
    .refine(
      (value) => value.length >= 11,
      {
        message: "O telefone deve ter pelo menos 11 dígitos.",
      }
    ),
});

const GenerateTestForm = () => {
  const [isGettingTest, setIsGettingTest] = useState(false)
  const myTest = useMyTestProvider();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsGettingTest(true)
    try {
      const res: MyTest = await getTest()
      const firstName = values.name.split(' ')[0];
      myTest.onOpen(res, firstName)
      toast.success("Teste gerado com sucesso")
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro inesperado")
    }
    setIsGettingTest(false)
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome:</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    disabled={isSubmitting}
                    placeholder="Digite seu nome"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    disabled={isSubmitting}
                    placeholder="Digite seu email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone:</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    disabled={isSubmitting}
                    placeholder="Digite seu telefone"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />
          <div className="my-3">
            <Button
              className="w-full gap-2"
              type={"submit"}
              variant={"default"}
              disabled={!isValid || isSubmitting}
            >
              {isGettingTest ? 'Gerando' : 'Gerar'} meu teste
              <span className="animate-spin">
                {isGettingTest && <Loader />}
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GenerateTestForm
