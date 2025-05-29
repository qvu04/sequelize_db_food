import express from 'express';
import likeResRouter from './like-restaurant.router';
import rateResRouter from './rate-restaurant.router';
import orderUser from './order-user.router';

const rootRouter = express.Router();

rootRouter.use("/like", likeResRouter);

rootRouter.use("/rate", rateResRouter);

rootRouter.use("/order", orderUser);

export default rootRouter;