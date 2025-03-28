import { addToCart, getCartProduct, removeAllFromCart, updateQuatity } from "../controller/cart.controller.js";
import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
router.get('/',protectRoute,getCartProduct)
router.post('/',protectRoute,addToCart)
router.delete('/',protectRoute,removeAllFromCart)
router.put('/:id',protectRoute,updateQuatity)


export default router;