import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

import nextButton from '../assets/buttons/button_next.webp'
import homeButton from '../assets/buttons/button_home.webp'
import prevButton from '../assets/buttons/button_prev.webp'

export default function PageNineComponent() {
  return (
    <div className='parallax-container-nine'>
      <h1>Testing One Two Three!</h1>
      <h1>Testing One Two Three!</h1>
      <h1>Testing One Two Three!</h1>
      <h1>Testing One Two Three!</h1>
      <h1>Testing One Two Three!</h1>

      <div className='flex justify-center items-end'>
          <div className="grid grid-cols-3 gap-5">
              <div>
                  <Link to={'/pageEight'}><input type="image" src={prevButton} className='w-16 min-[320px]:w-24 md:w-32' alt='prevbutton'/></Link>
              </div>

              <div>
                  <Link to={'/'}><input type="image" src={homeButton} className='w-16 min-[320px]:w-24 md:w-32' alt='homebutton'/></Link>
              </div>
              <div>
                  <Link to={'/pageTen'}><input type="image" src={nextButton} className='w-16 min-[320px]:w-24 md:w-32' alt='nextbutton'/></Link>
              </div>        
          </div>
        </div>
    </div>
  )
}
