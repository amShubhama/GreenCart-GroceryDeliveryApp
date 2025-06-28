import express from "express";
import authUser from "../middlewares/authUser.js";
import { addProduct } from "../controllers/productController.js";
import { getAddress } from "../controllers/addressController.js";

const addressRouter = express.Router();

addressRouter.post('/add', authUser, addProduct);
addressRouter.get('/get', authUser, getAddress);


export default addressRouter;