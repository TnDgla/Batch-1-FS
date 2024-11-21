const express = require('express') // express is a variable
const app = express()
const path = require('path')
var bodyParser = require('body-parser')
const studentData = require('./data/data.js')
const StudentsDetail = require('./data/data.js')

app.use(express.static(path.join(__dirname, "static"))) //it gives the absolute path (from index.js) //dirname = directory name 
app.use(express.urlencoded({extended: false}));

app.set('view engine','ejs'); //now we can delete static by using templating language ejs
app.set('views','./view')

app.get('/newForm',(req,res)=>{
    res.render('newForm.ejs') 
})

app.get('/home',(req,res)=>{
    res.render('home.ejs',{StudentsDetail}) 
})

app.use(bodyParser.json())

/*app.get('/greet',(req,res)=>{
    res.send('Hello World')
})//greet is a kind of path

app.get('/home',(req,res)=>{
    res.send('HOME')
})

app.get('/contact',(req,res)=>{
    res.send('CONTACT')
})

app.get('/about',(req,res)=>{
    res.send('ABOUT')
})*/

app.post('/information',(req,res)=>{
    const {name, rollno, marks, course} = req.body; //body is a key or attribute in which request data is stored

    const newStudent = {
        name:name,
        rollno:rollno,
        marks:marks,
        course:course    
    }
    console.log(StudentsDetail.length)

    StudentsDetail.push(newStudent);

    // res.send("Student added") //this line is compulsory bcz sending response is compulsory

    res.redirect('/home') 
})

app.get('/all',(req,res)=>{
    res.send(StudentsDetail)
})

app.listen(3000 , ()=>{
    console.log("Serve is running at port 3000")
}) 

// listen is used to  make any server //nodemon restart the file automatically / by its own  we dont need to restart the index.js file by our own
// when we connect with server it gives two thing request and response // get take two  things callback function and route

//<% for (let student of StudentsDetail) { %> //called ejs text