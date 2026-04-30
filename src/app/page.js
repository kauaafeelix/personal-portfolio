"use client"; // Necessário se estiver usando o Next.js App Router

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import "./globals.css";

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
      transition: { duration: 0.8, ease: "easeOut" } 
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
        viewport={{ once: true, amount: 0.1 }}
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
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="h-[10rem]"></section>
    </main>
  );
}