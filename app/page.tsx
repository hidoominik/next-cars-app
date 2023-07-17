import { Hero } from '@/components'
import CustomFilter from '@/components/CustomFilter'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'

export default function Home() {
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
              <CustomFilter title="fuel"/>
              <CustomFilter title="year"/>
          </div>
      </div>
      </div>
     
    </main>
  )
}
