import express from "express";
import "dotenv/config";
import cors from "cors"
import Razerpay  from 'razorpay';

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.send(" Hello Chaman chodu");
});

app.post('/order', async (req, res) => {


    try {
         const razerpay = new Razerpay({
        key_id: process.env.TEST_API_KEY,
        key_secret: process.env.TEST_SECRET_KEY

    });

    const options = req.body;
    console.log(req.body)
    const order = await razerpay.orders.create(options);
    // console.log(order);
    res.send(order)

    if(!order){
        return res.status(500).send("error")
    }
        
    } catch (error) {
        console.log(error)
    }
   
})

app.post('/order/validate', (req, res) => {
    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body;

    generated_signature = hmac_sha256(azorpay_order_id + "|" + razorpay_payment_id, process.env.TEST_SECRET_KEY);

    if (generated_signature == razorpay_signature) {
    res.send("payment is successful")
     } else {
        res.send("Invalid payment")
     }

})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})