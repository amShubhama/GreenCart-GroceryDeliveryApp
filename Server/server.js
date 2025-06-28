import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/connectDB.js';
import userRouter from './routes/userRoute.js';

const app = express();
const port = process.env.port || 4000;

// Allow multiple origins
const allowedOrigins = ['http://localhost:5173'];

//Middleware configurations
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

//Routes
app.get('/', (req, res) => {
    res.send("API is working");
})
app.use('/api/user', userRouter);



app.listen(port, () => {
    console.log(`App is listen on Port ${port}`);
    connectDB();
});