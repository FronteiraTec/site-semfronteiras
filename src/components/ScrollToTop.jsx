import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-[#2B3B74] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#1f2d5a] transition-all duration-300 hover:scale-110 hover:shadow-xl group"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp className="text-lg sm:text-xl group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
