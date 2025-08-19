import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Productcard.css'
import { deleteproduct } from '../Redux/productSlice';
import { useDispatch } from 'react-redux';
import Editproduct from './Editproduct';
import './Editproduct.css'

function Productcard({el ,ping,setping}) {


  const dispatch = useDispatch();
  return (
    <div>
        <Card className='carta'>
      <Card.Img variant="top" src={el?.img} />
      <Card.Body>
        <Card.Title>{el?.title}</Card.Title>
        <Card.Text>
          <p>{el?.price} DT</p>
        </Card.Text>
        <div style={{display:'flex',justifyContent:'space-around'}}>
        <button className='buy_btn'>Buy</button>
        <button onClick={()=>{dispatch(deleteproduct(el?._id));setping(!ping)}} className='delete_btn'> <img src='delete.png' alt='delete'/> </button>
        <Editproduct el={el} ping={ping} setping={setping}/>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Productcard