#!/bin/sh

nodemon app.js --watch utils --watch *.js --watch routes --watch .env --exec babel-node
