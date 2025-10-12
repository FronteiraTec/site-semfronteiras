import React from "react";
import reverse from "./../assets/reverse.png";
import aboutquestion from "./../assets/aboutquestion.png";

function AboutSection() {
  return (
    <section className="flex flex-col" id="about" >
      <img src={reverse} alt="reverse" className="h-[80px] sm:h-[100px] md:h-[130px] lg:h-[152px] w-full object-cover" />
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-6 xl:gap-10 mx-[5%] sm:mx-[7%] lg:mx-[5%] mt-5 sm:mt-6 lg:mt-8 px-2 sm:px-0">
        <div className="w-full lg:w-[606px] xl:w-[700px] text-[#2B3B74]">
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-7">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center opacity-90 px-4">
              Quem Somos ?
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

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pt-4 sm:pt-5 md:pt-7 text-justify font-thin px-2 sm:px-4 lg:px-0 leading-relaxed">
            Somos uma <span className="font-[700]"> empresa júnior</span> formada exclusivamente por estudantes do
            curso de Administração da Universidade Federal da Fronteira Sul
            (UFFS), com o apoio de professores da instituição que acompanham e
            orientam nossos projetos. <br/><br/>
            Nosso <span className="font-[700]">objetivo</span> é oferecer soluções
            eficientes, personalizadas e de alta qualidade para empresas e
            empreendedores da região, sempre com um excelente custo-benefício.
          </p>
        </div>
        <img
          src={aboutquestion}
          alt="aboutquestion"
          className="h-auto w-[240px] sm:w-[280px] md:w-[350px] lg:w-[450px] xl:w-[518px] object-contain transition-all"
        />
      </div>
    </section>
  );
}

export default AboutSection;
