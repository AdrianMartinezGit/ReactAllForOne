import React, { useState }  from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

import nextButton from '../assets/buttons/button_next.webp'
import homeButton from '../assets/buttons/button_home.webp'
import prevButton from '../assets/buttons/button_prev.webp'

import { MadLibFetch } from '../services/DataService.js'

export default function PageFiveComponent() {
  const [fieldOne, setFieldOne] = useState('');
  const [fieldTwo, setFieldTwo] = useState('');
  const [fieldThree, setFieldThree] = useState('');
  const [fieldFour, setFieldFour] = useState('');
  const [fieldFive, setFieldFive] = useState('');
  const [fieldSix, setFieldSix] = useState('');
  const [fieldSeven, setFieldSeven] = useState('');
  const [fieldEight, setFieldEight] = useState('');
  const [fieldNine, setFieldNine] = useState('');
  const [fieldTen, setFieldTen] = useState('');
  const [result, setResult] = useState('');

  const getResult = async () => {
    const response = await MadLibFetch(fieldOne, fieldTwo, fieldThree, fieldFour, fieldFive, fieldSix, fieldSeven, fieldEight, fieldNine, fieldTen);
    setResult(response);
  }

  return (
    <div className='parallax-container-five'>
      <main className='p-8 m-0 w-full sm:p-9 md:py-16 md:px-18 lg:px-32 xl:px-64'>
        <h1 className="text-4xl md:text-6xl text-white text-center underline font-extrabold pb-4 md:pb-6 text-shadow-sm">Mad Libbing</h1>

        <div className='pt-8 pb-16'>
          <div className='section-class w-full h-full px-4 md:px-12 py-6 rounded-lg'>

            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4'>Please enter a place:</h1>
            <input type="text" onChange={(e) => setFieldOne(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter place here" required />
            
            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4 pt-8'>Please enter a living creature (Fiction / Non-Fiction):</h1>
            <input type="text" onChange={(e) => setFieldTwo(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter creature's name here" required />

            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4 pt-8'>Please enter living creature's pronouns (He, She, They):</h1>
            <input type="text" onChange={(e) => setFieldThree(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter creature's pronouns here" required />

            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4 pt-8'>Please enter an adjective:</h1>
            <input type="text" onChange={(e) => setFieldFour(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter adjective here" required />

            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4 pt-8'>Please enter a verb (Ends with a 's'):</h1>
            <input type="text" onChange={(e) => setFieldFive(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter verb here" required />

            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4 pt-8'>Please enter an adverb:</h1>
            <input type="text" onChange={(e) => setFieldSix(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter adverb here" required />

            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4 pt-8'>Please enter a noun (Thing):</h1>
            <input type="text" onChange={(e) => setFieldSeven(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter noun here" required />

            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4 pt-8'>Please enter a verb (Ends with a 'ed'):</h1>
            <input type="text" onChange={(e) => setFieldEight(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter verb here" required />

            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4 pt-8'>Please enter a noun (Theme / Season):</h1>
            <input type="text" onChange={(e) => setFieldNine(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter noun here" required />

            <h1 className='text-2xl sm:text-4xl text-white text-left font-extrabold pb-4 pt-8'>Please enter how the ending plays out (Story is up to User Interpretation):</h1>
            <input type="text" onChange={(e) => setFieldTen(e.target.value)}  className="rounded-lg text-black w-full" placeholder="Enter custom ending here" required />

            <p className='text-1xl sm:text-3xl text-white text-left font-semibold pt-4 pb-6'>Response: {result}</p>
            <div className='flex justify-end'><button onClick={() => getResult()} className="bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-2 px-4 rounded text-3xl w-48 h-20">Submit</button></div>
          </div>
        </div>

        <div className='flex justify-center items-end'>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <Link to={'/pageFour'}><input type="image" src={prevButton} className='w-16 min-[320px]:w-24 md:w-32' alt='prevbutton' /></Link>
            </div>

            <div>
              <Link to={'/'}><input type="image" src={homeButton} className='w-16 min-[320px]:w-24 md:w-32' alt='homebutton' /></Link>
            </div>
            <div>
              <Link to={'/pageSix'}><input type="image" src={nextButton} className='w-16 min-[320px]:w-24 md:w-32' alt='nextbutton' /></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
