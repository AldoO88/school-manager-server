const mongoose = require('mongoose');
const Subject = require('../models/Subject.model');

const getAllSubjects = async (req, res, next ) => {
    try {
        const subjects = await Subject.find()
        res.status(201).json(subjects)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createSubject = async (req, res, next ) => {
    const { name, description, grade, credits, hoursWeek, maxHoursDay } = req.body;
    try {
        const newSubject = await Subject.create( { name, description, grade, credits, hoursWeek, maxHoursDay });
        res.status(201).json(newSubject)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOneSubject = async (req, res, next ) => {
    const { subjectId } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(subjectId)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const subject = await Subject.findById( subjectId )
        res.status(201).json(subject)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateSubject = async (req, res, next ) => {
    const { subjectId } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(subjectId)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const updateSubjects = await Subject.findByIdAndUpdate( subjectId, req.body, { new: true })
        res.status(201).json(updateSubjects)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteSubject = async (req, res, next ) => {
    const { subjectId } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(subjectId)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const deleteSubject = await Subject.findByIdAndRemove(subjectId)
        res.status(200).json({ message: `El alumno con id ${subjectId} fue eliminado con exito` })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllSubjects,
    createSubject,
    getOneSubject,
    updateSubject,
    deleteSubject
}