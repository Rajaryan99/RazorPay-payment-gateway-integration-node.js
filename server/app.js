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
    const order = await razerpay.orders.create(options);
    console.log(order);
    res.send(order)

    if(!order){
        return res.status(500).send("error")
    }
        
    } catch (error) {
        console.log(error)
    }
   
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})