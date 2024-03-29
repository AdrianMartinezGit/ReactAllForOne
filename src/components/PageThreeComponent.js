import React, { useState }  from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

import nextButton from '../assets/buttons/button_next.webp'
import homeButton from '../assets/buttons/button_home.webp'
import prevButton from '../assets/buttons/button_prev.webp'

import { questionOneFetch, questionTwoFetch } from '../services/DataService.js'

export default function PageThreeComponent() {
  const [questionOne, setQuestionOne] = useState('');
  const [resultOne, setResultOne] = useState('');

  const [questionTwo, setQuestionTwo] = useState('');
  const [resultTwo, setResultTwo] = useState('');

  const getResultOne = async () => {
    const response = await questionOneFetch(questionOne);
    setResultOne(response);
  }

  const getResultTwo = async () => {
    const response = await questionTwoFetch(questionTwo);
    setResultTwo(response);
  }

  return (
    <div className='parallax-container-three'>
      <main className='p-8 m-0 w-full sm:p-9 md:py-16 md:px-18 lg:px-32 xl:px-64'>
        <h1 className="text-4xl md:text-6xl text-white text-center underline font-extrabold pb-4 md:pb-6 text-shadow-sm">Asking Questions</h1>

        <div className='grid grid-rows-2 gap-16 pt-8 pb-8'>
          <div className='section-class w-full h-full px-4 md:px-12 py-6 rounded-lg'>
            <h1 className='text-3xl sm:text-5xl text-white text-left font-extrabold pb-4'>Question #1:</h1>
            <input type="text"  onChange={(e) => setQuestionOne(e.target.value)} className="rounded-lg text-black w-full" placeholder="Enter your name here" required/>
            <p className='text-3xl text-white text-left font-semibold pt-4 pb-6'>Response: {resultOne}</p>
            <div className='flex justify-end'><button onClick={() => getResultOne()} className="bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-2 px-4 rounded">Submit</button></div>
          </div>

          <div className='section-class w-full h-full px-4 md:px-12 py-6 rounded-lg'>
            <h1 className='text-3xl sm:text-5xl text-white text-left font-extrabold pb-4'>Question #2:</h1>
            <input type="text"  onChange={(e) => setQuestionTwo(e.target.value)} className="rounded-lg text-black w-full" placeholder="Enter the time you woke up at" required/>
            <p className='text-1xl sm:text-3xl text-white text-left font-semibold pt-4 pb-6'>Response: {resultTwo}</p>
            <div className='flex justify-end'><button onClick={() => getResultTwo()} className="bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-2 px-4 rounded text-3xl w-48 h-20">Submit</button></div>
          </div>
        </div>

        <div className='flex justify-center items-end'>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <Link to={'/pageTwo'}><input type="image" src={prevButton} className='w-16 min-[320px]:w-24 md:w-32' alt='prevbutton' /></Link>
            </div>

            <div>
              <Link to={'/'}><input type="image" src={homeButton} className='w-16 min-[320px]:w-24 md:w-32' alt='homebutton' /></Link>
            </div>
            <div>
              <Link to={'/pageFour'}><input type="image" src={nextButton} className='w-16 min-[320px]:w-24 md:w-32' alt='nextbutton' /></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
