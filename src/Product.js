import React from 'react';
// import leanStartup from './images/leanStartup.jpg';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id,title,price,image,rating}) {
    const [{basket},dispatch]=useStateValue();

   

    const addBasket=()=>{
        // dispatech the item to the data layer
        dispatch({
            type:'ADD TO BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
       
    };

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
            </div>
            <div className="product__price">
                <small>₹</small>
                <strong>{price}</strong>
            </div>
            <div className="product__rating">
                {Array(rating).fill().map((_,i)=>(<p>⭐</p>)) }
                
            </div>

            <img src={image} alt="productImage"/>

            <button className='product__button' onClick={addBasket}>Add to Cart</button>
            
        </div>
    )
}

export default Product;
