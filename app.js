const express = require('express');
const path = require('path');

const Student = require('./models/students');
const Project = require('./models/projects');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student-project')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database Connected')
});

const app = express() ;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/students', async(req, res) => {
    const students = await Student.find({});
    res.render('students/index', {students});
})

app.get('/students/:id', async(req, res) => {
    const student = await Student.findById(req.params.id);
    res.render('students/details', {student});

    if(!student) {
        res.send("Sorry, seems like this student doesn't exist!")
        res.redirect('/students')
    }
})



app.listen(3000, () => {
    console.log('Listening on port 3000');
})
