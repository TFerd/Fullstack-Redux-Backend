// import register from "./routes/index";
const register = require('./routes/index.js');

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8081;

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

register.register(app);

// app.get("/", (req, res) => {
//     res.send("Fuck you! :D ");
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})