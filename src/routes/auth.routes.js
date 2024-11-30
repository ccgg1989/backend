import {Router} from 'express';
const router = Router()


import  * as authCtrl from "../controllers/auth.controller.js"
import { verifyToken } from '../middlewares/authjwt.js';
import {authJwt, verifySinup} from "../middlewares/index.js"


router.post('/signup',authCtrl.Signup)

router.post('/signin', authCtrl.Signin)


export default router;