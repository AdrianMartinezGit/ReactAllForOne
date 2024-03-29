import React  from 'react'

import aquaCube from '../assets/cube/cube_aqua.webp'
import blueCube from '../assets/cube/cube_blue.webp'
import cyanCube from '../assets/cube/cube_cyan.webp'
import greenCube from '../assets/cube/cube_green.webp'
import orangeCube from '../assets/cube/cube_orange.webp'
import pinkCube from '../assets/cube/cube_pink.webp'
import purpleCube from '../assets/cube/cube_purple.webp'
import redCube from '../assets/cube/cube_red.webp'
import whiteCube from '../assets/cube/cube_white.webp'
import yellowCube from '../assets/cube/cube_yellow.webp'

import '../App.css'
import { Link } from 'react-router-dom'

export default function HomePageComponent() {
  return (
    <div className='parallax-container-home'>
      <main className='p-8 m-0 w-full sm:p-9 md:py-16 md:px-18 lg:px-32 xl:px-64'>
        <h1 className="text-4xl md:text-6xl text-white text-center underline font-extrabold pb-4 md:pb-6">All 4 One - Rubik's Cube Themed!</h1>

        <div className="flex items-center justify-center pt-6 pb-12">
          <div className='bg-white p-1 rounded-2xl'>
            <div className='grid grid-cols-3 grid-rows-3 gap-1 bg-black p-2 rounded-2xl'>
              <Link to={'pageTwo'}><img src={redCube} alt='redCube' className='img-button'/></Link>
              <Link to={'pageThree'}><img src={orangeCube} alt='orangeCube' className='img-button'/></Link>
              <Link to={'pageFour'}><img src={yellowCube} alt='yellowCube' className='img-button'/></Link>
              <Link to={'pageFive'}><img src={greenCube} alt='greenCube' className='img-button'/></Link>
              <Link to={'pageSix'}><img src={cyanCube} alt='cyanCube' className='img-button'/></Link>
              <Link to={'pageSeven'}><img src={aquaCube} alt='aquaCube' className='img-button'/></Link>
              <Link to={'pageEight'}><img src={blueCube} alt='blueCube' className='img-button'/></Link>
              <Link to={'pageNine'}><img src={purpleCube} alt='purpleCube' className='img-button'/></Link>
              <Link to={'pageTen'}><img src={pinkCube} alt='pinkCube' className='img-button'/></Link>
            </div>
          </div>
        </div>
        
        <p className="text-center text-white text-4xl md:text-6xl font-semibold">Choose a color challenge!</p>
        
        <div className="flex items-center justify-center pt-12 pb-6">
            <Link to={'pageEleven'}><input type="image" src={whiteCube} alt='whiteCube'/></Link>
        </div>
        
        <p className="text-center text-white text-4xl md:text-5xl font-semibold pb-12">Extra Color Challenge</p>
      </main>
    </div>
  )
}
