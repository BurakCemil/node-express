# node-express
 A Node.js & Express + Mongoose + Docker RESTful affair

## Introduction

While this express train can't take you to Hogwarts (sorry), it should give you, an aspiring web developer, a quick overview of how to build RESTful APIs with (hopefully) the least amount of middleware and callback hell with fancy ES6 and ES7 icing and sprinkles (async/await, Promises, arrow functions etc.).

## The Setup

Here are the basics:
* Node.js: using Express with various middleware to build RESTful APIs with Bearer token authentication (via jwt + Passport). More in `./package.json`

* Docker: docker-compose with a custom Alpine Node.js container with `nodemon` to allow for faster development and a standard MongoDB container. `docker-compose up --build` to get started and Google.com if you don't know what I am talking about. Currently docker-compose is mounting this directory, which allows for instant code changes to be registered together with nodemon!

* **Don't use this setup in production!** This setup has been created for fast development. A separate Docker setup is needed for production depending on your requirements, which can vary immensely. Especially valid for the missing env. variables for the DB auth etc. Furthermore the current error messages for the login are too verbose and allow user enumeration - you should always return a generic error message when login was unsuccessful.


## Open todos

Too many to count?

I guess this will be an ongoing effort as Node.js, Express, Docker and MongoDB continue to evolve. And I might end up with a larger use case to showcase what's possible.

Will def. add Swagger soon though :)

Feel free to open issues if you have suggestions!
