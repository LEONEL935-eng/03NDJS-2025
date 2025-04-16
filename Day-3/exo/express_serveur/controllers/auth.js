import crypto from "crypto";
import User from "../models/User.js";

export async function register(req, res){
    const { email, password, isAdmin} = req.body;

    try {
        const UserExit = await User.findOne ({ email});
        if (UserExist)
            return res.status(409).json({
        error: "User already exists",
    });
    const 
    }
}