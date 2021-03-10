// import queries from queries;
import { addUser, queryUserID, queryUser } from "../queries/userQueries";
import queryAllUsers from "../queries/userQueries";

//aka exp const register
//This starts up all the listeners
const register = (app) => {
  //for multiple HTTP methods on one route, use:
  //app.route('route/goes/here').post(function).get(function). etc...

  //Listeners:

  //Users:
  //send params as params to the queries
  //Query all users
  app.get("/users", (req, res) => {
    const response = queryAllUsers();
    console.log("Responding with: ", response);
    res.send(response);
  });

  //Query users by firstName
  app.get("/user/firstName/:firstName", (req, res) => {
    //import then call queries
    const response = queryUser(req.params);

    console.log("Responding with: ", response);

    res.send(response);
  });

  //Query users by ID
  app.get("/user/:id", (req, res) => {
    const response = queryUserID(req.params);

    console.log("Responding with: ", response);

    res.send(response);
  });

  //Add user
  app.post("/addUser/:firstName-:lastName", (req, res) => {
    //IF ADD USER RETURN BOOLEAN TRUE? SUCCESS
    // addUser(req.params);
    if (addUser(req.params)) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  });
  //End users

  //Index
  //turn this into a table of contents for the api maybe
  app.get("/", (req, res) => {
    // req.params;  <--- wtf?
    res.send("index");
  });
};

//@TODO: CHANGE THIS TO ES6 FORMAT
exports.register = register;
