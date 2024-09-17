const express = require('express');
const router = express.Router();
const cors = require('cors')

const allowedOrigins = ['http://localhost:3000', 'http://thanhxk2003.id.vn'];


// const corsOptions = {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true); // Cho phép yêu cầu từ origin này
        } else {
            callback(new Error('Not allowed by CORS')); // Từ chối yêu cầu từ origin này
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

router.use('/', cors(corsOptions));
router.get('/', function (req, res) {
    res.send('Hello đây là api get của api !');
});
router.post('/post', function (req, res) {
    res.send("Post thành công!");
});
router.put('/put', function (req, res) {
    res.send("Put thành công!");
});
router.delete('/delete', function (req, res) {
    res.send("Delete thành công!");
});
module.exports = router;
