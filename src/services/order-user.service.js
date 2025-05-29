import { v4 as uuidv4 } from 'uuid';
import { models } from '../../server';

const orderUserService = {
    addOrder: async (req) => {
        const { user_id, food_id, amount, arr_sub_id } = req.body;
        if (!user_id || !food_id || !amount || !arr_sub_id) {
            throw new Error("Thiếu thông tin!");
        };
        const code = "ORD-" + uuidv4();
        let subIdString = "";
        if (Array.isArray(arr_sub_id)) {
            subIdString = arr_sub_id.join(",");
        } else if (typeof arr_sub_id == "string" || typeof arr_sub_id == "number") {
            subIdString = String(arr_sub_id);
        }
        const newOrder = await models.order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        })
        return {
            message: "Thêm order thành công!",
            newOrder,
        }
    }
}
export default orderUserService;