const { Schema, model } = require("mongoose");

const subjectSchema = new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    grade:{
        type: String
    },
    credits:{
        type: String
    },
    hoursWeek:{
        type: Number
    },
    maxHoursDay:{
        type: Number
    }
}, 
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
}
  )


const Subject = model("Subject", subjectSchema);

module.exports = Subject;