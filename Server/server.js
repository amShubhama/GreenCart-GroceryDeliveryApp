import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/connectDB.js';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import { stripeWebhooks } from './controllers/orderController.js';

const app = express();
const port = process.env.port || 4000;

//connections
await connectDB();
connectCloudinary().then(() => console.log('Cloudinary is connected successfully...'));

// Allow multiple origins
const allowedOrigins = ['http://localhost:5173', 'https://green-cart-lime.vercel.app'];

//Stripe webhooks route to verify payment status (Online)
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

//Middleware configurations
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

//Routes
app.get('/', (req, res) => res.send("API's is Working"));
app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/address', addressRouter);
app.use('/api/order', orderRouter);


app.listen(port, async () => {
    console.log(`App is listen on Port ${port}`);
});