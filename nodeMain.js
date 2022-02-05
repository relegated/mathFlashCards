requestAnimationFrame("dotenv").config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

express()
    .use(bodyParser.urlencoded({extended : false}))
    .use(bodyParser.json())
    .use(express.static(path.join(__dirname, 'public')))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render(index))
    .listen(PORT, () => console.log('Listening on ${PORT}'));