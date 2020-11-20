import React from 'react';
import './Checkout.css';
import banner from './images/banner.jpg';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket},dispatch]=useStateValue();


    return (
        <div className='checkout'>
            <div className="checkout__left">
                
                <img className='checkout__bannerImage'src={banner} alt=""/>
                <div className="checkout__title">
                    <h1>basket items </h1>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        title={item.title}
                        />
                    ))}
                </div>    
                
            </div>
            <div className="checkout__subtotal">
                <Subtotal />
                
            </div>
        </div>
    )
}

export default Checkout;
