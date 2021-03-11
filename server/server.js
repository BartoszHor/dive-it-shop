const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const helmet = require('helmet');

const server = app.listen(process.env.PORT || 8000, () => { 
    console.log('Server is running...')
})

//Middlewares//

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

app.use((req, res) => {
    res.status(404).send('404 not found...');
  })

module.exports = server;