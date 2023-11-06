const mongoose = require('mongoose');
const User = require('../models/User.model');
const Subject = require('../models/Subject.model');

const getAllTeachers = async (req, res, next ) => {
    try {
        const teachers = await User.find({profile: 'Docente', status: 'Active'})
        .populate( { path: 'subjects' } )
        console.log(JSON.parse(teachers));
        res.status(201).json(JSON.parse(teachers));
    } catch (error) {
        res.status(500).json(error);
    }
}

const addSubjects = async (req, res, next) => {
    const { teacherId } = req.params;
    const { checked } = req.body;
    console.log( checked );
    try {
    if(!checked){
        res.status(400).json({ message: "You must select at least one subject" })
        return
    }

    const idSubjects = []
    for (const subject of checked){
        const findSubject = await Subject.findById(subject._id)
        idSubjects.push(findSubject._id);
    }

    console.log(idSubjects)
   
        //const findSubject = await Subject.findById(subjectId)
        const addSubject = await User.findByIdAndUpdate(
           teacherId,
           { $push: { subjects: idSubjects } },
           { new: true}
            );
            console.log('materia agregada ', addSubject)
            res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteSubject = async (req, res, next) => {
    console.log('Eliminar materia al maestro')
    const { teacherId } = req.params;
    const { checked } = req.body;
    console.log( checked );
    try {
    if(!checked){
        return
    }

    const idSubjects = []
    for (const subject of checked){
        const findSubject = await Subject.findById(subject._id)
        idSubjects.push(findSubject._id);
    }

    console.log(idSubjects)
   
        const subjectDeleted = await User.updateOne({ _id: teacherId}, {$pull: {subjects: {$in: idSubjects}}})
            console.log('materia eliminada ', subjectDeleted)
            res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getSubjectsLeft = async (req, res, next) => {
    console.log('entrando a la funcion left de materias')
    const { teacherId } = req.params;
    try {
     
        const allSubjects = await Subject.find()
       
            const teacher = await User.findOne( {_id: teacherId} )
            .populate({
                path: 'subjects',
                select: '_id'
            })
            const subjectsNo = allSubjects.filter((subject) => {
                const subjectIdString = subject._id.toString();
                return !teacher.subjects.some((assignedSubject) =>
                  assignedSubject._id.toString() === subjectIdString
                );
              });
           

        res.status(201).json(subjectsNo);
        
    } catch (error) {
        res.status(500).json(error)
    }

}

const getSubjectsRigth = async (req, res, next) => {
    const { teacherId } = req.params;
    try {
        const findSubject = await User.findById(teacherId)
        .populate({
            path: 'subjects'
        })
        res.status(201).json(findSubject.subjects);
    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteTeacher =  async (req, res, next) => { 
    const { teacherId } = req.params;
    try {
        const teacherDeleted = await User.findByIdAndUpdate( teacherId, { status: 'Inactive' });
        console.log(teacherDeleted)
        res.status(201).json(teacherDeleted);
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
    getAllTeachers,
    addSubjects,
    getSubjectsRigth,
    getSubjectsLeft,
    deleteSubject,
    deleteTeacher
};