'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import React from 'react';

export default function GuideSection() {
  const slides = [
    {
      image: '/royalQ.jpg',
      title: 'Royal Tulip Brasília',
      description: 'Guest Room',
      location: 'Brasília, DF',
    },
    {
      image: '/royalQuarto.jpg',
      title: 'Golden Tulip Brasília',
      description: 'Executive Suite',
      location: 'Brasília, DF',
    },
    {
      image: '/goldenQ.jpg',
      title: 'Golden Tulip Brasília',
      description: 'Deluxe Room',
      location: 'Brasília, DF',
    },
  ];

  return (
    <section id='sobre' className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/info.png" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-primary">Sobre nós</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Soluções Sob Medida para Hospedagens Inesquecíveis
          </h2>
          <p className="regular-32 text-gray-30 xl:max-w-[520px]">
            Do design dos quartos à escolha dos enxovais, criamos tudo sob medida para você transformar suas ideias em experiências inesquecíveis.
          </p>
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="flexCenter max-container relative w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flexCenter w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                width={1440}
                height={580}
                className="w-full object-cover object-center 2xl:rounded-5xl"
              />
              <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                <Image
                  src="/localiza.png"
                  alt="meter"
                  width={50}
                  height={50}
                  className="h-full w-auto"
                />
                <div className="flexBetween flex-col">
                  <div className="flex w-full flex-col">
                    <div className="flexBetween w-full">
                      <p className="regular-16 text-gray-20">Hotel</p>
                      <p className="bold-16 text-primary">{slide.title}</p>
                    </div>
                    <p className="bold-20 mt-2">{slide.description}</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
