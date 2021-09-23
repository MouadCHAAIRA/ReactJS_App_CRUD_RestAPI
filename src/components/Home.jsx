import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../API/Provider'
import { MdDelete } from 'react-icons/md'
import { GrUpdate } from 'react-icons/gr'


export default function Home() {
    const { products, loading, deleteItem, getData } = useContext(context)
   
    
    return (
      <>
        {loading ? (
          <div class='d-flex justify-content-center'>
            <div class='spinner-border' role='status'>
              <span class='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : (
          <div className='container'>
            <h1 className='text-center text-secondary'>all products</h1>
            <div className='row'>
              {products.map((product) => (
                // <ul className='col-md-8 list-group mt-2'>
                //   <button className="btn btn-danger"> <MdDelete/> </button>
                //   <li className='list-group-item bg-primary'>
                //     <strong>title :</strong> {product.title}
                //   </li>
                //   <li className='list-group-item'>
                //     <strong>description :</strong> {product.description}
                //   </li>
                //   <li className='list-group-item'>
                //     <strong>photo :</strong> {product.photo}
                //   </li>
                // </ul>

                <div class='card'>
                  <h2 class='card-header'>{product.title}</h2>
                  <div class='card-body'>
                    <p class='card-text'>
                      {' '}
                      <strong>description</strong> : {product.description}
                    </p>
                    <button
                      onClick={() => deleteItem(product.id)}
                      className='btn btn-danger '
                    >
                      {' '}
                      <MdDelete />
                    </button>
                    <button
                      onClick={() =>
                        getData(
                          product.id,
                          product.title,
                          product.description,
                          product.photo
                        )
                      }
                      className='btn'
                    >
                      <Link
                        className='btn btn-success ml-5'
                        to='/updateproduct'
                      >
                        {' '}
                        <GrUpdate />
                        {/* <UpdateProduct id={product.id} /> */}
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    )
   
}




