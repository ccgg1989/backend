import {Router} from 'express';
const router = Router()

import * as UserCtrl from "../controllers/user.controller.js"
import {authJwt, verifySinup} from "../middlewares/index.js"


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