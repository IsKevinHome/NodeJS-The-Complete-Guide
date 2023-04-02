const express = require("express");

const app = express();

// app.use function runs every request (middleware)
app.use((req, res, next) => {
    console.log("Inside the middleware");
    next(); // Allows the request to continue to the next middleware.
});

app.use((req, res, next) => {
    console.log("Inside the middleware");
    res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
