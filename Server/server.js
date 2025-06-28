import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


// Allow multiple origins
const allowedOrigins = ['http://localhost:5173'];

//Middleware configurations
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

const port = process.env.port || 4000;
app.get('/', (req, res) => {
    res.send("API is working");
})



app.listen(port, () => {
    console.log(`App is listen on Port ${port}`);
});