import express from 'express';
import rateResController from '../controllers/rate-restaurant.controller';

const rateResRouter = express.Router();

rateResRouter.post("/add-rate", rateResController.addRate);

rateResRouter.get("/rate-list", rateResController.rateList);

export default rateResRouter;