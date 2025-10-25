import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//fetch products
router.get("/", getProducts);

//create
router.post("/", createProduct);
//delete
router.delete("/:id", deleteProduct)
console.log(process.env.MONGO_URL);
//update product
router.put("/:id", updateProduct);

export default router;
