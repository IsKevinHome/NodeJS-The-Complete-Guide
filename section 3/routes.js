const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>"); // writes data to the response
        res.write("<head><title>Enter message</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            console.log("parsed body:", parsedBody);
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
    res.end(); // lets node know we're done writing
};

module.exports = requestHandler;
