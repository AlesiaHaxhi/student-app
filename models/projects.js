const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    task: {
        title: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true
        },
        date: Number
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }
})

module.exports = mongoose.model('Project', ProjectSchema)