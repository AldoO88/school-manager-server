const mongoose = require('mongoose');
const Group = require('../models/Group.model');

const getAllGroup = async (req, res, next ) => {
    try {
        const groups = await Group.find().populate('period')
        res.status(201).json(groups)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createGroup = async (req, res, next ) => {
    const { name, periodId } = req.body;
    try {
        const newGroup= await Group.create( { name, periodId });
        res.status(201).json(newGroup)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOneGruop = async (req, res, next ) => {
    const { groupId } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(groupId)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const group = await Group.findById( studentId )
        .populate('period');
        res.status(201).json(group)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateGroup = async (req, res, next ) => {
    const { groupId } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(groupId)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        const updateGroup = await Group.findByIdAndUpdate( groupId, req.body, { new: true })
        res.status(201).json(updateGroup)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteGroup = async (req, res, next ) => {
    const { groupId } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(groupId)) {
            res.status(400).json({ message: 'wrong id'})
            return
        }
        await Group.findByIdAndRemove(groupId)
        
        res.status(200).json({ message: `El grupo con id ${groupId} fue eliminado con exito` })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllGroup,
    createGroup,
    getOneGruop,
    updateGroup,
    deleteGroup
}