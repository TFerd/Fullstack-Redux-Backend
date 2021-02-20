// import express from "express"; 

//aka exp const register
//This starts up all the listeners
const register = (app) => {

    //for multiple HTTP methods on one route, use:
    //app.route('route/goes/here').post(function).get(function). etc...

    //Listeners:
    //  app.route('/users').post((req, res) => {
    //      res.send("im farting!")
    //  }); 
    app.get('/all-users', (req, res) => {
        res.send("all users");
    } );
    app.get('/user', (req, res) => {
        res.send("uyser");
    })
    //index
    //turn this into a table of contents for the api maybe
    app.get("/", (req, res) => {
        res.send("index");
    });
}

//@TODO: CHANGE THIS TO ES6 FORMAT
exports.register = register;