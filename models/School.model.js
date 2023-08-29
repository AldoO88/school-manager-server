const { Schema, model } = require("mongoose");

const schoolSchema = new Schema({
    name:{
        type: String,
        required: [true, "the name is required."],
        trim: true
    },
    level:{
        type: String
      },
    cct:{
        type: String
    },
    shift:{
        type: String,
        enum: ['Matutino', 'Vespertino', 'Nocturno', 'Mixto']
    },
    address:{
        type: Number
    },
    group: { type: Schema.Types.ObjectId, ref: 'Group' }
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
}
)


const School = model("School", schoolSchema);

module.exports = School;