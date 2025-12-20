import React from 'react'
import linhas from "./../assets/linhas.png";


function Linhas() {
  return (
    <div className="w-full overflow-hidden">
      <img 
        src={linhas} 
        alt="linhas" 
        width="1920" 
        height="200" 
        className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-32 w-full h-auto object-cover" 
      />
    </div>
  )
}

export default Linhas
