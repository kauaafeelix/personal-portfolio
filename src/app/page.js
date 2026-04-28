import Image from "next/image";


export default function Home() {
    return (
      <main className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-6">
        <div className="flex flex-col gap-6 max-w-[70vh] items-center">
          <h4 className="w-fit border border-[#004395] font-space text-xg text-[#4D8EFF] bg-[#001A42] p-2 font-bold">FULL-STACK DEVELOPER</h4>
          <h1 className="font-space text-5xl leading-[1.2]">TRANSFORMANDO IDEIAS EM SOLUÇÕES <span className="text-[#81AAFF]">ESCALÁVEIS</span></h1>
        </div>
      </main>
    );
}
