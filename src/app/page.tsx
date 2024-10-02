import GenerateTestForm from "./GenerateTestForm";

export default function Home() {
  return (
    <div className=" h-screen w-screen flex items-center  justify-center ">
      <div className="max-w-[500px] border p-5">
        <div className="mb-5">
          <h1 className="font-bold text-4xl">Meu Teste</h1>
          <span>Gerar meu teste agora mesmo!</span>
        </div>
        <GenerateTestForm />
      </div>
    </div>

  );
}
