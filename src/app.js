var app = require('./config/express')();
var express = require('express');

console.log(process.env.HOST)
app.use(express.static(__dirname + '/public'));
app.listen(3000, function() {
    console.log("servidor rodando");
})
