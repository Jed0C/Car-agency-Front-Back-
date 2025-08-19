import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Productcard from './Productcard';
import './Productlist.css'

function Productlist({ping,setping}) {
    const [category, setcategory] = useState("bmw");
    const products=useSelector((state)=>state.product.productlist);
    console.log(products)


  return (
    <div className='productlist_section'>
        <div className='productlist_title'>
        <h1>Where Quality Meets the Road</h1>
        <p>Browse our curated collection of vehicles designed to exceed expectations.</p>
        </div>
       <div className='btn_groupe'>
        <button onClick={()=>{setcategory("marcades-benz")}}><img src='mercedes-benz.png' alt='Marcedes' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setcategory("audi")}><img src='audi.png' alt='audi' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setcategory("bmw")}><img src='bmw.png' alt='bmw' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setcategory("hyundai")}><img src='hyundai.png' alt='hyundai' width={'45px'} height={'45px'}/></button>
        </div> 
        
        <div className='productgrid'>{products?.filter((el)=>el.category===category).map((el)=><Productcard el={el} ping={ping} setping={setping}/>)}</div>
    </div>
  )
}

export default Productlist