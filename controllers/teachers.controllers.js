const mongoose = require('mongoose');
const User = require('../models/User.model');

const getAllTeachers = async (req, res, next ) => {
    try {
        const teachers = await User.find({profile: 'Docente'}).populate('subjects');
        res.status(201).json(teachers)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllTeachers
};