import express from 'express';
import likeResController from '../controllers/like-restaurant.controller';

const likeResRouter = express.Router();

likeResRouter.post("/like-res", likeResController.likeRes);

likeResRouter.delete("/unlike-res", likeResController.unlikeRes);

likeResRouter.get("/like-list", likeResController.likeList);
export default likeResRouter;