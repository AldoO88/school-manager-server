const { Router } = require('express');
const {
    getAllTeachers, addSubjects, getSubjectsRigth, getSubjectsLeft,deleteSubject, deleteTeacher
     } = require('../controllers/teachers.controllers');



const router = Router();

router.get('/', getAllTeachers);
router.put('/addSubject/:teacherId', addSubjects)
router.put('/deleteSubject/:teacherId', deleteSubject)
router.get('/subjects/:teacherId', getSubjectsRigth);
router.get('/noSubjects/:teacherId', getSubjectsLeft);
router.put('/:teacherId', deleteTeacher)

module.exports = router;