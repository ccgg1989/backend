import {Router} from 'express';
const router = Router()


import  * as authCtrl from "../controllers/auth.controller"
import { verifyToken } from '../middlewares/authjwt';
import {authJwt, verifySinup} from "../middlewares/index"


router.post('/signup',authCtrl.Signup)

router.post('/signin', authCtrl.Signin)


export default router;