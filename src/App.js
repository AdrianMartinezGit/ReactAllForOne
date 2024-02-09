import aquaCube from './assets/cube/cube_aqua.webp'
import blueCube from './assets/cube/cube_blue.webp'
import cyanCube from './assets/cube/cube_cyan.webp'
import greenCube from './assets/cube/cube_green.webp'
import orangeCube from './assets/cube/cube_orange.webp'
import pinkCube from './assets/cube/cube_pink.webp'
import purpleCube from './assets/cube/cube_purple.webp'
import redCube from './assets/cube/cube_red.webp'
import whiteCube from './assets/cube/cube_white.webp'
import yellowCube from './assets/cube/cube_yellow.webp'

import './App.css';

function App() {
  return (
    <>
      <main className='p-4 m-0 w-full'>
        <h1 className="text-4xl text-white text-center underline font-extrabold">All 4 One - Rubik's Cube Themed!</h1>

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
        
        <p className="text-center text-white text-4xl font-semibold">Choose a color challenge!</p>
        
        <div className="flex items-center justify-center pt-12 pb-12">
          <input type="image" src={whiteCube} alt='whiteCube'/>
        </div>
        
        <p className="text-center text-white text-4xl font-semibold pb-12">Extra Color Challenge</p>
      </main>
    </>
  );
}

export default App;
