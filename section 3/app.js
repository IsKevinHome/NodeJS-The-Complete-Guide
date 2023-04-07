const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // parses incoming request body (req.body will be undefined by default)

// Remember middleware runs top to bottom.
app.use("/add-product", (req, res, next) => {
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
});

app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    // the '/' here will run anytime that '/' is included
    res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
