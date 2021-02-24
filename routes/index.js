// import queries from queries;
import queryUser from "../queries/userQueries";
import queryAllUsers from "../queries/userQueries";

//aka exp const register
//This starts up all the listeners
const register = (app) => {
  //for multiple HTTP methods on one route, use:
  //app.route('route/goes/here').post(function).get(function). etc...

  //Listeners:

  //Users:
  //send params as params to the queries
  app.get("/users", (req, res) => {
    const response = queryAllUsers();
    console.log("Responding with: ", response);
    res.send(response);
  });

  app.get("/user/:firstName", (req, res) => {
    //import then call queries
    const response = queryUser(req.params);

    console.log("Responding with: ", response);

    res.send(response);
  });
  //End users

  //Index
  //turn this into a table of contents for the api maybe
  app.get("/", (req, res) => {
    req.params;
    res.send("index");
  });
};

//@TODO: CHANGE THIS TO ES6 FORMAT
exports.register = register;
