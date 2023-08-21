import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { id, title, price, images } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={images[0]} alt="img" />
            <div className="description">
                <p>
                    <b>{title}</b>
                </p>
                <p> Price: ${price.toFixed(2)}</p>
                <div className="countHandler d-flex">
                    <button className="btn btn-light" onClick={() => removeFromCart(id)}> - </button>
                    <input
                        className="form-control itemInp"
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button className="btn btn-light" onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};