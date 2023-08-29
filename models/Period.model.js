const { Schema, model } = require("mongoose");

const periodSchema = new Schema({
    startDate:{
        type: Date
    },
    endDate:{
        type: Date
      },
    status:{
        type: String,
        enum: ['Activo', 'Cloncluido']
    },
    shift:{
        type: String,
        enum: ['Matutino', 'Vespertino', 'Nocturno', 'Mixto']
    },
    address:{
        type: Number
    },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    users: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group'}]
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
}
)


const Period = model("Period", periodSchema);

module.exports = Period;