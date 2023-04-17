import React  from 'react';
import './App.css';

import {   BrowserRouter,   Route,   Routes, } from "react-router-dom";
// import SingleProduct from './pages/SingleProduct';
import { Home } from './pages/Home';
import GetStarted from './pages/GetStarted';





const App = () => {


  return (



   
   
      <div className="iwaiter_container  " >
   <BrowserRouter>

          <Routes>
            
              <Route
                path="/"
                element={
                  <GetStarted />
                }
              />
            
              <Route
                path="/home"
                element={
                  <Home />
                }
              />

            
           
          </Routes>
       
        </BrowserRouter>

</div>
    
 


  )
}

export default App