const express = require('express');
const router = express.Router();
const cors = require('cors');

const allowedOrigins = ['http://localhost:3000', 'http://thanhxk2003.id.vn'];

router.use('/', cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true); // Cho phép yêu cầu từ origin này
        } else {
            callback(new Error('Not allowed by CORS')); // Từ chối yêu cầu từ origin này
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
router.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});

// Route POST để tạo mới tài nguyên
router.post('/', function (req, res) {
    const data = req.body;
    // Xử lý logic để lưu dữ liệu
    res.json({ message: 'Đã tạo mới tài nguyên', data });
    console.log(data);
});

// Route PUT để cập nhật tài nguyên
router.put('/', function (req, res) {
    const data = req.body;
    // Xử lý logic để cập nhật dữ liệu
    res.json({ message: 'Đã cập nhật tài nguyên', data });
});

// Route DELETE để xóa tài nguyên
router.delete('/', function (req, res) {
    // Xử lý logic để xóa dữ liệu
    res.json({ message: 'Đã xóa tài nguyên' });
});
module.exports = router;