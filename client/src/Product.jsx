import React from 'react'
import './Product.css'

export default function Product() {

  const amount =  500;
  const currency=  "INR"
  const receipt = "qwsaq1"

  const paymentHandler = async () => {
    const res = await fetch('http://localhost:5000/order', {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt
      })
    }) ;

    const order = await res.json();
    console.log(order)
  }


  return (
    <div className='product'>
      <h1>Tshirt</h1>
      <h2>Solid black Cotton Tshirt</h2>
      <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tshirt Image" style={{height: "400px"}} />
      <br />
      <button onClick={paymentHandler}>Pay</button>
    </div>
  )
}
