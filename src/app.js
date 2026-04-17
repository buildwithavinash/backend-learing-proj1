const express = require("express");
const multer = require("multer");
const mongoose = require('mongoose')
const postModel = require("./models/post.model");
const uploadFile = require("./services/storage.service");
const app = express();
const cors = require('cors')

// middleware
app.use(express.json());
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });


// post api
app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer)
  
  const post = await postModel.create({
    postImgUrl: result.url,
    postCaption: req.body.caption,
  })

  return res.status(201).json({
    messgae: "Post created!",
    post,
  })
});

// get api
app.get('/posts', async (req, res) => {
    const posts = await postModel.find();

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
})

module.exports = app;
