const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.post("/greet", (req, res) => {
  const { firstName, lastName } = req.body;

  if (firstName === undefined || lastName === undefined) {
    return res.status(400).json({ error: "First and last name required." })
  }

  const greeting = `Hello, my name is ${firstName} ${lastName}`;

  return res.json({ greeting });
})

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Command Not Found",
  });
});

exports.handler = serverless(app);
