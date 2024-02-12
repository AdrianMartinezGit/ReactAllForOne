import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from "react-dom/client";

import HomePageComponent from './components/HomePageComponent.js'
import PageTwoComponent from './components/PageTwoComponent.js'
import PageThreeComponent from './components/PageThreeComponent.js'
import PageFourComponent from './components/PageFourComponent.js'
import PageFiveComponent from './components/PageFiveComponent.js'
import PageSixComponent from './components/PageSixComponent.js'
import PageSevenComponent from './components/PageSevenComponent.js'
import PageEightComponent from './components/PageEightComponent.js'
import PageNineComponent from './components/PageNineComponent.js'
import PageTenComponent from './components/PageTenComponent.js'
import PageElevenComponent from './components/PageElevenComponent.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path='pageTwo' element={<PageTwoComponent/>}/>
        <Route path='pageThree' element={<PageThreeComponent/>}/>
        <Route path='pageFour' element={<PageFourComponent/>}/>
        <Route path='pageFive' element={<PageFiveComponent/>}/>
        <Route path='pageSix' element={<PageSixComponent/>}/>
        <Route path='pageSeven' element={<PageSevenComponent/>}/>
        <Route path='pageEight' element={<PageEightComponent/>}/>
        <Route path='pageNine' element={<PageNineComponent/>}/>
        <Route path='pageTen' element={<PageTenComponent/>}/>
        <Route path='pageEleven' element={<PageElevenComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;