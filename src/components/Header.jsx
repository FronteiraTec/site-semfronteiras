import React, { useState, useEffect } from 'react'
import { navbarLinks } from '../constants'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Se estiver no topo, sempre mostrar
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Se rolar para baixo mais de 5px, esconder
      else if (currentScrollY > lastScrollY + 5 && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Fechar menu mobile ao esconder
      } 
      // Se rolar para cima mais de 5px, mostrar
      else if (currentScrollY < lastScrollY - 5) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        window.requestAnimationFrame(controlNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);

    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, [lastScrollY]);

  return (
    <div className={`bg-white h-[70px] sm:h-[75px] rounded-b-3xl fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}
    style={{
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.98)'
    }}>
      <header className='flex justify-between mx-3 sm:mx-4 md:mx-6 lg:mx-10 h-full items-center'>
        <h1 className='font-bold text-base sm:text-lg md:text-xl'>
          <a href="#home" className="hover:text-[#2B3B74] transition-colors">Bem-Vindo(a)</a>
        </h1>
        
        {/* Menu Desktop */}
        <nav className='hidden lg:flex space-x-6 xl:space-x-20'>
          {navbarLinks.map((item, index) => (
            <a key={index} href={item.link} className='px-2 xl:px-3 py-2 text-sm xl:text-base hover:text-[#2B3B74] transition-colors font-medium'>
              {item.title}
            </a>
          ))}
        </nav>

        {/* Botão Menu Mobile */}
        <button 
          className='lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 hover:bg-gray-100 rounded-lg transition-colors p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 sm:w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 sm:w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 sm:w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Menu Mobile */}
      <nav className={`lg:hidden bg-white absolute top-[70px] sm:top-[75px] left-0 w-full transition-all duration-300 ease-in-out shadow-lg rounded-b-2xl ${isMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className='flex flex-col py-2 sm:py-4 space-y-1'>
          {navbarLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className='px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg hover:bg-gray-100 hover:text-[#2B3B74] transition-colors font-medium'
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Header
