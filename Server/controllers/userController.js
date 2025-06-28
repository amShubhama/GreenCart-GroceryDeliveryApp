import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//register user : /api/user/register
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' });
        }
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ success: false, message: 'User already exists' })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name, email, password: hashPassword,
        });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token,
            {
                httpOnly: true, // Prevent JavaScript to access cookie
                secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
                maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time 
            }
        );
        return res.json({ success: true, user: { email: user.email, name: user.name } })
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
}

// Login User : /api/user/login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ success: false, message: 'Email or Password is missing' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Register first" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.json({ success: true, user: { email: user.email, name: user.name } });
    } catch (error) {
        console.error(error);
        res.send(error.message);
    }
}

//Check Auth: /api/user/is-auth
export const isAuth = async (req, res) => {
    try {
        const userId = req.userId;
        console.log(userId);
        const user = await User.findById(userId).select('-password');
        return res.json({ success: true, user });
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: error.message });
    }
}

//Logout User : /api/user/logout
export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        return res.json({ success: true, message: 'Logged Out' })
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: error.message });
    }
}