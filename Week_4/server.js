const express = require('express');
const app = express();
const path = require('path');
const studentDetails = require('./data/data');
const bodyParser = require('body-parser');
const ejs = require('ejs');


app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('About Us');
})

    app.get('/contact', (req, res) => { 
        res.send('Contact Us');
})

app.post('/profile', (req, res) => {
    const data = req.body;
    console.log(data);
    const {name, email, rollno} = req.body;
    const newStudent= {
        name,
        email,
        rollno
    }
    studentDetails.push(newStudent);
    // res.send(`Hello ${name} Your email is ${email} Your rollno is ${rollno}`);
    res.redirect('/');

})

app.get('/students', (req, res) => {
    res.send(studentDetails);
})

app.listen(3005, () => {
  console.log('Server is running on http://localhost:3005');
});
