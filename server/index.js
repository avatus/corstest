const express = require("express");
var cors = require("cors");

const app = express();
const allowedOrigins = ["https://client.teleport.zarquon.sh:3080"];
app.use((req, res, next) => {
    console.log(req.method);
    next();
});

app.use(
    cors({
        origin: (origin, callback) => {
            if (allowedOrigins.includes(origin) || !origin) {
                callback(null, origin);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

app.get("/", function (req, res) {
    return res.json({ hello: "from the home page" });
});

app.get("/thing", function (req, res) {
    return res.json({ hello: "world" });
});

app.use(express.static(__dirname + "/public"));

app.listen(4000, function () {
    console.log("app running!");
});
