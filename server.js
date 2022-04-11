'use strict';
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const fs = require('fs');
const PORT = process.env.PORT || 1337; 

//  -------  get the usersData
let rawdata = fs.readFileSync('./users.json');
let usersData = JSON.parse(rawdata);

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());
app.use(express.static('frontend'))

// Post request to create a new user
app.post('/CreateNote', (req, res) => {
  console.log("post request to the server --> ", req.body)
  usersData.users.push({"note": `${req.body.note}`, "date": `${req.body.date}`, "done": `${false}`})
  const jsonString = JSON.stringify(usersData);
  res.send('good job! we added a new note!')
  fs.writeFile('./users.json', jsonString, err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
})

// Routes - REST APIs
app.get('/getUsers', (req, res) => {
  res.send(usersData)
})


app.listen(port, ()=> console.log(`Listning on port port - ${port}`));
