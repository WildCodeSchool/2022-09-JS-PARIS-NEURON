const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const cookies = require("cookie-parser");
const router = require("./router");

const app = express();

app.use(cookies());

// use some application-level middlewares
app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL, process.env.PREVIEW_FRONTEND_URL],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use(router);

// Redirect all requests to the REACT app
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
