var mysql = require("mysql");

//Maybe make variables for queries to avoid typos

//Maybe put connection.end()... into a function

var connection = mysql.createConnection({
  host: "hostname",
  user: "username",
  password: "password"
});

//TABLENAME: Users
//FIELDS:    FirstName, LastName, UserId (auto increment)

//I MIGHT BE ABLE TO COMBINE ALL THESE FUNCITONS INTO ONE??

//@TODO: change these functions to () => {} notation
export function queryUser(user) {
  //Escape param here to prevent sql attacks
  connection.query(
    "SELECT * FROM Users WHERE FirstName LIKE " + connection.escape(user),
    (error, results, fields) => {
      if (error) throw error;

      //CREATING  A VARIABLE SO THAT I CAN STORE THE RESULTS BEFORE
      //THE CONNECTION IS CLOSED
      const queryResults = results;

      //unsure if i need this:
      connection.end((err) => {
        if (err) throw err;
        console.log("Connection terminated");
      });
      console.log("Results of query: ", queryResults);
      return queryResults;
    }
  );
}

//MIGHT HAVE TO CHANGE THIS TO LIKE PRIMARYKEY OR SOMETHING
export function queryUserID(userId) {
  //Escape param here to prevent sql attacks
  connection.query(
    "SELECT * FROM Users WHERE UserId = " + connection.escape(userId),
    (error, results, fields) => {
      if (error) throw error;

      //CREATING  A VARIABLE SO THAT I CAN STORE THE RESULTS BEFORE
      //THE CONNECTION IS CLOSED
      const queryResults = results;

      //unsure if i need this:
      connection.end((err) => {
        if (err) throw err;
        console.log("Connection terminated");
      });
      console.log("Results of query: ", queryResults);
      return queryResults;
    }
  );
}

export function queryAllUsers() {
  connection.query("SELECT * FROM Users", (error, results, fields) => {
    if (error) throw error;

    //CREATING  A VARIABLE SO THAT I CAN STORE THE RESULTS BEFORE
    //THE CONNECTION IS CLOSED
    const queryResults = results;

    //still unsure if i need this:
    connection.end((err) => {
      if (err) throw err;
      console.log("Connection terminated");
    });
    console.log("Results of query: ", queryResults);
    return queryResults;
  });
}

export function addUser(firstName, lastName) {
  //@TODO: Destruct user into an object variable and pass like so:
  // var post  = {id: 1, title: 'Hello MySQL'};
  // var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields)

  //var user = ~~destruct user~~
  connection.query(
    "INSERT INTO Users (FirstName, LastName) VALUES (?, ?)",
    [firstName, lastName],
    (error, results, fields) => {
      if (error) throw error;

      endConnection();

      return true;
    }
  );
}

function endConnection() {
  connection.end((err) => {
    if (err) throw err;
    console.log("Connection terminated");
  });
}
