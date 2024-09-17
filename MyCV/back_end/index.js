const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
// const userRouter = require('./Router/userRouter.js')
// const apiRouter= require('./Router/apiRouter.js')
const router = require('./Router/router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.use('/',router);
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port,()=>{
  console.log(`App listening in port : ${port}`)
});