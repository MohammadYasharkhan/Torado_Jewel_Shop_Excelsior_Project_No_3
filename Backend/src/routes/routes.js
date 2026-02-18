import express from "express";
import authRoutes from "./authRoutes.js";
import productRoutes from "./productRoutes.js";
import formRoutes from "./formRoutes.js";
import wishlistRoutes from "./wishlistRoutes.js";
import cartRoutes from "./cartRoutes.js";
import newsletterRoutes from "./newLetterRoutes.js";
import orderRoutes from "./orderRoutes.js";

const router = express.Router();

// Mount all routes
router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/forms", formRoutes);
router.use("/newsletter",newsletterRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);

export default router;