const mongoose = require('mongoose');
const Student = require('../models/Student.model');

const getAllStudents = async (req, res, next ) => {
    try {
        const students = await Student.find().populate('group');
        res.status(201).json(students)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createStudent = async (req, res, next ) => {
    const { name, lastName, birthday, curp, address, email, phone, groupId } = req.body;
    try {
        const newStudent = await Student.create( { name, lastName, birthday, curp, address, email, phone, groupId });
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOneStudent = async (req, res, next ) => {
    const { studentId } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(studentId)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const students = await Student.findById( studentId )
        .populate('group');
        res.status(201).json(students)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateStudent = async (req, res, next ) => {
    const { studentId } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(studentId)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const updateStudents = await Student.findByIdAndUpdate( studentId, req.body, { new: true })
        res.status(201).json(updateStudents)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteStudent = async (req, res, next ) => {
    const { studentId } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(studentId)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const deleteSstudent = await Student.findByIdAndRemove(studentId)
        res.status(200).json({ message: `El alumno con id ${studentId} fue eliminado con exito` })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllStudents,
    createStudent,
    getOneStudent,
    updateStudent,
    deleteStudent
}