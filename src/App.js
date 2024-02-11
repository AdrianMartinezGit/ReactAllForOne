import aquaCube from './assets/cube/cube_aqua.png'
import blueCube from './assets/cube/cube_blue.png'
import cyanCube from './assets/cube/cube_cyan.png'
import greenCube from './assets/cube/cube_green.png'
import orangeCube from './assets/cube/cube_orange.png'
import pinkCube from './assets/cube/cube_pink.png'
import purpleCube from './assets/cube/cube_purple.png'
import redCube from './assets/cube/cube_red.png'
import whiteCube from './assets/cube/cube_white.png'
import yellowCube from './assets/cube/cube_yellow.png'

import './App.css';

function App() {
  return (
    <>
    <div className='parallax-container-home'>
      <main className='p-8 m-0 w-full sm:p-9 md:p-16'>
        <h1 className="text-4xl md:text-6xl text-white text-center underline font-extrabold pb-4 md:pb-6">All 4 One - Rubik's Cube Themed!</h1>

        <div className="flex items-center justify-center pt-6 pb-12">
          <div className='bg-white p-1 rounded-2xl'>
            <div className='grid grid-cols-3 grid-rows-3 gap-1 bg-black p-2 rounded-2xl'>
              <img src={redCube} alt='redCube' className='img-button'/>
              <img src={orangeCube} alt='orangeCube' className='img-button'/>
              <img src={yellowCube} alt='yellowCube' className='img-button'/>
              <img src={greenCube} alt='greenCube' className='img-button'/>
              <img src={cyanCube} alt='cyanCube' className='img-button'/>
              <img src={aquaCube} alt='aquaCube' className='img-button'/>
              <img src={blueCube} alt='blueCube' className='img-button'/>
              <img src={purpleCube} alt='purpleCube' className='img-button'/>
              <img src={pinkCube} alt='pinkCube' className='img-button'/>
            </div>
          </div>
        </div>
        
        <p className="text-center text-white text-4xl md:text-6xl font-semibold">Choose a color challenge!</p>
        
        <div className="flex items-center justify-center pt-12 pb-6">
          <input type="image" src={whiteCube} alt='whiteCube'/>
        </div>
        
        <p className="text-center text-white text-4xl md:text-5xl font-semibold pb-12">Extra Color Challenge</p>
      </main>
      </div>
    </>
  );
}

export default App;
