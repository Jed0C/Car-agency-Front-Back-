
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import NavB from './components/NavB';
import Hero from './components/Hero';
import { getproduct } from './Redux/productSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Productlist from './components/Productlist';
import Foooter from './components/Foooter';
import Addproduct from './components/Addproduct';


function App() {

  const [ping, setping] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getproduct());
    }, [ping])


  return (
    <div className="App">
      <NavB/>
      
      {/* <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes> */}
      <Hero/>
      <Productlist ping={ping} setping={setping}/>
      <Addproduct ping={ping} setping={setping}/>
      <Foooter/>
    </div>
  );
}

export default App;
