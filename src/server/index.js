//For testing locally, change to ---> cd Desktop\Udacity\Udacity_Web_project_4\fend-webpack-content

//Set up access to .env file to obtain private MeaningCloud.com API key
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')  <-- no longer needed so comment out

const app = express()
app.use(express.static('dist'))      //app.use(express.static('src/client'))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')  //res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})

// designates what port the app will listen to for incoming requests and shows the API key
app.listen(8081, function () {
    console.log('App listening on port 8081!');
    //console.log(`API key =  &{process.env.API_KEY}`);
    console.log(`Your API key is ${process.env.API_KEY}`);
})

//Return private MeaningCloud.com API key (in JSON format) when requested by client 
app.get('/getapikey', function (req, res) {
    res.send({'apikey': process.env.API_KEY})
})
