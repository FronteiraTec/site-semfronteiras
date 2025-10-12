import React from "react";

function Cardcaroussels(props) {
  return (
    <div className="w-full max-w-[320px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[400px] mx-auto bg-[#2B3B74E5] h-[380px] sm:h-[400px] md:h-[420px] shadow-[11px_12px_7px_-3px_#5e698f] flex flex-col rounded-lg p-4 sm:p-5 md:p-6 items-center transition-all hover:scale-105 hover:shadow-xl">
      <h3 className="text-lg sm:text-xl md:text-2xl text-white text-center font-bold py-2 mb-3 sm:mb-4 md:mb-5">
        {props.title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-justify font-thin px-2 leading-relaxed overflow-y-auto">
        {props.description}
      </p>
    </div>
  );
}

export default Cardcaroussels;
