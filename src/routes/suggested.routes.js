import {Router} from 'express';
const router = Router()


import  * as SuggestedCtrl from "../controllers/suggested.controller.js"

router.post('/', SuggestedCtrl.createSuggested)

router.get('/', SuggestedCtrl.insertExcelSuggested)

router.get('/all', SuggestedCtrl.getAllSuggested )

router.get('/discount', SuggestedCtrl.getSuggestedDiscount )

router.get('/:namesuggested', SuggestedCtrl.getSuggestedByName )

router.get('/id/:idsuggested', SuggestedCtrl.getSuggestedByName )

router.put('/:idsuggested', SuggestedCtrl.putSuggestedById )

router.delete('/:idsuggested', SuggestedCtrl.deleteSuggestedById)

router.delete('/', SuggestedCtrl.deleteAllSuggested)

export default router;