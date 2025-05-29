import express from 'express';
import orderUserController from '../controllers/order-user.controller';

const orderUser = express.Router();

orderUser.post("/add-order", orderUserController.addOrder);

export default orderUser;