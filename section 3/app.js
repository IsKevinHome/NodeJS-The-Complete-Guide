const express = require("express");

const app = express();

// app.use function runs every request (middleware)
// app.use((req, res, next) => {
//     console.log("Inside the middleware");
//     next(); // Allows the request to continue to the next middleware.
// });

// Remember middleware runs top to bottom.
app.use("/add-product", (req, res, next) => {
    console.log("In another middleware");
    res.send("<h1>Add Product</h1>");
});

app.use("/", (req, res, next) => {
    // the '/' here will run anytime that '/' is included
    console.log("Inside the middleware");
    res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
