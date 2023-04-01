const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000); // nodeJS will not close script, will keep running and listen for incoming requests.
