import React, { useState }  from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

import nextButton from '../assets/buttons/button_next.webp'
import homeButton from '../assets/buttons/button_home.webp'
import prevButton from '../assets/buttons/button_prev.webp'

import { EightBallFetch } from '../services/DataService.js'

export default function PageNineComponent() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  const getResult = async () => {
    const response = await EightBallFetch(question);
    setResult(response);
  }

  return (
    <div className='parallax-container-nine'>
      <main className='p-8 m-0 w-full sm:p-9 md:py-16 md:px-18 lg:px-32 xl:px-64'>
        <h1 className="text-4xl md:text-6xl text-white text-center underline font-extrabold pb-4 md:pb-6 text-shadow-sm">Magic 8 Ball</h1>

        <div className='pt-8 pb-16'>
          <div className='section-class w-full h-full px-4 md:px-12 py-6 rounded-lg'>
            <h1 className='text-3xl sm:text-5xl text-white text-left font-extrabold pb-4'>Ask a Question:</h1>
            <input type="text" onChange={(e) => setQuestion(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter question here" required />
            <p className='text-1xl sm:text-3xl text-white text-left font-semibold pt-4 pb-6'>Response: {result}</p>
            <div className='flex justify-end'><button onClick={() => getResult()} className="bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-2 px-4 rounded text-3xl w-48 h-20">Ask</button></div>
          </div>
        </div>

        <div className='flex justify-center items-end'>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <Link to={'/pageEight'}><input type="image" src={prevButton} className='w-16 min-[320px]:w-24 md:w-32' alt='prevbutton' /></Link>
            </div>

            <div>
              <Link to={'/'}><input type="image" src={homeButton} className='w-16 min-[320px]:w-24 md:w-32' alt='homebutton' /></Link>
            </div>
            <div>
              <Link to={'/pageTen'}><input type="image" src={nextButton} className='w-16 min-[320px]:w-24 md:w-32' alt='nextbutton' /></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
