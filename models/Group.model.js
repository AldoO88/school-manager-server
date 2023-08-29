const { Schema, model } = require("mongoose");

const groupSchema = new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    }
}, 
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
}
)


const Group = model("Group", groupSchema);

module.exports = Group;