'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ChristmasSection = () => {
  const messages = [
    "🎆 Que o Ano Novo traga muita saúde e prosperidade! 🥂",
  "🌟 Que 2024 seja um ano de grandes conquistas e realizações! 🎉",
  "🥳 Que o Ano Novo seja repleto de momentos especiais e felicidade! 🎊",
  "🍾 Que o novo ano seja brilhante e cheio de novas oportunidades! ✨",
  ];

  return (
    <section className="bg-primary text-white py-10">
      <div className="text-center text-3xl font-bold mb-6">
        <h1>A Equipe Fruto da Vide deseja...</h1>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0} // Sem espaço entre slides
        slidesPerView={1} // Mostra apenas um slide por vez
        loop={true} // Habilita loop infinito
        autoplay={{
          delay: 3000, // Intervalo de 3 segundos
          disableOnInteraction: false,
        }}
        className="w-full max-w-3xl mx-auto"
      >
        {messages.map((message, index) => (
          <SwiperSlide key={index}>
            <div className="text-center text-2xl font-light">
              {message}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ChristmasSection;
