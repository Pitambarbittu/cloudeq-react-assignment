import './App.css';
import Home from './navbar/Home';
import Electronics from './navbar/Electronics';
import Fashion from './navbar/Fashion';
import Grocery from './navbar/Grocery';
import Mobiles from './navbar/Mobiles';
import TopOffers from './navbar/Topoffers';
import Travel from './navbar/Travel';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Nav';


// import UseStateHook from './hooks/UseStateHook';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     {/* <UseStateHook/> */}
     <Routes>
     
     <Route path='/Home' element={<Home/>} />

    <Route path='/Electronics' element={<Electronics/>} />
    <Route path='/Fashion' element={<Fashion/>} />
    <Route path='/Grocery' element={<Grocery/>} />
    <Route path='/Mobiles' element={<Mobiles/>} />
    <Route path='/TopOffers' element={<TopOffers/>} />
    <Route path='/Travels' element={<Travel/>} />


     
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
