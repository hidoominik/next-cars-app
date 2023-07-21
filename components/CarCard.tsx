"use client";

import { useState } from "react"
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateRentalCostPerDay, convertMilePerGallonToLiterPerKilometer } from '@/utils/calculations'
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
    car: CarProps;
}
const CarCard = ({ car } : CarCardProps) => {
    const {city_mpg, highway_mpg, combination_mpg, year, make, model, transmission, drive} = car;
    const rentalCost = calculateRentalCostPerDay(1/city_mpg, year);
    const city_fuelUsagePer100km = convertMilePerGallonToLiterPerKilometer(city_mpg);
    const highway_fuelUsagePer100km = convertMilePerGallonToLiterPerKilometer(highway_mpg);
    const combination_fuelUsagePer100km = convertMilePerGallonToLiterPerKilometer(combination_mpg);

    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="car-card group">
        <div className="car-card-content">
            <h2 className="car-card-content-title">
                {make} {model}
            </h2>

        </div>
        <p className="flex mt-5 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">
                PLN
            </span>
                {rentalCost}
            <span className="self-end text-[14px] font-semibold">
                /day
            </span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
            <Image alt="car image" src="/hero.png" fill priority className="object-contain"/>
        </div>
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/steering-wheel.svg"  width={20} height={20} alt="steering wheel"/>
                    <p className="text-[14px]">
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/tire.svg"  width={20} height={20} alt="tire"/>
                    {drive.toUpperCase()}
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/gas.svg"  width={20} height={20} alt="gas"/>
                    {combination_fuelUsagePer100km} l/100km
                </div>
            </div>
              <div className="car-card-btn-container">
              <CustomButton
                title='View More'
                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                textStyles='text-white text-[14px] leading-[17px] font-bold'
                rightIcon = '/right-arrow.svg'
                handleClick = {() => setIsOpen(true)}
          />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal = {()=> setIsOpen(false)} car={car}/>
    </div>
  )
}

export default CarCard