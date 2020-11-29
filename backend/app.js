const { log } = require('console');
const express = require('express');

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: '32425235',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: '54645723',
      title: 'Second server-side post',
      content: 'This is coming from the server!'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  })
});

module.exports = app;
