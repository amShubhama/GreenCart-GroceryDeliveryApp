import jwt from 'jsonwebtoken';

const authSeller = (req, res, next) => {
    const { sellerToken } = req.cookies;

    if (!sellerToken) {
        return res.json({ success: false, message: 'Seller Not Authorized' });
    }
    try {
        const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);
        if (tokenDecode.email === process.env.SellerEmail) {
            next();
        } else {
            return res.json({ success: false, message: 'Seller Not Authorized' });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
        console.error(error);
    }
}
export default authSeller;