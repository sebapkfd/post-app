const express = require('express');
const cors = require('cors');
const pool = require('./db');
const indexRouter = require('./routes/index');

const app = express();

app.use(cors())
app.use(express.json())
app.use('/', indexRouter);


app.listen(5000, () => {
    console.log('Listen in 5000');
})