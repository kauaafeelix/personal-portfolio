"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "@/app/globals.css";


export default function Footer(){
    return (
        <footer className="flex flex-row p-[4rem] bg-[#020617] items-center border-t-1 border-[#151B2D]">
            <section className="flex flex-row items-center justify-between w-full">
                <div className="sticky flex flex-row shadow-md backdrop-blur-md w-[200px]">
                    <h3 className="hover-underline font-space font-bold">KAUÃ FELIX</h3>
                </div>
                <div>
                    <p className="text-[#585E73]">© 2026. ALL RIGHTS RESERVED.</p>
                </div>
                <div className="flex flex-row w-[200px] justify-end gap-8 ">
                    <Link href="https://github.com/kauaafeelix" target="_blank">
                        <FaGithub className="w-6 h-6 text-[#585E73] hover:text-[#3B82F6] transition-colors cursor-pointer" />
                    </Link>
                    <Link href="https://linkedin.com/in/kauã-felix-dsc" target="_blank">
                        <FaLinkedin className="w-6 h-6 text-[#585E73] hover:text-[#3B82F6] transition-colors cursor-pointer" />
                    </Link>
                    <Link href="https://instagram.com/kauafeelix" target="_blank">
                        <FaInstagram className="w-6 h-6 text-[#585E73] hover:text-[#3B82F6] transition-colors cursor-pointer" />
                    </Link>  
                </div>
            </section>
        </footer>
    )
}