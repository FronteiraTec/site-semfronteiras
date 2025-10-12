import React from 'react'
// import bg from './../assets/bg.jpg'
import bg from './../assets/image.png'
import left from './../assets/left.png'
import right from './../assets/right.png'
import central from './../assets/central.png'
import Header from './Header'
function Banner() {
  return (
    <section id='home' className="min-h-[450px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}>
      <Header/>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center pt-24 sm:pt-20 md:pt-24 lg:pt-20 px-4 sm:px-2 md:px-4 lg:px-0 gap-6 sm:gap-2 md:gap-4">
        <img src={left} alt="left" className='hidden sm:block h-[180px] w-[180px] md:h-[280px] md:w-[280px] lg:h-[380px] lg:w-[380px] xl:h-[501px] xl:w-[501px] object-contain transition-all' />
        <img src={central} alt="central" className='h-[250px] w-[250px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[501px] xl:w-[501px] object-contain transition-all' />
        <img src={right} alt="right" className='hidden sm:block h-[180px] w-[180px] md:h-[280px] md:w-[280px] lg:h-[380px] lg:w-[380px] xl:h-[501px] xl:w-[501px] object-contain transition-all'/>
      </div>
    </section>
  )
}

export default Banner
