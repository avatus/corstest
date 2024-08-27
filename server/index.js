const express = require("express");
var cors = require("cors");

const app = express();
const allowedOrigins = ["https://client.teleport.zarquon.sh:3080"];

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
    return res.send(`
        <!doctype html>
        <html lang="en-US">
        <head>
            <meta charset="UTF-8" />
            <title>My Cool API!</title>
            <style>
            html {
                background: black;
                color: gainsboro;
            }
            </style>
        </head>
        <body>
            <p>Welcome to the API!</p>
        </body>
        </html>
    `);
});

app.get("/mydata", function (req, res) {
    return res.json({ hello: "world" });
});

app.use(express.static(__dirname + "/public"));

app.listen(4000, function () {
    console.log("app running!");
});
