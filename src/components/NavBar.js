"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex flex-row items-center justify-between p-6 bg-[#020617]/80 shadow-md max-w-full px-[5rem] backdrop-blur-md">
        <div className="w-[200px]">
            <h2 className="hover-underline font-space font-bold">KAUÃ FELIX</h2>
        </div>
        <div className="flex gap-10 justify-center items-center">
            <Link  href="/" 
            className="relative text-gray-300 hover:text-[#3B82F6] font-medium transition-all
            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
            after:bg-[#3B82F6] after:scale-x-0 hover:after:scale-x-100
            after:transition-transform hover:-translate-y-1">INÍCIO
            </Link>

            <Link href="/sobre" className="relative text-gray-300 hover:text-[#3B82F6] font-medium transition-all
            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
            after:bg-[#3B82F6] after:scale-x-0 hover:after:scale-x-100
            after:transition-transform hover:-translate-y-1">SOBRE
            </Link>

            <Link href="/projeto" className="relative text-gray-300 hover:text-[#3B82F6] font-medium transition-all
            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
            after:bg-[#3B82F6] after:scale-x-0 hover:after:scale-x-100
            after:transition-transform hover:-translate-y-1">PROJETOS
            </Link>
        </div>

        <div className="flex gap-10 justify-center items-center w-[200px]">
            <Link href="https://github.com/kauaafeelix" target="_blank">
            <FaGithub className="w-6 h-6 text-gray-300 hover:text-[#3B82F6] transition-colors cursor-pointer" />
            </Link>
            <Link href="https://linkedin.com/in/kauã-felix-dsc" target="_blank">
            <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-[#3B82F6] transition-colors cursor-pointer" />
            </Link>
        </div>
    </nav>
  );
}