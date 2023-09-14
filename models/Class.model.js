const { Schema, model } = require("mongoose");

const classSchema = new Schema({
    period: { type: Schema.Types.ObjectId, ref: 'Period' },
    users: { type: Schema.Types.ObjectId, ref: 'User' },
    subjects: { type: Schema.Types.ObjectId, ref: 'User' },
    group: {type: Schema.Types.ObjectId, ref: 'User'}
}, 
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
}
)


const Class = model('Class', classSchema);

module.exports = Class;