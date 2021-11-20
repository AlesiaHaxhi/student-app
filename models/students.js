const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema ({
    username: String,
    rank: String,
    id: Number,
    linkedin: String,
    projects: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
})

module.exports = mongoose.model('Student', StudentSchema)