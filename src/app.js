const express = require('express');
const multer = require('multer')
const postModel = require('./models/post.model')
const app = express();

// middleware
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()})

app.post('/create-post',upload.single('image') , async (req, res)=> {
    const data = req.body

    console.log(data);
    console.log(req.file);

})

module.exports = app