"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import "./globals.css";
import Image from "next/image";
import carbon from "@/assets/carbon.png"
import { SiNextdotjs, SiSpringboot, SiArchlinux } from "react-icons/si"

const projects = [
  {
    title: "TaskFlow API",
    description: "Sistema de gestão de tarefas e projetos desenvolvido com Spring Boot seguindo a Arquitetura Hexagonal.",
    category: "Backend",
    techs: ["Java", "Spring Boot", "Spring Security", "JWT", "Docker"],
    githubUrl: "https://github.com/kauaafeelix/TaskFlow.git"
  },
  {
    title: "SynapseRH",
    description: "O SynapseRH é um sistema de recrutamento e seleção desenvolvido em Java.",
    category: "Backend",
    techs: ["Java", "Strategy Pattern", "PostgreSQL", "Clean Architecture", "Docker"],
    githubUrl: "https://github.com/kauaafeelix/Recruitment-System.git"
  }
];

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.0, ease: "easeOut" } 
    }
  };

  return (
    <main className="flex flex-col min-h-[70vh] text-center mt-[4rem]">
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-center gap-[5rem] mt-[2rem]"
        >
          <div className="flex flex-col gap-[5rem] max-w-[80vh] items-center">
            <h4 className="w-fit flex items-center gap-2 border border-[#004395] tracking-[0.2rem] text-[#4D8EFF] bg-[#001A42] p-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4D8EFF] animate-pulse"></span>
              FULL-STACK DEVELOPER
            </h4>                  
            <h1 className="font-space text-7xl leading-none font-bold text-center">
              TRANSFORMANDO IDEIAS EM PRODUTOS <span className="text-[#4D8EFF]">ESCALÁVEIS.</span>
            </h1>
            <p className="text-xl text-center text-[#CBD5E1]">Código que performa. Interfaces que encantam. Sistemas que escalam.</p>
          </div>

          <div className="flex flex-row items-center gap-[1rem] justify-center mt-[1rem]">
            <button className="p-4 font-normal font-space bg-[#4D8EFF] text-[#001A42] hover:bg-[#005AC2] hover:text-[#FFFFFF] cursor-pointer transition-all duration-300 rounded-md">VER PROJETOS</button>
            <button className="p-4 font-normal font-space border border-[#474648] hover:bg-[#DAE3F0] hover:text-[#000000] cursor-pointer transition-all duration-300 rounded-md">ENTRAR EM CONTATO</button>
          </div>
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeIn}
          className="flex flex-col gap-10 mt-[20rem] mx-[4rem]"
        >
          <div className="flex flex-col text-justify">
            <h2 className="font-space text-5xl font-bold text-white">Projetos em Destaque</h2>
            <p className="text-[#CBD5E1] mt-2 mb-3">Uma seleção do meu trabalho mais recente.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section className="flex flex-row my-[4rem] p-10 mx-[4rem] bg-[#0A1628] rounded-md justify-between">
          <div className="flex flex-col p-5 gap-[4rem] justify-center max-w-[40%]">
              <h2 className="font-space font-semibold text-5xl text-left">CONSTRUINDO SISTEMAS QUE <span className="text-[#4D8EFF] italic">ESCALAM.</span></h2>
                  
            <div className="flex flex-col gap-8">
              
              <div className="flex flex-row gap-4 items-start">
                <SiSpringboot className="w-8 h-8 text-[#4D8EFF] shrink-0 mt-1" /> 
                
                <div className="flex flex-col gap-1 text-left">
                  <p className="font-space text-white font-semibold text-xl">Backend Development</p>
                  <p className="text-base text-[#CBD5E1] leading-relaxed">
                    APIs robustas com Java e Spring Boot, priorizando segurança, escalabilidade e boas práticas.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <SiNextdotjs className="w-8 h-8 text-[#4D8EFF] shrink-0 mt-1" /> 
                
                <div className="flex flex-col gap-1 text-left">
                  <p className="font-space text-white font-semibold text-xl">Frontend Development</p>
                  <p className="text-base text-[#CBD5E1] leading-relaxed">
                    Interfaces modernas com React e Next.js, focadas em performance e experiência do usuário.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <SiArchlinux className="w-8 h-8 text-[#4D8EFF] shrink-0 mt-1" /> 
                
                <div className="flex flex-col gap-1 text-left">
                  <p className="font-space text-white font-semibold text-xl">Software Architeture</p>
                  <p className="text-base text-[#CBD5E1] leading-relaxed">
                    Sistemas estruturados com arquiteturas robustas e Design Patterns para máxima durabilidade e testabilidade.
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center p-10 mr-[8rem] w-[600px] relative group overflow-hidden rounded-xl">
          <Image 
            src={carbon} 
            alt="Foto de código representando uma classe dev"
            className="rounded-lg border-l-6 border-t-6 border-[#004395] w-[500px] object-cover transition-transform duration-500 group-hover:scale-120"
          />
        </div>
      </section>

    </main>
  );
}