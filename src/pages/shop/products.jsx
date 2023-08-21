import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

export const Products = (props) => {
    const { id, title, price, images } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];
    return (
        <div className='Wrapper'>
            <div className="col mb-5" >
                <div className="card h-100">
                    <img className="card-img-top" src={images[0]} alt="..." />
                    <div className="card-body">
                        <div className="text-center">
                            <p className="fw-bolder text-truncate"> {title} </p>
                            ${price.toFixed(2) }
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button className='btn btn-outline-dark' onClick={() => addToCart(id)}> Add To Cart { cartItemCount && 
                                <> ({ cartItemCount }) </> } 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
