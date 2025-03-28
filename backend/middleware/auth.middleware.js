import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No access Token provided" });
    }
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decoded.userId).select(-"password");

      if (!user) {
        return res.status(401).json({ message: "User not Found" });
      }

      res.user = user;

      next();
    } catch (error) {
        if (error.name === "TokenExpiredError"){
            return res.status(401).json({message: "Unauthorized-Access token expired"})
        }
    }
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(401).json({ message: "Unauthorized-Invaild access token" });
  }
};

export const adminRoute = (req,res,next) =>{
    if(res.user && req.user.role === "admin"){
        next();
    }else{
        res.status(403).json({ message: "Access denied - Admin Only" });
    }
}