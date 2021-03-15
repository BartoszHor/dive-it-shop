const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
const helmet = require('helmet');
//Config//
require(`./../config.js`)
const feedbacksRoutes = require('./routes/feedbacks.route');

//Start server//

const app = express();

//Middlewares & endpoints//
const corsOption = {
  origin: '*',
  credentials: true,
};

app.use((req, res, next) => {
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', '*');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);

next();
});

app.use('/api', feedbacksRoutes)
app.use(helmet());
app.use(cors(corsOption));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


//Api errors

app.use((req, res) => {
    res.status(404).send('404 not found...');
  })

//Mongoose connection//

const dbURI =`mongodb+srv://${process.env.user}:${process.env.pass}@cluster0.ltq2j.mongodb.net/DiveIt?retryWrites=true&w=majorityc`

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));


//Run server//

const PORT = process.env.PORT || 8000
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`)
})