import orderUserService from "../services/order-user.service";

const orderUserController = {
    addOrder: async (req, res, next) => {
        try {
            const result = await orderUserService.addOrder(req);
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}
export default orderUserController;