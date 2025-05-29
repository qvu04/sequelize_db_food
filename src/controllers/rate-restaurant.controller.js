import rateResService from "../services/rate-restaurant.service";

const rateResController = {
    addRate: async (req, res, next) => {
        try {
            const result = await rateResService.addRate(req);
            res.json(result);
        } catch (error) {
            next(error)
        }
    },
    rateList: async (req, res, next) => {
        try {
            const result = await rateResService.rateList(req);
            res.json(result);
        } catch (error) {
            next(error);
        }

    }

}
export default rateResController;