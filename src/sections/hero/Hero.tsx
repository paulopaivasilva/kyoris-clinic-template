"use client";

import Image from "next/image";
import { Button } from "@/components/shared/Button";

export function Hero() {
  return (
    <section
      className="relative w-full bg-[#A3C6FF] overflow-hidden min-h-screen pt-[70px]"
      style={{ height: "clamp(520px, 75vh, 850px)" }}
      id="inicio"
    >
      <div
        className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-stretch relative z-10 h-full"
      >
        {/* TEXTO */}
        <div className="order-1 md:order-2 w-full md:w-1/2 text-center md:text-left pl-0 md:pl-8 md:self-center">
          <h1
            className="text-white font-semibold leading-tight"
            style={{ fontSize: "clamp(32px, 3.8vw, 68px)" }}
          >
            Volte a sorrir com{" "}
            <span className="text-[#3B82F6]">confiança.</span>
          </h1>

          <p
            className="mt-6 text-white/90 max-w-md mx-auto md:mx-0"
            style={{ fontSize: "clamp(14px, 1.2vw, 20px)" }}
          >
            Tratamentos modernos com foco em conforto, estética
            e resultados naturais.
          </p>

          <div className="mt-8 flex flex-col items-center md:items-start gap-4">
            <Button variant="primary">Agendar Consulta</Button>
            <Button variant="secondary">Explorar</Button>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="order-2 md:order-1 relative w-full md:w-1/2 shrink-0 md:self-end h-[40%] md:h-full">
          <Image
            src="/images/hero.png"
            alt="Pessoa sorrindo"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none md:h-20 h-[30%]"
      >
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 Q720,60 1440,0 L1440,60 L0,60 Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}