
import likeResService from "../services/like-restaurant.service";

const likeResController = {
    likeRes: async (req, res, next) => {
        console.log('req.body:', req.body);
        try {
            const result = await likeResService.likeRes(req);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
    unlikeRes: async (req, res, next) => {
        try {
            const result = await likeResService.unlikeRes(req);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
    likeList: async (req, res, next) => {
        try {
            const result = await likeResService.likeList(req);
            res.json(result);
        } catch (error) {
            next(error);

        }
    }
}
export default likeResController;