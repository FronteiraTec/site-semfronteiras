import React from "react";
import reverse from "./../assets/reverse.png";
import aboutquestion from "./../assets/aboutquestion.png";
import Cardcaroussels from "./Cardcaroussels";
import SwipeCaroussel from "./SwipeCaroussel";


function ServicesSection() {
  return (
    <section className="mt-6 sm:mt-8 md:mt-10 py-6 sm:py-8 md:py-0" id="servicos">
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-7 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2B3B74] font-bold text-center opacity-90">
          Nossos Serviços
        </h1>
        <svg
          className="w-40 sm:w-48 md:w-64 lg:w-[272px]"
          height="2"
          viewBox="0 0 279 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H279" stroke="#2B3B74" strokeOpacity="0.9" />
        </svg>
      </div>
      <SwipeCaroussel/>
    </section>
  );
}

export default ServicesSection;
