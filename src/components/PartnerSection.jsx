import React from "react";
import uffs from "./../assets/uffs.png";
import empreende from "./../assets/empreende.png";
import fejesc from "./../assets/fejesc.png";
import brasiljunior from "./../assets/brasiljunior.png";

function PartnerSection() {
  return (
    <section id="parceiros" className="py-6 sm:py-8 md:py-12">
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-7">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2B3B74] font-bold text-center opacity-90 px-4">
          Nossos Parceiros
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
      <div className="w-[90%] sm:w-[85%] md:w-[80%] max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-14 mb-6 sm:mb-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-12 items-center justify-items-center">
          <img
            src={fejesc}
            alt="fejesc"
            className="h-[60px] sm:h-[70px] md:h-[85px] lg:h-[102px] w-auto object-contain transition-all hover:scale-105"
          />
          <img
            src={empreende}
            alt="empreende"
            className="h-[100px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[214px] w-auto object-contain transition-all hover:scale-105"
          />
          <img
            src={brasiljunior}
            alt="brasiljunior"
            className="h-[100px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[214px] w-auto object-contain transition-all hover:scale-105 sm:col-span-2 lg:col-span-1"
          />
        </div>

        <div className="flex justify-center mt-8 sm:mt-10 md:mt-16">
          <img
            src={uffs}
            alt="uffs"
            className="h-[70px] sm:h-[80px] md:h-[100px] lg:h-[132px] w-auto object-contain transition-all hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
