import React,{useContext, useState} from 'react'
import {context} from '../API/Provider'

export default function AddPoduct() {
  const { addItem, products } = useContext(context)
  const [newProduct, setNewProduct] = useState({products})
  
  function handleChange(e){
   setNewProduct({
     ...newProduct,
     [e.target.name]: e.target.value,
   })

  }
    return (
      <>
        <div className='container mt-5'>
          <div className='row'>
            <div className='form-group col-md-6 offset-3'>
              <h3>Add product:</h3>
              <input
                placeholder='title'
                onChange={handleChange}
                name='title'
                type='text'
                className='form-control mt-2'
              />
              <textarea
                placeholder='description'
                onChange={handleChange}
                name='description'
                type='text'
                className='form-control mt-2'
              ></textarea>
              <input
                placeholder='photo'
                onChange={handleChange}
                name='photo'
                type='text'
                className='form-control mt-2'
              />
              <button
                onClick={() => addItem(newProduct)}
                className='btn btn-info mt-2 form-control'
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    )
}
