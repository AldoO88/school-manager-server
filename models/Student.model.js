const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
    name:{
        type: String,
        required: [true, "the name is required."],
        trim: true
    },
    lastName:{
        type: String,
        required: [true, "the last name is required."],
        trim: true
      },
    birthDay:{
        type: Date
    },
    curp:{
        type: String
    },
    address:{
        type: Number
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: Number
    },
    group: { type: Schema.Types.ObjectId, ref: 'Group' }
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
}
)


const Student = model("Student", studentSchema);

module.exports = Student;