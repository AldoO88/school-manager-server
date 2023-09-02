const mongoose = require('mongoose')
const School = require('../models/School.model');
const Subject = require('../models/Subject.model');
const User = require('../models/User.model');
const Group = require('../models/Group.model');

const getAllSchools = async (req, res, next) => {
    try {
        const schools = await School
        .find();
        res.status(200).json(schools);
    } catch (error) {
        res.status(500).json(error)
    }
}

const createSchool = async (req, res, next) => {
    const { name, level, cct, shift, address } = req.body
    try {
        const newSchool = await School.create({ name, level, cct, shift, address, subjects: [], users: [], groups: []})
        res.status(201).json(newSchool);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOneSchool = async (req, res, next) => {
    const { idSchool } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(idSchool)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const school = await School.findById(idSchool)
        .populate('subjects')
        .populate('users')
        .populate('groups')

        res.status(201).json(school)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateSchool = async (req, res, next) => {
    const { idSchool } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(idSchool)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }

        const updateSchool = await School.findByIdAndUpdate(idSchool, req.body, { new: true })
        res.status(201).json(updateSchool)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteSchool = async (req, res, next) => {
    const { idSchool } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(idSchool)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }

        const subjects = (await School.findById(idSchool)).subjects
        for (const subjectId of subjects) {
            await Subject.findByIdAndRemove(subjectId);
        }
        const users = (await School.findById(idSchool)).users
        for (const userId of users) {
            await Subject.findByIdAndRemove(userId);
        }
        const groups = (await School.findById(idSchool)).groups
        for (const groupId of groups) {
            await Subject.findByIdAndRemove(groupId);
        }

        const deteleSchool = await School.findByIdAndRemove(idSchool)
        res.status(200).json({ message: `La escuela con id ${idSchool} fue eliminada con exito` })
        
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = {
    getAllSchools,
    createSchool,
    getOneSchool,
    updateSchool,
    deleteSchool
}