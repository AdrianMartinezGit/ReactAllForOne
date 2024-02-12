import React, { useState }  from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

import nextButton from '../assets/buttons/button_next.webp'
import homeButton from '../assets/buttons/button_home.webp'
import prevButton from '../assets/buttons/button_prev.webp'

import { CategoryCountryFetch, CategoryFoodFetch, CategoryRatingFetch } from '../services/DataService.js'

export default function PageTenComponent() {
  return (
    <div className='parallax-container-ten'>
      <main className='p-8 m-0 w-full sm:p-9 md:py-16 md:px-64'>
        <h1 className="text-4xl md:text-6xl text-white text-center underline font-extrabold pb-4 md:pb-6 text-shadow-sm">Asking Questions</h1>

        <div className='grid grid-rows-2 gap-16 pt-8 pb-8'>
          <div className='section-class w-full h-full px-4 md:px-12 py-6 rounded-lg'>
            <h1 className='text-5xl text-white text-left font-extrabold pb-4'>Category by Country (1 - 3):</h1>
            <input type="text" id="addNumberOne" className="rounded-lg text-black w-full" placeholder="Enter question here" required/>
            <p className='text-3xl text-white text-left font-semibold pt-4'>Response:</p>
            <div className='flex justify-end'><button className="bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-2 px-4 rounded">Submit</button></div>
          </div>

          <div className='section-class w-full h-full px-4 md:px-12 py-6 rounded-lg'>
            <h1 className='text-5xl text-white text-left font-extrabold pb-4'>Category by Food (1 - 3):</h1>
            <input type="text" id="addNumberOne" className="rounded-lg text-black w-full" placeholder="Enter question here" required/>
            <p className='text-3xl text-white text-left font-semibold pt-4'>Response:</p>
            <div className='flex justify-end'><button className="bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-2 px-4 rounded">Submit</button></div>
          </div>

          <div className='section-class w-full h-full px-4 md:px-12 py-6 rounded-lg'>
            <h1 className='text-5xl text-white text-left font-extrabold pb-4'>Category by Rating (1 - 3):</h1>
            <input type="text" id="addNumberOne" className="rounded-lg text-black w-full" placeholder="Enter question here" required/>
            <p className='text-3xl text-white text-left font-semibold pt-4'>Response:</p>
            <div className='flex justify-end'><button className="bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-2 px-4 rounded">Submit</button></div>
          </div>
        </div>

        <div className='flex justify-center items-end'>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <Link to={'/pageNine'}><input type="image" src={prevButton} className='w-16 min-[320px]:w-24 md:w-32' alt='prevbutton' /></Link>
            </div>

            <div>
              <Link to={'/'}><input type="image" src={homeButton} className='w-16 min-[320px]:w-24 md:w-32' alt='homebutton' /></Link>
            </div>
            <div>
              <Link to={'/pageEleven'}><input type="image" src={nextButton} className='w-16 min-[320px]:w-24 md:w-32' alt='nextbutton' /></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
