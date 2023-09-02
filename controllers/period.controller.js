const mongoose = require('mongoose');
const Period = require('../models/Period.model')

const getAllPeriods = async (req, res, next) => {
    try {
        const period = await Period.find();
        res.status(200).json(period);
    } catch (error) {
        res.status(500).json(error)
    }
}

const createPeriod = async (req, res, next) => {
    const { description, starDate, endDate} = req.body;
    try {
        const newPeriod = await Period.create({ description, starDate, endDate, status: 'Activo' })
        res.status(201).json(newPeriod);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOnePeriod = async (req, res, next) => {
    const { idPeriod } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(idPeriod)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const period = await Period.findById(idPeriod)
        .populate('schools')
        res.status(201).json(school)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updatePeriod = async (req, res, next) => {
    const { idPeriod } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(idPeriod)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const updatePeriod = await Period.findByIdAndUpdate(idPeriod, req.body, { new: true })
        res.status(201).json(updatePeriod)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deletePeriod = async (req, res, next) => {
    const { idPeriod } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(idPeriod)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }

        const schools = (await Period.findById(idPeriod)).schools
        for (const schoolsId of schools) {
            await School.findByIdAndRemove(schoolsId);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
    getAllPeriods,
    createPeriod,
    getOnePeriod,
    updatePeriod,
    deletePeriod
}