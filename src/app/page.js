import Image from "next/image";
import "./globals.css";


export default function Home() {
    return (
      <main className="flex flex-col items-center justify-center min-h-[70vh] text-center mt-[4rem]">
          <section className="flex flex-col items-center gap-[5rem] mt-[2rem]">
              <div className="flex flex-col gap-[5rem] max-w-[80vh] items-center">
                  <h4 className="w-fit flex items-center gap-2 border border-[#004395] tracking-[0.2rem] text-[#4D8EFF] bg-[#001A42] p-2 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#4D8EFF] animate-pulse"></span>
                    FULL-STACK DEVELOPER
                  </h4>                  
                  <h1 className="font-space text-7xl leading-none font-bold text-center">TRANSFORMANDO IDEIAS EM PRODUTOS <span className="text-[#4D8EFF]">ESCALÁVEIS.</span></h1>
                  <p className="text-xl text-center text-[#CBD5E1]">Código que performa. Interfaces que encantam. Sistemas que escalam.</p>
              </div>
              <div className="flex flex-row items-center gap-[1rem] justify-center mt-[1rem]">
                    <button className="p-4 font-normal font-space bg-[#4D8EFF] text-[#001A42] hover:bg-[#005AC2] hover:text-[#FFFFFF] cursor-pointer transition-all duration-300 rounded-md">VER PROJETOS</button>
                    <button className="p-4 font-normal font-space border border-[#474648] hover:bg-[#DAE3F0] hover:text-[#000000] cursor-pointer transition-all duration-300 rounded-md">ENTRAR EM CONTATO</button>
              </div>
          </section>
          <section className="flex flex-col gap-10 mt-[20rem]">
              <div className="">
                  <h2 className="font-space text-3xl font-bold text-white">Projetos em Destaque</h2>
                   <p className="text-[#CBD5E1] mt-2">Uma seleção do meu trabalho mais recente.</p>
              </div>
          </section>
      </main>
    );
}
