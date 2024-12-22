'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ChristmasSection = () => {
  const messages = [
    "🎄 te deseja um Feliz Natal e Boas Festas! 🎁",
    "✨ Que seu Natal seja repleto de alegria! 🎅",
    "🌟 Muita paz, amor e felicidade neste Natal! ❄️",
  ];

  return (
    <section className="bg-red-600 text-white py-10">
      <div className="text-center text-3xl font-bold mb-6">
        <h1>A Equipe Fruto da Vide</h1>
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
