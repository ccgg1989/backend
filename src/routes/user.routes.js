import {Router} from 'express';
const router = Router()

import * as UserCtrl from "../controllers/user.controller"
import {authJwt, verifySinup} from "../middlewares/index"


router.get('/', UserCtrl.getUser)


router.post('/',
   authJwt.verifyToken,
   authJwt.isAdminn,
   verifySinup.checkRolesExisted
, UserCtrl.tokenUser)

router.get('/:token', UserCtrl.tokenUser)
router.put('/:token', UserCtrl.putUser)
router.post('/password', UserCtrl.putPassword)
router.post('/reset', UserCtrl.resetPassword)

export default router;