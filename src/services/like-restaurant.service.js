import { models } from "../../server";

const likeResService = {
    likeRes: async (req) => {
        const { user_id, res_id } = req.body;
        const likeExisting = await models.like_res.findOne({ where: { user_id, res_id } });
        if (likeExisting) {
            throw new Error("Người dùng này đã like rồi!");
        }
        const newLike = await models.like_res.create({
            user_id,
            res_id,
            date_like: new Date()
        });
        return {
            message: "Like thành công!",
            newLike
        };
    },
    unlikeRes: async (req) => {
        const { user_id, res_id } = req.body;
        const likeExisting = await models.like_res.findOne({
            where: {
                user_id,
                res_id,
            }
        })
        if (!likeExisting) {
            throw new Error("Người dùng này chưa like!");
        }
        const deleteLike = await models.like_res.destroy({
            where: {
                user_id,
                res_id,
            }
        }
        )
        return {
            message: "Unlike thành công!",
            deleteLike
        };
    },
    likeList: async (req) => {
        const { user_id, res_id } = req.query;
        const where = {};
        if (user_id) where.user_id = user_id;
        if (res_id) where.res_id = res_id;
        const likeList = await models.like_res.findAll({
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
        return likeList;
    }

}
export default likeResService;