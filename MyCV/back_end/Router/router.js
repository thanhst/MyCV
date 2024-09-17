const express=require('express')
const router = express.Router();
const userRouter= require('./userRouter.js');
const apiRouter = require('./apiRouter.js')

router.use('/',userRouter);
router.use('/api',apiRouter);
module.exports = router;