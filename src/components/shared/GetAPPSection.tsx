import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";

export default function GetAPPSection() {
  return (
    <section id="contato" className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Faça seu orçamento agora!
          </h2>
          <p className="regular-16 text-gray-10">
            Chame nossa equipe para tirar suas duvidas e entender como podemos te ajudar
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Link href={"https://wa.me/5561999821919"}>
            <Button
              type="button"
              title="Orçamento"
              variant="btn_white"
              full
            />
            </Link>
           
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/iphonesNirce.svg" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
}
