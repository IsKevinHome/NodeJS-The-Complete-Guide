const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // greeting page + form
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Section 3 Assignment</title></head>");
        res.write("<h1>Welcome to Section 3 Assignment 1</h1>");
        res.write(
            "<body><form action='/create-user' method='POST'><input type='text' name='users'><button type='submit'>Send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    }
    // list of hardcoded users
    if (url === "/users") {
        res.write("<html>");
        res.write("<h1>Users</h1>");
        res.write("<ul><li>User#1</li><li>User#2</li><li>User#3</li></ul>");
        res.write("</html>");
        return res.end();
    }
    //  handle post from form
    if (url === "/create-user" && method === "POST") {
        const body = [];

        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            console.log("parsed body:", parsedBody);
        });
    }
    return res.end(); // lets node know we're done writing
};

module.exports = requestHandler;
