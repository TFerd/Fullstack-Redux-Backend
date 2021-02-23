var mysql = require("mysql");

var connection = mysql.createConnection({
  host    : 'hostname',
  user    : 'username',
  password: 'password'
});

//I MIGHT BE ABLE TO COMBINE ALL THESE FUNCITONS INTO ONE??

//@TODO: change these functions to () => {} notation
export function queryUser(user){
  //Escape param here to prevent sql attacks
  connection.query('SELECT * FROM users WHERE firstName LIKE ' 
  + connection.escape(user),
  (error, results, fields) => {
    if (error) throw error;

    //CREATING  A VARIABLE SO THAT I CAN STORE THE RESULTS BEFORE
    //THE CONNECTION IS CLOSED
    const queryResults;

    //unsure if i need this:
    connection.end((err) => {
      console.log("Connection terminated");
    });
    console.log("Results of query: ", queryResults);
    return queryResults;
  });
}

export function queryAllUsers(){
  connection.query('SELECT * FROM users', 
  (error, results, fields) => {
    if (error) throw error;

    //CREATING  A VARIABLE SO THAT I CAN STORE THE RESULTS BEFORE
    //THE CONNECTION IS CLOSED
    const queryResults;

    //still unsure if i need this:
    connection.end((err) => {
      console.log("Connection terminated");
    });
    console.log("Results of query: ", queryResults);
    return queryResults;
  })
}
