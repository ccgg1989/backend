import {Router} from 'express';
const router = Router()


import  * as productsCtrl from "../controllers/products.controller"



router.post('/', productsCtrl.createProducts )

router.get('/excel', productsCtrl.insertExcelProducts)

router.get('/discount', productsCtrl.getProductsByDiscount )

router.get('/all', productsCtrl.getAllProducts )

router.get('/:nameproducts', productsCtrl.getProductsByName )

router.get('/id/:idproducts', productsCtrl.getProductsById )

router.put('/:idproducts', productsCtrl.putProductsById )

router.delete('/:idproducts', productsCtrl.deleteProductsById)

router.delete('', productsCtrl.deleteAllProducts)

export default router;