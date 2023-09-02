const { Router } = require('express');
const {
    getAllPeriods,
    createPeriod,
    getOnePeriod,
    updatePeriod,
    deletePeriod
} = require('../controllers/period.controller');

const router = Router();

router.get('/', getAllPeriods);
router.post('/', createPeriod);

router.get('/:idPeriod', getOnePeriod);
router.put('/:idPeriod', updatePeriod);
router.delete('/:idPeriod', deletePeriod);


module.exports = router