
import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage.jsx'
import DetailsPage from './DetailsPage.jsx'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<LandingPage/>}/>
          <Route path = '/details' element = {<DetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
   
   
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 