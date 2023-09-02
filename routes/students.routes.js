const { Router } = require('express');
const {
    getAllStudents,
    createStudent,
    getOneStudent,
    updateStudent,
    deleteStudent } = require('../controllers/student.controller');

const router = Router();

router.get('/', getAllStudents);
router.post('/', createStudent);

router.get('/:studentId', getOneStudent);
router.put('/:studentId', updateStudent);
router.delete('/:studentId', deleteStudent);