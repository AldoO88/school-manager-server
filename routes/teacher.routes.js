const { Router } = require('express');
const {
    getAllTeachers,
     } = require('../controllers/teachers.controllers');


const router = Router();

router.get('/', getAllTeachers);

module.exports = router;