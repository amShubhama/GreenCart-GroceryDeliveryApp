import User from "../models/User.js";


//Update User CartData : /api/cart/update
export const updateCart = async (req, res) => {
    try {
        const userId = req.userId;
        const { cartItems } = req.body;
        await User.findByIdAndUpdate(userId, { cartItems });
        res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
}