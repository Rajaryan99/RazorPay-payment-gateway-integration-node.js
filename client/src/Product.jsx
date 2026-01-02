import React from 'react'
import './Product.css'

export default function Product() {

  const amount =  500;
  const currency=  "INR"
  const receipt = "qwsaq1"

  const paymentHandler = async (e) => {
    const response = await fetch('http://localhost:5000/order', {
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

    const order = await response.json();
    console.log(order)

    var options = {
    "key": "rzp_test_RyvEuUlCDFPg9X", // Enter the Key ID generated from the Dashboard
    amount, // Amount is in currency subunits.
    currency,
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Raj Aryan", //your customer's name
        "email": "raj.kumar@example.com", 
        "contact": "+919876543210"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});

    rzp1.open();
    e.preventDefault();
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
