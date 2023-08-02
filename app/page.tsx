import { Hero } from '@/components'
import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import SearchBar from '@/components/SearchBar'
import ShowMore from '@/components/ShowMore'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'
import Image from 'next/image'


export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
      manufacturer: searchParams.manufacturer || '',
      year: searchParams.year || 2022,
      fuel: searchParams.fuel || '',
      limit: searchParams.limit || 10,
      model: searchParams.model || '',
    });
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='py-4 sm:px-16 px-6' id="discover">
         <div className='home-text-container'>
          <h1 className='text-4xl font-extrabold'>Car catalogue</h1>
          <p>Explore different types of cars</p> 
      </div>
      <div className='home-filters'>
          <SearchBar />
          <div className="home-filters-container">
              <CustomFilter title="fuel" options={fuels}/>
              <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
      </div>
        {!isDataEmpty ? (
          <section>
            <div className='home-cars-wrapper'>
              {allCars?.map((car) => (

                <CarCard car={car} />

              ))}
            </div>
            <ShowMore 
              pageNumber={(searchParams.limit || 10) / 10} 
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ):(
          <div className='home-error-container'>
            <h2 className='text-black text-xl font-bold'>Oopsy! Something went wrong</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
     
    </main>
  )
}
