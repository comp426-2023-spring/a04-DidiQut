#!/usr/bin/env node
import { rps, rpsls } from "./lib/rpsls.js";
import express from "express";
import minimist from "minimist";

// Parse the command line arguments to get the port number:
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// Create an instance of the express application:
const app = express();

// get the json format
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// if API endpoints does not define, return 404 NOT found
// app.get("*", function (req, res) {
//   res.status(404).send("404 NOT FOUND");
// });

// // Check endpoint and return 200 ok
app.get("/app", function (req, res) {
  res.status(200).send("200 OK");
});

// Check rps endpoint returns {"player": "(rock|paper|scissors)""}
app.get("/app/rps", (req, res) => {
  res.status(200).send(JSON.stringify(rps()));
});

// Check rpssls endpoint returns {"player": "(rock|paper|scissors|lizard|spock)""}
app.get("/app/rpsls", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls()));
});

// using URLEncoded query parameters (req.query):
app.get("/app/rps/play", (req, res) => {
  res.status(200).send(JSON.stringify(rps(req.query.shot)));
});

// using URLEncoded query parameters (req.query):
app.get("/app/rpsls/play", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
});

// using JSON body requests (req.body):
app.post("/app/rps/play", (req, res) => {
  res.status(200).send(JSON.stringify(rps(req.body.shot)));
});

// using JSON body requests (req.body):
app.post("/app/rpsls/play", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
});

// Define middleware to handle endpoint /app/rps/play/
app.get("/app/rps/play/:shot", (req, res) => {
  res.status(200).send(JSON.stringify(rps(req.params.shot)));
});

// Define middleware to handle endpoint /app/rpsls/play/
app.get("/app/rpsls/play/:shot", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
});

app.get("*", function (req, res) {
  res.status(404).send("404 NOT FOUND");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
