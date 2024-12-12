import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
       
        <h1 className="bold-52 lg:bold-88 text-primary">Soluções em decorações</h1>
        <p className="text-4xl mt-6 text-gray-30 xl:max-w-[520px]">
        Nossa equipe tem a capacidadade de transformar ambientes em experiências inesquecíveis!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

  
          <p className="bold-16 lg:bold-20 text-blue-70">
            100%
            <span className="regular-16 lg:regular-20 ml-1">
              Excelência de serviço
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
        <Link href="#sobre">
          <Button type="button"  title="Saiba +" variant="btn_green" />
        </Link>
          
        
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
  <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-primary px-7 py-8">

    {/* Projetos Concluídos */}
    <div className="flex flex-col">
      <div className="flexBetween">
        <p className="regular-16 text-white">Projetos Concluídos</p>
      </div>
      <p className="bold-20 text-2xl text-white">150+</p>
    </div>

    {/* Experiência e Clientes */}
    <div className="flexBetween">
      <div className="flex flex-col">
        <p className="regular-16 block text-white">Experiência no Mercado</p>
        <p className="bold-20 text-white">35 anos</p>
      </div>
      <div className="flex flex-col">
        <p className="regular-16 block text-white">Apartamentos Decorados</p>
        <p className="bold-20 text-white">500+</p>
      </div>
    </div>

    {/* Clientes Satisfeitos */}
    <div className="flex flex-col">
      <div className="flexBetween">
        <p className="regular-16 block text-white">Clientes Satisfeitos</p>
        <p className="bold-20 text-white">80+</p>
      </div>
    </div>
  </div>
  <Image
  src="/backgroundHome.svg"
  alt="star"
  width={870}
  height={650}
  className="absolute top-28 right-10 z-10 w-full max-w-[870px] lg:w-[650px] xs:w-[300px]"
/>


</div>

    </section>
  );
}
