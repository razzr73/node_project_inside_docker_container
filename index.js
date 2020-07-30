const express = require('express');
const app = express();
const logg = require('./logger')
const authenticate = require('./authentication')
app.use(express.json());
app.use(express.urlencoded({extended : true}))  //key=value&key=value
app.use(express.static('public')); // to server static files // localhost:4200/readme.txt

console.log(process.env.NODE_ENV) //to check environment

if(process.env.NODE_ENV == undefined){
    app.use(logg)
}else{
    app.use(authenticate)
}

const courses=[
    {id: 1 ,name:'course1'},
    {id: 2 ,name:'course2'}
]

app.get('/',(req,res)=> {
    res.send('Hello World')
})


app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
    res.send(JSON.stringify(courses.filter((x)=> {return x.id == req.params.id})))
})

app.post('/api/courses',(req,res)=>{
    console.log(req.body)
  const course={
    id: courses.length + 1,
    name:req.body.name
  };
  courses.push(course);
  res.send(courses)
})


const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`listeing on port ${port} with nodemon`)
})