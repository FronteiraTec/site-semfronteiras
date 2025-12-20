import React from "react";
import { contactLinks, navbarLinks } from "../constants";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { MdOutlineMail, MdPhone, MdLocationOn } from "react-icons/md";
import logoFronteiraTec from "./../assets/logo-fronteira-tec-semfundo.png";

function ContactSection() {
  // Separar redes sociais de contatos
  const socialMedia = contactLinks.filter((item) => 
    [FaInstagram, FaLinkedin, IoLogoFacebook].includes(item.icon)
  );
  
  const directContact = contactLinks.filter((item) => 
    [MdOutlineMail, FaWhatsapp].includes(item.icon)
  );

  return (
    <footer className="bg-[#2B3B74] text-white mt-8 sm:mt-12 md:mt-16" id="contato">
      <div className="w-[90%] sm:w-[85%] max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 md:gap-10 lg:gap-12">
          
          {/* Sobre a Empresa */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b-2 border-white/30 pb-2">
              Sem Fronteiras
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Consultoria Júnior comprometida em oferecer soluções inovadoras e 
              acessíveis para impulsionar o crescimento do seu negócio.
            </p>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
              <MdLocationOn className="text-lg sm:text-xl mt-1 flex-shrink-0" />
              <span>Universidade Federal da Fronteira Sul - Campus Chapecó</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b-2 border-white/30 pb-2">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {navbarLinks.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="text-xs sm:text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b-2 border-white/30 pb-2">
              Contato
            </h3>
            <div className="space-y-3">
              {directContact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 group">
                    <Icon className="text-lg sm:text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors break-all"
                    >
                      {item.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b-2 border-white/30 pb-2">
              Redes Sociais
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">
              Acompanhe nossas novidades e conteúdos
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialMedia.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white hover:text-[#2B3B74] p-2.5 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110"
                    title={item.title}
                    aria-label={item.title}
                  >
                    <Icon className="text-xl sm:text-2xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6 sm:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
          <div className="flex flex-col items-center md:items-start gap-2 sm:gap-3">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Sem Fronteiras Consultoria Jr. Todos os direitos reservados.
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[10px] sm:text-xs text-white/60">
                <span>Desenvolvido com</span>
                <span className="text-sm sm:text-base" style={{ 
                  background: 'linear-gradient(to right, #046a3b, #e97d01)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  ❤️
                </span>
                <span>por</span>
                <a 
                  href="https://www.instagram.com/fronteira_tec/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src={logoFronteiraTec} 
                    alt="Fronteira Tec" 
                    width="120" 
                    height="40" 
                    className="h-8 sm:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                </a>
              </div>
              <p className="text-[10px] sm:text-xs text-white/50 italic text-center md:text-left">
                "Transformando ideias em soluções digitais"
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactSection;
