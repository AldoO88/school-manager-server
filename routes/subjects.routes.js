const { Router } = require('express');
const {
    getAllSubjects,
    createSubject,
    getOneSubject,
    updateSubject,
    deleteSubject } = require('../controllers/subjects.controller');

const router = Router();

router.get('/', getAllSubjects);
router.post('/', createSubject);

router.get('/:subjectId', getOneSubject);
router.put('/:subjectId', updateSubject);
router.delete('/:subjectId', deleteSubject);

module.exports = router;