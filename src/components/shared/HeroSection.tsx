import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="max-[100vh]  padding-container flex flex-col lg:flex-row gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:items-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-20 flex flex-1 flex-col items-center text-center lg:text-left lg:ml-6 xl:w-1/2">
        <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight">Transformamos espaços em experiências únicas</h1>
        <p className="text-lg mt-6 text-gray-200 xl:max-w-[520px]">
          Especialistas em hotelaria e decoração de ambientes, criando atmosferas elegantes e acolhedoras.
        </p>


        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center">
          <Link href="#contato">
            <Button type="button" title="Entre em Contato" variant="btn_green" />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center mt-10 lg:mt-0">
        <div className="relative z-20 flex w-[350px] lg:w-[400px] flex-col gap-6 rounded-2xl bg-gradient-to-r from-lime-800 to-primary px-6 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300">

          {/* Projetos Concluídos */}
          <div className="flex justify-items-start gap-2 items-center">
            <p className="text-white text-lg font-medium">Projetos Concluídos</p>
            <p className="text-3xl font-extrabold text-white">150+</p>
          </div>

          {/* Experiência e Apartamentos Decorados */}
          <div className="flex justify-between gap-6">
            <div className="flex flex-col items-start">
              <p className="text-white text-lg font-medium">Experiência no Mercado</p>
              <p className="text-2xl font-semibold text-white">35 anos</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-white text-lg font-medium">Apartamentos Decorados</p>
              <p className="text-2xl font-semibold text-white">500+</p>
            </div>
          </div>

          {/* Clientes Satisfeitos */}
          <div className="flex justify-items-start gap-2 items-center">
            <p className="text-white text-lg font-medium">Clientes Satisfeitos</p>
            <p className="text-3xl font-extrabold text-white">80+</p>
          </div>
          <div className="my-11 flex flex-wrap gap-5 justify-center">
            <div className="flex items-center gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
            </div>
            <p className="text-lg font-semibold text-yellow-400">100% <span className="text-gray-300">Excelência de serviço</span></p>
          </div>

        </div>

      </div>

    </section>
  );
}
