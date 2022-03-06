'use strict';
console.log('----- started the app -------')

const fs = require('fs');

let rawdata = fs.readFileSync('./users.json');
let usersData = JSON.parse(rawdata);





console.log(usersData)
console.log("whatsup lil nigga!")



const bodyParser = require('body-parser')
const express = require('express')
const app = express()

var obj = require('./users.json').users;


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());


// Post request to create a new user
app.post('/CreateUser', (req, res) => {

  console.log("---------------------")
  console.log("post request to the server --> ", req.body)

  usersData.users.push({"note": `${req.body.note}`, "date": `${req.body.date}`, "done": `${false}`})

  const jsonString = JSON.stringify(usersData);

  fs.writeFile('./users.json', jsonString, err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
  console.log("---------------------")
//  obj.newThing = req.body;
//  fs.appendFile('./users.json', JSON.stringify(obj), function (err) {
//  console.log(err);
//});
})

// Get request to fetch the data
app.get("/api", (req, res) => {
    res.json(usersData)
    console.log("get request to the server!")
})
app.get("/", (req, res) => {
  res.json("Welcome to this page!")
  console.log("get request to the server!")
})

app.post('/api/posts', (req, res) => {
  res.send(req.body.users.map(x=>x))
})

const port = process.env.PORT || 3080; 
app.listen(port, ()=> console.log(`Listning on port port - ${port}`));
