
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editproduct } from '../Redux/productSlice';
import './Editproduct.css'

function Editproduct({el,ping,setping}) {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [edited, setedited] = useState({
        title: el.title,
        img:el.img,
        price:el.price,
        category:el.category
    })

    const dispatch = useDispatch();


    return (
    <div >
        <button  onClick={handleShow} className='edit_btn'>
            <img src='edit.png' alt='edit' width={'49px'}/>
        </button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder={el?.title} onChange={(e)=>setedited({...edited,title:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image model URL</Form.Label>
                        <Form.Control type="text" placeholder={el?.img} onChange={(e)=>setedited({...edited,img:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder={el?.price} onChange={(e)=>setedited({...edited,price:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewproduct({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm"  onChange={(e)=>setedited({...edited,category:e.target.value})}>
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
            <Button variant="primary" onClick={()=>{dispatch(editproduct({id:el._id,edited}));setping(!ping);handleClose()}} >
                Edit
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
  )
}

export default Editproduct