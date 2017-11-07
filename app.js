const Express = require("express");
const Cors = require("cors");

const app = Express();

// first approach
// app.use(function(request, response, next) {
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// second approach
app.use(Cors());

app.get("/", (request, response) => {
    response.send("Hello World");
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});