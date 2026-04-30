import Image from "next/image";
import "./globals.css";


export default function Home() {
    return (
      <main className="flex flex-col min-h-[70vh] text-center mt-[4rem]">
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
          <section className="flex flex-col gap-10 mt-[20rem] mx-[4rem]">
              <div className="flex flex-col text-justify">
                  <h2 className="font-space text-3xl font-bold text-white">Projetos em Destaque</h2>
                  <p className="text-[#CBD5E1] mt-2">Uma seleção do meu trabalho mais recente.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">

                <div className="flex flex-col gap-4 p-6 bg-[#0A1628] border border-[#1E3A5F] rounded-xl">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 bg-[#001A42] text-[#4D8EFF] border border-[#004395] rounded-md">Backend</span>
                    <a href="#" className="text-xs text-[#CBD5E1] hover:text-[#4D8EFF] transition-colors">GitHub ↗</a>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-space text-xl font-bold text-white">TaskFlow API</h3>
                    <p className="text-sm text-[#CBD5E1] leading-relaxed">Sistema de gestão de tarefas e projetos desenvolvido com Spring Boot seguindo a Arquitetura Hexagonal (Ports & Adapters).
                       O projeto aplica conceitos como Spring Security com autenticação JWT e separação entre domínio e infraestrutura.</p>
                  </div>

                  <div className="flex flex-col gap-2 pt-2 border-t border-[#1E3A5F]">
                    <p className="text-xs text-[#4D8EFF] tracking-widest uppercase">Tecnologias</p>
                    <div className="flex flex-wrap gap-2 items-center justify-center">
                      {["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Docker", "Hexagonal"].map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 bg-[#001A42] text-[#CBD5E1] border border-[#1E3A5F] rounded-md">{tech}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
          </section>
      </main>
    );
}
