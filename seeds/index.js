const Student = require('../models/students');

const { firstnames, lastnames } = require('./studentNames')
const { rank, progression } = require('./studentRank')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student-project')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database Connected')
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Student.deleteMany({});
    for(let i = 0; i < 30; i++) {
        const student = new Student({
            username: `${sample(firstnames)} ${sample(lastnames)};`,
            rank: `${sample(rank)}, ${sample(progression)}`,
            linkedin: 'fake linkedin profile'
        })
        await student.save(); 
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})