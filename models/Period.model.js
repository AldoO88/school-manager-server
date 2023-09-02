const { Schema, model } = require("mongoose");

const periodSchema = new Schema({
    description: {
        type: String
    },
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
    schools: [{ type: Schema.Types.ObjectId, ref: 'School' }],
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
}
)


const Period = model("Period", periodSchema);

module.exports = Period;