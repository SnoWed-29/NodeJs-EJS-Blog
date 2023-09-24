const express = require('express');
const router = express.Router();
const Post = require('../models/Post')




/*
  *  GET / 
  *  HOME
*/
router.get("", async (req, res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog Created With NodeJs, Express, MongoDb"
    }

    try {
        const data =  await Post.find();
        res.render('index', { locals, data });
    } catch (err) {
        console.log(err);
    }
})


router.get("/about",(req, res) => {
    res.render('about');
})
 module.exports =  router