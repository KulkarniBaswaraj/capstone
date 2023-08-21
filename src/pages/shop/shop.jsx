import React from 'react'
import { PRODUCTS } from '../../products'
import { Products } from './products'
export const Shop = () => {
  return (
    <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5">
                <h2 className="fw-bolder mb-4">Capstone Products</h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                        {" "}
                        {PRODUCTS.map((product, i) => (<Products data={product} key={i} />))}
                
                </div>
            </div>
        </section>
  )
}
