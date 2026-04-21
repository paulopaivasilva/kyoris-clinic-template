'use client'

import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Hero } from "@/sections/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">

      <FloatingNavbar />

      <Hero />

      {/* <Problems /> */}

      {/* <About /> */}

      {/* <Contact /> */}

    </main>
  );
}