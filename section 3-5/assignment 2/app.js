const express = require("express");

const app = express();

// app.use("/", (req, res, next) => {
//     console.log("This is inside a middleware function");
//     next();
// });

// app.use("/", (req, res, next) => {
//     console.log("This is inside a a different middleware function");
// });

app.use("/users", (req, res, next) => {
    console.log("this is from the '/users' route middleware");
    res.send("<h1>This is '/users' middleware</h1>");
});

app.use("/", (req, res, next) => {
    console.log("this is from the '/' middleware");
    res.send("<h1>This is '/' middleware</h1>");
});

app.listen(3000);
