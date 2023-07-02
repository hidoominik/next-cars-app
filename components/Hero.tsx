"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleClick = () =>{

    }
  return (
    <div className="hero">
        <div className = "flex-1 pt-36 sm:px-16 px-6">
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold"> CARS! </h1>
            <p className = "text-[27px] text-black-100 font-light mt-5"> 
                Browse your dream cars
            </p>

            <CustomButton title="Check this out!" handleClick={handleClick} containerStyles='mt-10'/>
        </div>
        <div className = "hero-image-container">
            <div className="hero-image">
                <Image src="/hero.png" alt="hero" fill className="object-contain"/>  
            </div>
            <div className='hero-image-overlay fill-teal-500'/>
        </div>
    </div>
  )
}

export default Hero;