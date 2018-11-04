var app = require('./config/express')();
var express = require('express');
app.use(express.static(__dirname + '/public'));
app.listen(3000, () => console.log("servidor rodando"));