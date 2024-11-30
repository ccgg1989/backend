import {Router} from 'express';
const router = Router()


import  * as cookiesCtrl from "../controllers/cookies.controller.js"



router.post('/', cookiesCtrl.createCookies)

router.get('/all', cookiesCtrl.getAllCookies)

router.get('/:idcookies', cookiesCtrl.getCookiesById)

router.put('/:idcookies', cookiesCtrl.putCookiesById)

router.delete('/:idcookies', cookiesCtrl.deleteCookiesById)

router.delete('/', cookiesCtrl.deleteAllCookies)

export default router;