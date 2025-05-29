import { models } from "../../server";

const rateResService = {
    addRate: async (req) => {
        const { user_id, res_id, amount } = req.body;
        const existing = await models.rate_res.findOne({
            where: {
                user_id,
                res_id
            }
        })
        if (existing) {
            throw new Error("Bạn đã đánh giá rồi!");
        }
        const newRate = await models.rate_res.create({
            user_id,
            res_id,
            amount,
            date_rate: new Date()
        })
        return {
            message: "Đánh giá thành công!",
            newRate
        }
    },
    rateList: async (req) => {
        const { user_id, res_id } = req.query;
        const where = {};
        if (user_id) where.user_id = user_id;
        if (res_id) where.res_id = res_id;
        const rateList = await models.rate_res.findAll({
            where,
            include: [
                {
                    model: models.user,
                    as: "user",
                    attributes: ['user_id', 'full_name', 'email']
                },
                {
                    model: models.restaurant,
                    as: "re",
                    attributes: ['res_id', 'res_name', 'image']
                }
            ]
        })
        return rateList;
    }
}
export default rateResService;