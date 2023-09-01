const { Router } = require('express');
const {
    getAllSchools,
    createSchool,
    getOneSchool,
    updateSchool,
    deleteSchool
} = require('../controllers/schools.contoller');

const router = Router();

router.get('/', getAllSchools);
router.post('/', createSchool);

router.get('/:idSchool', getOneSchool);
router.put('/:idSchool', updateSchool);
router.delete('/:idSchool', deleteSchool);


module.exports = router