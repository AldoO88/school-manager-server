const { Schema, model } = require("mongoose");

const groupSchema = new Schema({
    grade: {
        type: String
    },
    group: {
        type: String
    },
    period: { type: Schema.Types.ObjectId, ref: 'Period' } 
}, 
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
}
)


const Group = model('Group', groupSchema);

module.exports = Group;