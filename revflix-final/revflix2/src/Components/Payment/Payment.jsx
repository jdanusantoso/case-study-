import { React, useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from '../ContextAPI/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../ContextAPI/reducer'
import axios from '../Axios/Instance';

function Payment() {

    const [{cart, user}, dispatch] = useStateValue()

  return (
    <div className='payment'>
        <div className="payment_container">
            
               <h1>
                    Checkout (
                        <Link to="/checkout">{cart?.length} items</Link>
                        )
                </h1>

           
           <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 Revature Lane</p>
                        <p>Reston, VA</p>
                    </div>
                </div>

                
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__items'>
                        {cart.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
            </div>

            
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                        
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Payment