import HomePageComponent from './components/HomePageComponent'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
