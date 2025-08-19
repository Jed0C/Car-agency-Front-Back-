
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Addproduct.css'
import { useDispatch } from 'react-redux';
import { addproduct } from '../Redux/productSlice';

function Addproduct({ping,setping}) {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newproduct, setnewproduct] = useState({
        title:"",
        img:"",
        price:"",
        category:"bmw"
    })

    const dispatch = useDispatch();


    return (
    <div className='add'>
        <Button  onClick={handleShow} className='btnplus'>
            <img src='carlogo.png' alt='+' width={'35px'}/>
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="Enter Car model" onChange={(e)=>setnewproduct({...newproduct,title:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image model URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter image URL " onChange={(e)=>setnewproduct({...newproduct,img:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter car price" onChange={(e)=>setnewproduct({...newproduct,price:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewproduct({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm" value={newproduct.category} onChange={(e)=>setnewproduct({...newproduct,category:e.target.value})}>
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                            <option value="marcades-benz">Mercedes-benz</option>
                            <option value="hyundai">Hyundai</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(addproduct(newproduct));setping(!ping);handleClose()}} >
                add
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
  )
}

export default Addproduct