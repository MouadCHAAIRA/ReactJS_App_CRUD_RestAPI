import React,{useContext,useState} from 'react'
import { context } from '../API/Provider'


export default function UpdateProduct(props) {
  const { update, products, productData } = useContext(context)
  const [newProduct, setNewProduct] = useState({ products })


  function handleChange(e){
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,

    });

  }

    return (
      <>
        <div className='container mt-5'>
          <div className='row'>
            <div className='form-group col-md-6 offset-3'>
              <h3>Update product:</h3>

              <input
                placeholder='title'
                onChange={handleChange}
                name='title'
                type='text'
                value={productData.title}
                className='form-control mt-2'
              />
              <textarea
                placeholder='description'
                onChange={handleChange}
                name='description'
                type='text'
                className='form-control mt-2'
              >
                {productData.desc}
              </textarea>
              <input
                placeholder='photo'
                onChange={handleChange}
                name='photo'
                type='text'
                value={productData.photo}
                className='form-control mt-2'
              />
              <button
                onClick={() => update(productData.id, newProduct)}
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
