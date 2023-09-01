const mongoose = require('mongoose')
const School = require('../models/School.model');

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
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOneSchool = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateSchool = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteSchool = async (req, res, next) => {
    try {
        
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