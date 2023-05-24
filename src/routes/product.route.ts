import express from "express";
import * as productController from "../controllers/product.controller";

const router = express.Router();

router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.delete('/products/:id', productController.deleteProduct);

export default router;
