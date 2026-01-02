import React from 'react'
import './Product.css'

export default function Product() {
  return (
    <div className='product'>
      <h1>Tshirt</h1>
      <h2>Solid black Cotton Tshirt</h2>
      <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tshirt Image" style={{height: "400px"}} />
      <br />
      <button>Pay</button>
    </div>
  )
}
